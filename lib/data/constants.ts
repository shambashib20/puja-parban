import type { BookingFormOptions } from "@/lib/types";

export const bookingFormOptions: BookingFormOptions = {
  pujaTypes: [
    "Griha Pravesh",
    "Durga Puja",
    "Lakshmi Puja",
    "Kali Puja",
    "Namkaran",
    "Annaprashan",
    "Marriage Puja",
    "Satyanarayan Puja",
  ],
  timeSlots: ["06:00 AM", "10:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"],
  locations: [
    "Barasat, WB",
    "Kolkata, West Bengal",
    "Howrah, West Bengal",
    "Durgapur, West Bengal",
    "Asansol, West Bengal",
    "Siliguri, West Bengal",
  ],
};

export const defaultBookingValues = {
  pujaType: "Kali Puja",
  date: "2026-06-06",
  time: "10:00 AM",
  location: "Barasat, WB",
};

export const contact = {
  phone: "+91 7047725722",
  email: "wearepujaparban@gmail.com",
  address: "Kolkata, West Bengal, India",
  socials: {
    facebook: "https://www.facebook.com/pujaparbanstories/",
    instagram: "https://www.instagram.com/puja.parban/?hl=en",
    youtube: "https://www.youtube.com/@pujaparbanstories",
    whatsapp: "https://wa.me/+917047725722",
  },
};
