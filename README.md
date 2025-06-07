# Reminder App

A simple and elegant web application for creating reminders with support for both SMS and email notifications.

## Features

- Create reminders with date and time
- Choose between SMS or email notifications
- Modern, responsive user interface
- MongoDB database integration
- RESTful API endpoints

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Environment Variables**: dotenv

## Prerequisites

Before running this application, make sure you have:

- Node.js installed (v14 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## Running the Application

1. Start the server:
```bash
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## API Endpoints

### Create Reminder
- **URL**: `/api/reminder`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "message": "Your reminder message",
    "method": "sms" or "email"
  }
  ```
- **Success Response**: 
  - Status: 201
  - Content: `{ "status": "success", "data": reminder_object }`

## Project Structure

```
├── server.js         # Main server file
├── index.html        # Frontend UI
├── package.json      # Project dependencies
└── .env             # Environment variables (create this)
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

## Contributing

Feel free to submit issues and enhancement requests!

## Security Notes

- Never commit your `.env` file
- Always validate user input
- Keep your dependencies updated
