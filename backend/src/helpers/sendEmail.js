import sgMail from '@sendgrid/mail';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import handlebars from 'handlebars';

// Load environment variables
dotenv.config();

// Set up SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define __dirname for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Compile the Handlebars template
const compileTemplate = (templatePath, context) => {
  const templateSource = fs.readFileSync(templatePath, 'utf8');
  const compiledTemplate = handlebars.compile(templateSource);
  return compiledTemplate(context);
};

// Main sendEmail function
const sendEmail = async (subject, send_to, reply_to, template, name, link) => {
  try {
    // Adjust template path as needed
    const templatePath = path.resolve(__dirname, '../views', `${template}.handlebars`);
    console.log("Resolved template path:", templatePath); // Log the template path for debugging

    const htmlContent = compileTemplate(templatePath, { subject, name, link });

    const msg = {
      to: send_to,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL, // Use the `SENDGRID_FROM_EMAIL` env variable
        name: 'AuthKit', // Display name for the sender
      },
      replyTo: reply_to,
      subject: subject,
      html: htmlContent,
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response[0].statusCode);
    return response;
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
    throw error;
  }
};

export default sendEmail;
