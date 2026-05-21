# DocAppoint - Backend

**Backend API** for the Doctor Appointment Manager system.

**Live Backend URL:** [https://docappoint-server-pfb3.onrender.com]

## Features

- RESTful API with Express.js
- MongoDB database with Mongoose
- JWT-based authentication (Register + Login)
- Protected routes for bookings
- CRUD operations for appointments
- Doctor data management

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (password hashing)
- CORS enabled for frontend

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/doctors` → Get all doctors
- `GET /api/doctors/:id` → Get single doctor
- `GET /api/appointments` → Get user's bookings (protected)
- `POST /api/appointments` → Book appointment (protected)
- `PUT /api/appointments/:id` → Update booking (protected)
- `DELETE /api/appointments/:id` → Delete booking (protected)
