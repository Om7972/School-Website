import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const createEnquiryEmail = (formData) => {
  return {
    subject: 'New Enquiry from Narayana Institute Website',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Narayana Institute</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">New Enquiry Received</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            📋 Student Enquiry Details
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 15px;">👤 Student Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">First Name:</td>
                <td style="padding: 8px 0; color: #333;">${formData.firstName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Last Name:</td>
                <td style="padding: 8px 0; color: #333;">${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Class Standard:</td>
                <td style="padding: 8px 0; color: #333;">Class ${formData.standard}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 15px;">📞 Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Mobile:</td>
                <td style="padding: 8px 0; color: #333;">${formData.mobile}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-bottom: 15px;">📍 Location Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">State:</td>
                <td style="padding: 8px 0; color: #333;">${formData.state}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">City:</td>
                <td style="padding: 8px 0; color: #333;">${formData.city}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">School:</td>
                <td style="padding: 8px 0; color: #333;">${formData.school}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
            <h4 style="color: #667eea; margin: 0 0 10px 0;">📅 Enquiry Submitted</h4>
            <p style="margin: 0; color: #666; font-size: 14px;">
              Date: ${new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This enquiry was submitted through the Narayana Institute website.
              Please respond to this enquiry within 24 hours.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>© 2024 Narayana Institute. All rights reserved.</p>
        </div>
      </div>
    `
  };
};

const createConfirmationEmail = (formData) => {
  return {
    subject: 'Thank you for your enquiry - Narayana Institute',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">Narayana Institute</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for your enquiry!</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; margin-bottom: 20px; text-align: center;">
            🎉 Enquiry Received Successfully!
          </h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Dear ${formData.firstName} ${formData.lastName},
          </p>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in Narayana Institute! We have received your enquiry for Class ${formData.standard} 
            at our ${formData.school} in ${formData.city}, ${formData.state}.
          </p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #667eea; margin: 0 0 15px 0;">📋 What happens next?</h3>
            <ul style="color: #555; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Our admissions team will review your enquiry within 24 hours</li>
              <li style="margin-bottom: 8px;">You will receive a detailed information package via email</li>
              <li style="margin-bottom: 8px;">Our team will contact you to schedule a school visit</li>
              <li style="margin-bottom: 8px;">We'll guide you through the admission process</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0;">
            <h3 style="color: #856404; margin: 0 0 10px 0;">📞 Contact Information</h3>
            <p style="color: #856404; margin: 0; font-size: 14px;">
              If you have any immediate questions, please contact us at:<br>
              📧 admissions@narayanainstitute.com<br>
              📱 +91-XXXXXXXXXX
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              We look forward to welcoming you to the Narayana Institute family!
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
          <p>© 2024 Narayana Institute. All rights reserved.</p>
        </div>
      </div>
    `
  };
};

// Routes
app.post('/api/enquiry', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'mobile', 'state', 'city', 'school', 'standard'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    const transporter = createTransporter();
    
    // Send email to admin
    const adminEmail = createEnquiryEmail(formData);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: adminEmail.subject,
      html: adminEmail.html
    });

    // Send confirmation email to user
    const userEmail = createConfirmationEmail(formData);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: userEmail.subject,
      html: userEmail.html
    });

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later.'
    });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Narayana Institute Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email functionality ready`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
}); 