import React from "react";
import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaUser, FaCreditCard } from "react-icons/fa";

import Hero from "./Hero";
import Contact from "./Contact";
import CTA from "./cta";
import Footer from "./Footer";

// ✅ Booking Steps Data
const steps = [
  {
    icon: <FaUser size={50} color="#007AFF" />,
    title: "1. Choose Your Service",
    description: "Select the service you need from our easy-to-use booking platform.",
  },
  {
    icon: <FaCalendarCheck size={50} color="#34C759" />,
    title: "2. Pick a Date & Time",
    description: "Choose an available slot that works best for your schedule.",
  },
  {
    icon: <FaCreditCard size={50} color="#FF9500" />,
    title: "3. Confirm & Pay",
    description: "Securely complete your booking with flexible payment options.",
  },
];

const Booking = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Hero />

      <Box>
        <Contact />
      </Box>

      {/* ✅ CTA Section */}
      <CTA />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Booking;
