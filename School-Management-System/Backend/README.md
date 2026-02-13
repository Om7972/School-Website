# Narayana Institute Backend

This is the backend server for the Narayana Institute website, handling enquiry form submissions and email notifications.

## 🚀 Features

- **Email Notifications**: Sends enquiry details to admin and confirmation emails to users
- **Form Validation**: Validates all required fields before processing
- **Professional Email Templates**: Beautiful HTML email templates with Narayana Institute branding
- **CORS Support**: Configured for frontend integration
- **Error Handling**: Comprehensive error handling and user feedback

## 📧 Email Functionality

### What happens when a user submits an enquiry:

1. **Admin Notification Email**: Sent to the admin with complete enquiry details
2. **User Confirmation Email**: Sent to the user with thank you message and next steps
3. **Form Reset**: Form is automatically reset after successful submission

### Email Templates Include:
- Professional Narayana Institute branding
- Complete enquiry details in organized tables
- Contact information and next steps
- Responsive HTML design

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
cd Backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the Backend directory:

```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@narayanainstitute.com

# Server Configuration
PORT=5000
```

### 3. Gmail App Password Setup

For Gmail, you need to use an App Password:

1. Go to your Google Account settings
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use that password in `EMAIL_PASS`

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📋 API Endpoints

### POST `/api/enquiry`
Handles enquiry form submissions.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "mobile": "+91-9876543210",
  "state": "telangana",
  "city": "hyderabad",
  "school": "narayana-primary",
  "standard": "5"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully! Check your email for confirmation."
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Narayana Institute Backend is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🔧 Configuration Options

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Gmail address for sending emails | Yes |
| `EMAIL_PASS` | Gmail app password | Yes |
| `ADMIN_EMAIL` | Email address to receive admin notifications | No (defaults to EMAIL_USER) |
| `PORT` | Server port | No (defaults to 5000) |

## 📧 Email Templates

### Admin Notification Email
- Professional design with Narayana Institute branding
- Complete enquiry details in organized sections
- Student information, contact details, and location
- Timestamp and submission details

### User Confirmation Email
- Thank you message with personal greeting
- Next steps and what to expect
- Contact information for immediate questions
- Professional branding and styling

## 🚨 Error Handling

The backend includes comprehensive error handling:

- **Validation Errors**: Missing required fields
- **Email Errors**: Network issues, invalid email addresses
- **Server Errors**: Database issues, configuration problems
- **User Feedback**: Clear error messages for users

## 🔒 Security Features

- **Input Validation**: All form fields are validated
- **CORS Configuration**: Proper CORS setup for frontend integration
- **Error Logging**: Detailed error logging for debugging
- **Environment Variables**: Sensitive data stored in environment variables

## 📱 Frontend Integration

The frontend React app is configured to connect to this backend:

- **API URL**: `http://localhost:5000/api/enquiry`
- **CORS**: Configured to allow frontend requests
- **Error Handling**: Proper error handling and user feedback
- **Loading States**: Loading indicators during form submission

## 🎯 Testing

Test the email functionality:

1. Start the backend server
2. Fill out the enquiry form on the frontend
3. Submit the form
4. Check both admin and user email addresses for notifications

## 📞 Support

For any issues or questions:
- Check the console logs for error messages
- Verify email configuration in `.env` file
- Ensure Gmail app password is correctly set up
- Test the health endpoint: `http://localhost:5000/api/health`

## 🔄 Updates

To update dependencies:
```bash
npm update
```

To check for security vulnerabilities:
```bash
npm audit
``` 