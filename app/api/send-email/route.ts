import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const {name, email, subject, message, recaptchaToken} = await req.json();

    // Verify reCAPTCHA
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${recaptchaSecretKey}&response=${recaptchaToken}`,
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
        return NextResponse.json({error: 'reCAPTCHA verification failed'}, {status: 400});
    }

    // Create transporter with Zoho SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.ZOHO_EMAIL,
            pass: process.env.ZOHO_APP_PASSWORD,
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: process.env.ZOHO_EMAIL,
            to: process.env.MAIL_RECIPIENT,
            subject: `New Contact Form Submission (ZV Website)`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Subject:</strong> ${subject}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({message: 'Email sent successfully!'});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({error: 'Error sending email'}, {status: 500});
    }
}