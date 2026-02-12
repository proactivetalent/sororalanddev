import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, firstName, lastName, email, phone, message, source } = body;

    // Determine the sender's name
    const senderName = name || `${firstName || ""} ${lastName || ""}`.trim() || "Unknown";

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    // Determine subject based on source
    const subject =
      source === "footer"
        ? `New Footer Inquiry from ${senderName}`
        : `New Contact Form Submission from ${senderName}`;

    // Build email HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #E20D6E, #c40b5e); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 22px;">
            ${source === "footer" ? "Footer Inquiry" : "Contact Form Submission"}
          </h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">
            Sorora Land Development
          </p>
        </div>
        
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; font-weight: bold; color: #333; width: 120px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; color: #555;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; color: #555;">
                <a href="mailto:${email}" style="color: #E20D6E; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e8e8; color: #555;">
                <a href="tel:${phone}" style="color: #E20D6E; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; color: #555; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
        
        <p style="color: #999; font-size: 12px; margin-top: 16px; text-align: center;">
          This email was sent from the Sorora Land Development website.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Sorora Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
