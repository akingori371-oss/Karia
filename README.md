Karia Medical

A modern and responsive hospital appointment booking and management system built with React. Karia Medical provides patients with a simple way to explore medical services, view available doctors, and book appointments through an easy-to-use web interface.

🌐 Live Demo

Karia Medical: https://karia-lovat.vercel.app/

📌 About the Project

Karia Medical was created to improve the process of connecting patients with healthcare services.

The platform provides a clean and responsive interface where users can:

🏥 Explore medical services
👨‍⚕️ View available doctors
📅 Book medical appointments
🔐 Sign in to the platform
📱 Use the application across different screen sizes
📄 View privacy and terms pages

The project focuses on creating a user-friendly experience while demonstrating modern frontend development techniques with React.

✨ Features
🏠 Home Page

A modern landing page that introduces Karia Medical and highlights the healthcare services available.

👨‍⚕️ Doctor Information

Patients can explore doctors and their available medical services.

📅 Appointment Booking

Users can provide their appointment information and submit a booking request.

🔐 Authentication

A sign-in interface allows users to access the platform through an authentication flow.

📱 Responsive Design

The application is designed to work across:

💻 Desktop
📱 Mobile
📟 Tablet
📄 Legal Pages

Includes:

Privacy Policy
Terms & Conditions
🛠️ Technologies Used
React.js — Frontend framework
JavaScript — Application logic
React Router — Page navigation
Tailwind CSS — Styling and responsive design
Vite — Development and build tool
Firebase — Backend/database integration
Git & GitHub — Version control
Vercel — Deployment
🏗️ Project Structure
Karia-Medical/
│
├── public/
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │   ├── Booking.jsx
│   │   ├── SignIn.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🚀 Getting Started

To run the project locally, follow these steps.

1. Clone the repository
git clone <your-repository-url>
2. Navigate into the project
cd Karia-Medical
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will then be available through the local development URL provided by Vite.

🔥 Firebase Configuration

The project can use Firebase for storing and managing application data.

Create a .env file in the root directory:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

⚠️ Never upload private credentials, service account keys, or sensitive Firebase configuration files to GitHub.

Make sure .env is included in .gitignore:

.env
.env.local
📅 Appointment Booking Flow

The basic appointment flow is:

Patient
   ↓
Visit Karia Medical
   ↓
Explore Doctors / Services
   ↓
Choose Appointment
   ↓
Enter Patient Information
   ↓
Submit Booking
   ↓
Appointment Data
   ↓
Firebase Database

This allows appointment information to be stored so that it can later be accessed by the appropriate hospital management system.