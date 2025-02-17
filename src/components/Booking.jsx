import React from "react";
import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaUser, FaCreditCard } from "react-icons/fa";

import Topbar from "./Topbar";
import Hero from "./Hero";
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
      {/* ✅ Topbar Navigation */}
      <Topbar />

      {/* ✅ Hero Section */}
      <Hero
        title="Book an Appointment"
        subtitle="Simple, fast, and hassle-free. Schedule your session in just three easy steps."
        backgroundImage="/M2M-Website/booking-hero.jpg"
      />

      {/* ✅ Booking Section */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, #f5f5f7, #e5e5ea)",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          {/* ✅ Steps Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.5,
                mb: 3,
                background: "linear-gradient(90deg, #007AFF, #34C759)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              How Booking Works
            </Typography>
          </motion.div>

          {/* ✅ Step Cards */}
          <Grid container spacing={4} justifyContent="center">
            {steps.map((step, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.3)",
                      backdropFilter: "blur(20px)",
                      borderRadius: "20px",
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                      textAlign: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{step.icon}</Box>
                      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        {step.title}
                      </Typography>
                      <Typography sx={{ color: "#6e6e73" }}>{step.description}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* ✅ Booking CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ marginTop: "40px" }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #007AFF, #0A84FF)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                boxShadow: "0 5px 15px rgba(0, 122, 255, 0.4)",
                textTransform: "capitalize",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "linear-gradient(to right, #0056CC, #007AFF)",
                  boxShadow: "0 8px 20px rgba(0, 86, 204, 0.6)",
                },
              }}
            >
              Book an Appointment
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* ✅ CTA Section */}
      <CTA />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Booking;
