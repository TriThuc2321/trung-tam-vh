import getContactTemplate from "@/components/templateMails/contact";
import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log("request body", { name, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: SMTP_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: getContactTemplate({ name, email, phone, message }),
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
