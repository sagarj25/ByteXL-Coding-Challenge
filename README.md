InfoHub – ByteXL Coding Challenge Project

InfoHub is a simple single-page application that brings three useful everyday tools together in one place:

• Weather information
• Currency converter (INR to USD/EUR)
• Motivational quote generator

The goal of this project was to build a lightweight full-stack app demonstrating basic UI development, API integration, and deployment.

Features
Weather Module

• Shows current weather for a given city
• Displays temperature, condition, and details
• Handles invalid city names and API errors

Currency Converter

• Converts INR to USD and EUR
• Live conversion rates fetched through backend API
• Input validation and error handling
• Enlarged input box for better usability

Quote Generator

• Shows a new motivational quote on button click
• Simple and fast response from backend API

Tech Stack
Frontend

• React (Vite)
• Axios for API communication
• Simple responsive UI with basic CSS

Backend

• Node.js + Express
• API routes for weather, currency, and quotes
• Error handling for invalid requests

Folder Structure (Simplified)
infohub/
 ├── client/        (React frontend)
 └── server/        (Node + Express backend)

Setup and Run
Backend
cd server
npm install
npm start

Frontend
cd client
npm install
npm run dev

Deployment

The full-stack app is deployed and accessible online.
The backend and frontend are hosted to run without page reloads, and APIs are connected properly.
