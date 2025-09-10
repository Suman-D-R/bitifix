import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Debug: Log environment variables (without sensitive data)
    // console.log('Environment variables check:', {
    //   SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
    //   SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
    //   SMTP_SECURE: process.env.SMTP_SECURE || 'NOT SET',
    //   EMAIL_USER: process.env.EMAIL_USER ? 'SET' : 'NOT SET',
    //   EMAIL_PASS: process.env.EMAIL_PASS ? 'SET' : 'NOT SET',
    // });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate required environment variables
    if (!process.env.SMTP_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    //   console.error('Missing required environment variables:', {
    //     SMTP_HOST: !!process.env.SMTP_HOST,
    //     EMAIL_USER: !!process.env.EMAIL_USER,
    //     EMAIL_PASS: !!process.env.EMAIL_PASS,
    //   });
      return NextResponse.json(
        { error: 'Email configuration is incomplete. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Create transporter using custom domain SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Add connection timeout and retry options
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    });

    // Email to admin (sumandr27@gmail.com)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f97316;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Service Interested In:</strong> ${formData.service || 'Not specified'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
          <p style="margin: 0; color: #1976d2; font-size: 14px;">
            <strong>Note:</strong> This message was sent from the Bitifix contact form.
          </p>
        </div>
      </div>
    `;

    // Auto-reply email to user
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px; padding: 20px; background-color: #f97316; border-radius: 8px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Bitifix</h1>
          <p style="color: #ffffff; margin: 5px 0; font-size: 14px; opacity: 0.9;">Digital Solutions & Innovation</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Thank You for Contacting Us!</h2>
          <p style="color: #555; line-height: 1.6;">
            Hi ${formData.name},
          </p>
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out to Bitifix! We have received your message and appreciate your interest in our services.
          </p>
          <p style="color: #555; line-height: 1.6;">
            <strong>This is an automated response.</strong> Our team will review your inquiry and get back to you within 24 hours.
          </p>
        </div>

        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
          <p><strong>Service Interested In:</strong> ${formData.service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin: 10px 0;">
            <p style="margin: 0; white-space: pre-wrap; color: #555;">${formData.message}</p>
          </div>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f97316;">
          <h3 style="color: #1f2937; margin-top: 0; font-size: 16px;">What's Next?</h3>
          <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Our team will review your requirements</li>
            <li style="margin-bottom: 8px;">We'll prepare a customized proposal</li>
            <li style="margin-bottom: 8px;">You'll receive a detailed response within 24 hours</li>
            <li>We may schedule a consultation call if needed</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #1f2937; border-radius: 8px; border: 2px solid #f97316;">
          <h3 style="color: #f97316; margin: 0 0 10px 0; font-size: 18px;">Need Immediate Assistance?</h3>
          <p style="color: #ffffff; margin: 0; font-size: 14px;">
            Call us at <strong style="color: #f97316;">+91 9902696211</strong> or email us at 
            <a href="mailto:info@bitifix.com" style="color: #60a5fa; text-decoration: none; font-weight: bold;">info@bitifix.com</a>
          </p>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>© 2024 Bitifix. All rights reserved.</p>
          <p>2nd Cross, 1st Main, Sector 1, HSR Layout, Bangalore, Karnataka, India</p>
        </div>
      </div>
    `;

    // // Test the connection first
    // console.log('Testing SMTP connection...', {
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: process.env.SMTP_SECURE,
    //   user: process.env.EMAIL_USER,
    //   passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
    // });

    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'SMTP connection failed. Please check your email configuration.',
          details: verifyError instanceof Error ? verifyError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }

    // Send email to admin
    // console.log('Sending admin notification email...');
    await transporter.sendMail({
      from: `"Bitifix" <${process.env.EMAIL_USER}>`,
      to: 'sumandr27@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: adminEmailHtml,
    });
    console.log('Admin notification email sent successfully');

    // Send auto-reply to user
    console.log('Sending auto-reply email to user...');
    await transporter.sendMail({
      from: `"Bitifix" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: 'Thank you for contacting Bitifix - We\'ll be in touch soon!',
      html: autoReplyHtml,
    });
    console.log('Auto-reply email sent successfully');

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Connection refused. Please check your SMTP host and port settings.';
      } else if (error.message.includes('ENOTFOUND')) {
        errorMessage = 'SMTP host not found. Please check your SMTP host configuration.';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Authentication failed. Please check your email credentials.';
      } else {
        errorMessage = `Email error: ${error.message}`;
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
