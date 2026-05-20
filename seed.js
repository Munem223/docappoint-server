const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor');

dotenv.config();

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for seeding');

    // Clear existing doctors (optional - only for development)
    await Doctor.deleteMany();

    const doctors = [
      {
        name: "Dr. Ayesha Rahman",
        specialty: "Cardiologist",
        image: "https://picsum.photos/id/1005/800/600",
        experience: "10 years",
        availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
        description: "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
        hospital: "Labaid Cardiac Hospital",
        location: "Dhanmondi, Dhaka",
        fee: 800,
        rating: 4.9
      },
      {
        name: "Dr. Rakib Hassan",
        specialty: "Neurologist",
        image: "https://picsum.photos/id/1011/800/600",
        experience: "8 years",
        availability: ["10:00 AM - 01:00 PM", "05:00 PM - 08:00 PM"],
        description: "Expert in treating brain and nervous system disorders with modern techniques.",
        hospital: "Square Hospital",
        location: "Panthapath, Dhaka",
        fee: 700,
        rating: 4.7
      },
      {
        name: "Dr. Nusrat Jahan",
        specialty: "Gynecologist",
        image: "https://picsum.photos/id/1009/800/600",
        experience: "12 years",
        availability: ["08:30 AM - 11:30 AM", "03:00 PM - 06:00 PM"],
        description: "Compassionate gynecologist providing comprehensive women's health care.",
        hospital: "Evercare Hospital",
        location: "Bashundhara, Dhaka",
        fee: 600,
        rating: 4.8
      },
      {
        name: "Dr. Fahim Ahmed",
        specialty: "Orthopedic Surgeon",
        image: "https://picsum.photos/id/1015/800/600",
        experience: "15 years",
        availability: ["09:00 AM - 02:00 PM"],
        description: "Specialist in bone, joint, and sports injuries with advanced surgical skills.",
        hospital: "United Hospital",
        location: "Gulshan, Dhaka",
        fee: 1000,
        rating: 4.9
      },
      {
        name: "Dr. Sumaiya Islam",
        specialty: "Pediatrician",
        image: "https://picsum.photos/id/1027/800/600",
        experience: "7 years",
        availability: ["10:00 AM - 01:00 PM", "04:00 PM - 07:00 PM"],
        description: "Dedicated children's doctor with friendly approach and expert care.",
        hospital: "Apollo Hospital",
        location: "Dhaka",
        fee: 500,
        rating: 4.6
      },
      {
        name: "Dr. Imran Khan",
        specialty: "Dermatologist",
        image: "https://picsum.photos/id/201/800/600",
        experience: "9 years",
        availability: ["11:00 AM - 03:00 PM"],
        description: "Skin specialist offering treatment for all types of skin problems.",
        hospital: "Labaid Hospital",
        location: "Mirpur, Dhaka",
        fee: 650,
        rating: 4.5
      }
    ];

    await Doctor.insertMany(doctors);
    console.log('🎉 6 Doctors seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedDoctors();