import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #f5f5f7, #e5e5ea)", // Soft Apple gradient
        color: "#1d1d1f",
        py: { xs: 8, md: 12 },
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Image with Soft Glassmorphism */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                backdropFilter: "blur(15px)",
                background: "rgba(255, 255, 255, 0.6)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Softer shadow
              }}
            >
              <img
                src="/M2M-Website/both.jpg"
                alt="Our Story"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </motion.div>
          </Grid>

          {/* Right Side - Text with Apple-Inspired Styling */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  mb: 3,
                  background: "linear-gradient(90deg, #007AFF, #34C759)", // Apple-like blue-green gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  fontFamily: '"SF Pro Display", "Inter", sans-serif',
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "#1d1d1f",
                  mb: 3,
                  fontFamily: '"SF Pro Text", "Inter", sans-serif',
                }}
              >
                <strong>
                  PT school big and little turned best friends and now business
                  partners -
                </strong>{" "}
                Together, we bring a wealth of knowledge and passion for helping
                you achieve your movement goals and improve your overall health.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#6e6e73",
                  lineHeight: 1.7,
                  mb: 4,
                  fontSize: "18px",
                  fontFamily: '"SF Pro Text", "Inter", sans-serif',
                }}
              >
                After several years of experience in the sports medicine and
                orthopedic field, we found that clinics sacrificed quality
                patient care for increased income, and decided we wanted to take
                a different approach. At <strong>M2M</strong>, we believe in
                empowering athletes and active individuals to achieve optimal
                health and full recovery through expert, personalized one-on-one
                care.
              </Typography>

              {/* CTA Button - Apple-Like Soft Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(to right, #007AFF, #0A84FF)", // Apple blue gradient
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
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
