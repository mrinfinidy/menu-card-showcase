import emailjs from '@emailjs/browser';

function sendOrderMail(order: string): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const templateParams = {
    menu_name: order,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((result: any) => {
      console.log('Email sent successfully!', result.text);
    }, (error: Error) => {
      console.log('Email failed...', error);
    });
}

export default sendOrderMail;
