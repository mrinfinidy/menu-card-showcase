import emailjs from '@emailjs/nodejs';
import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const key = `ratelimit:${ip}`;
    const now = Date.now();
    const windowMs = 5 * 60 * 1000;
    const maxRequests = 15;

    if (!rateLimitMap.has(key)) {
      rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    } else {
      const rateData = rateLimitMap.get(key);
      if (now > rateData.resetTime) {
        rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
      } else {
        rateData.count++;
        if (rateData.count > maxRequests) {
          return NextResponse.json(
            { error: 'Too many requests' },
            { status: 429 }
          );
        }
      }
    }

    const order = await request.json();
    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;
    const privateKey = process.env.PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error('Missing required EmailJS configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const templateParams = {
      menu_name: order,
      timestamp: new Date().toISOString(),
      ip_address: ip,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
      privateKey: privateKey,
    });

    console.log('Email sent successfully!', result.text);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('Email failed...', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process order' },
      { status: 500 }
    );
  }
}
