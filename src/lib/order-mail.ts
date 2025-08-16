import emailjs from '@emailjs/browser';

function sendOrderMail(order: string): Promise<void> {
  const serviceId = process.env.SERVICE_ID || "";
  const templateId = process.env.TEMPLATE_ID || "";
  const publicKey = process.env.PUBLIC_KEY || "";

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
