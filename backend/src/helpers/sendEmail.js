import sgMail from '@sendgrid/mail';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import handlebars from 'handlebars';

dotenv.config();

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

const sendEmail = async (subject, send_to, send_from, reply_to, template, name, link) => {
  try {
    // Adjusted template path to match your directory structure
    const templatePath = path.resolve(__dirname, '../views', `${template}.handlebars`);
    console.log("Resolved template path:", templatePath); // Log the template path for debugging

    const htmlContent = compileTemplate(templatePath, { subject, name, link });

    const msg = {
      to: send_to,
      from: {
        email: send_from, // Your verified SendGrid email
        name: 'AuthKit', // Change as desired
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
