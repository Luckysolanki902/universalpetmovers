import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, phoneNumber, petType, petAge, transportDate, transportMode, dropLocation, comments } = await request.json();

    // Basic validation
    if (!name || !phoneNumber || !petType || !petAge || !transportDate || !transportMode || !dropLocation) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }// Create transporter (you'll need to configure with actual email service)
    // For now, using a generic SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'universalpetmovers7@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    });    // Email content
    const emailContent = `
      New Pet Transport Request from Universal Pet Movers Website
      
      Customer Details:
      - Name: ${name}
      - Contact Phone: ${phoneNumber} (Customer should be contacted on this number)
      
      Pet Information:
      - Pet Type: ${petType}
      - Pet Age: ${petAge} years
      
      Transport Details:
      - Transport Date: ${new Date(transportDate).toLocaleDateString('en-IN')}
      - Mode of Transportation: ${transportMode}
      - Drop Location: ${dropLocation}
      
      Additional Comments:
      ${comments || 'No additional comments provided.'}
      
      Submitted on: ${new Date().toLocaleString('en-IN')}
      
      Please contact the customer as soon as possible to provide a quote and discuss the transport requirements.
    `;    // Email to business
    const businessEmail = {
      from: process.env.SMTP_USER || 'universalpetmovers7@gmail.com',
      to: ['universalpetmovers7@gmail.com', 'akhandanandtripathi143@gmail.com'], // sending to both personal and business
      subject: `🐾 New Pet Transport Request - ${name} (${petType})`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2c5530; text-align: center; border-bottom: 2px solid #2c5530; padding-bottom: 10px;">
            🐾 New Pet Transport Request
          </h2>
            <div style="background: #f8fdf9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c5530; margin-top: 0;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> <a href="tel:${phoneNumber}" style="color: #2c5530;">${phoneNumber}</a></p>
          </div>
          
          <div style="background: #f0f8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c5530; margin-top: 0;">Pet Information</h3>
            <p><strong>Pet Type:</strong> ${petType}</p>
            <p><strong>Pet Age:</strong> ${petAge} years</p>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c5530; margin-top: 0;">Transport Details</h3>
            <p><strong>Transport Date:</strong> ${new Date(transportDate).toLocaleDateString('en-IN')}</p>
            <p><strong>Mode:</strong> ${transportMode}</p>
            <p><strong>Drop Location:</strong> ${dropLocation}</p>
          </div>
          
          ${comments ? `
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c5530; margin-top: 0;">Additional Comments</h3>
            <p style="white-space: pre-wrap;">${comments}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #2c5530; border-radius: 8px;">
            <p style="color: white; margin: 0;">
              <strong>⏰ Please contact the customer immediately to provide a quote!</strong>
            </p>
            <p style="color: #ccc; margin: 5px 0 0 0; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      `,
    };

    // Customer confirmation email    const customerEmail = {
      from: process.env.SMTP_USER || 'universalpetmovers7@gmail.com',
      to: 'universalpetmovers7@gmail.com', // We don't have customer email, so this is a placeholder
      subject: 'Thank you for your Pet Transport Request - Universal Pet Movers',
      text: `        Dear ${name},
        
        Thank you for choosing Universal Pet Movers for your pet transportation needs.
        
        We have received your request for ${petType} transport and our team will contact you shortly on ${phoneNumber} to discuss the details and provide you with a customized quote.
        
        Your Request Details:
        - Pet Type: ${petType}
        - Pet Age: ${petAge} years
        - Transport Date: ${new Date(transportDate).toLocaleDateString('en-IN')}
        - Mode: ${transportMode}
        - Destination: ${dropLocation}
        
        For immediate assistance, please call us at our customer service number.
        
        Thank you for trusting us with your beloved pet's transportation.
        
        Best regards,
        Universal Pet Movers Team
      `,
    };    // Send business email
    await transporter.sendMail(businessEmail);
    
    // Note: We're not sending customer email since we don't collect customer email
    // The customer will be contacted via phone as mentioned in the request
    
    return NextResponse.json(
      { 
        message: 'Your request has been submitted successfully! We will contact you shortly on the provided phone number.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        message: 'Sorry, there was an error processing your request. Please try again or call us directly.',
        success: false 
      },
      { status: 500 }
    );
  }
}
