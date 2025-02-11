// Vision.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    id: 1,
    title: "Craftsmanship",
    description: "Delivering superior quality with attention to detail and precision.",
    icon: <FaTools size={40} />,  
  },
  {
    id: 2,
    title: "Protection & Privacy",
    description: "Enhancing comfort, style, and security through advanced tinting solutions.",
    icon: <FaShieldAlt size={40} />, 
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    description: "Ensuring every client receives exceptional value and service.",
    icon: <FaCar size={40} />, 
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Providing high-quality services at competitive rates.",
    icon: <FaHandHoldingUsd size={40} />, 
  },
];

const Vision = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #000000, #1c1c1c)",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Our Vision & Mission
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} display="flex">
            <Box
              sx={{
                backgroundColor: "#1c1c1c",
                padding: 4,
                borderRadius: 4,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="h6" sx={{ color: "#bbb", lineHeight: 2 }}>
                To be the premier destination for athletes & active individuals seeking exceptional care, where our passion for healing and love for the human body drives us to exceed expectations & foster a thriving, resilient community of peak performers.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} display="flex">
            <Box
              sx={{
                backgroundColor: "#1c1c1c",
                padding: 4,
                borderRadius: 4,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="h6" sx={{ color: "#bbb", lineHeight: 2.5}}>
                To empower individuals through personalized physical therapy, fostering recovery, enhancing performance, and promoting lifelong wellness with a compassionate, evidence-based approach.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
