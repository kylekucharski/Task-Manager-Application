# Task Manager Application

The Task Manager Application is a full-stack web application designed to simplify and streamline task management. This app allows users to securely create, categorize, prioritize, and track tasks, providing an efficient and user-friendly interface. Developed using the MERN stack, the application highlights best practices in full-stack development, secure authentication, and cloud deployment.

## Features

- **User Authentication**: Secure user registration, login, and session management using JWT and bcrypt.
- **Task Management**: CRUD functionality for tasks, with options for categorization, prioritization, and deadlines.
- **Password Reset and Email Verification**: Integrated SendGrid for automated email notifications with customizable Handlebars templates.
- **Responsive Design**: Designed for smooth, responsive functionality across devices.

## Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Email Service**: SendGrid (for password reset and verification emails)
- **Authentication**: JSON Web Tokens (JWT), bcrypt (for password hashing)
- **Environment Configuration**: dotenv

## Installation

### Prerequisites

- Node.js
- MongoDB (locally or via MongoDB Atlas)
- SendGrid Account for email functionality

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/Task-Manager-Application.git
    cd Task-Manager-Application
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure Environment Variables: Create a `.env` file in the root directory and add the following variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    SENDGRID_API_KEY=your_sendgrid_api_key
    ```

4. Run the server:

    ```bash
    npm run dev
    ```

5. Access the application: The server will start on `http://localhost:3000`.

## Key Functionalities

- **Secure User Authentication**: Uses JSON Web Tokens and bcrypt for secure login and registration.
- **Task CRUD Operations**: Provides endpoints to create, update, delete, and categorize tasks.
- **Email Notifications**: Integrated with SendGrid for password reset and verification, using Handlebars for dynamic templates.
- **Responsive UI**: Built with React and TypeScript to deliver an adaptive, user-friendly interface.

## API Endpoints

- `POST /api/v1/user/register` - Register a new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/tasks` - Fetch all tasks
- `POST /api/v1/tasks` - Create a new task
- `PUT /api/v1/tasks/:id` - Update an existing task
- `DELETE /api/v1/tasks/:id` - Delete a task

## Testing

You can test the API endpoints with Postman or any API client by making requests to `http://localhost:3000/api/v1`.

## Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render
- **CI/CD**: Continuous integration and deployment pipeline set up with GitHub, Vercel, and Render for automated deployment and error monitoring.

