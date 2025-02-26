import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import aboutImage from "/M2M-Website/both.jpg"; // Replace with your image path
import Vision from "./Vision";
import CTA from "./cta";
import Contact from "./Contact"

const About = () => {
  return (
    <Box sx={{ backgroundColor: "black", py: 12}} id="about">
      <Container maxWidth="lg">
        {/* Header Title */}
        <Typography 
          variant="h2" 
          fontWeight="bold" 
          textAlign="center" 
          gutterBottom 
          color="white"
        >
          ABOUT OUR CLINIC
        </Typography>

        {/* Two-Column Layout */}
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Column - Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={aboutImage}
              alt="Clinic Interior"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* Right Column - Description */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <Typography variant="h5" fontWeight="bold" color="white" gutterBottom>
              Helping You Move Better, Live Better
            </Typography>
            <Typography variant="body1" color="white">
            At <strong>M2M Physical Therapy</strong>, we are committed to helping you move better, feel stronger, and live pain-free.
            Our team of expert physical therapists offers personalized, one-on-one care tailored to your needs.
            </Typography>
            <Typography variant="body1" color="white" sx={{ mt: 2 }}>
            With a focus on evidence-based rehabilitation, we provide a holistic approach to healing,
            ensuring every patient gets the highest level of care. Whether you’re recovering from an injury, surgery, or just looking to **enhance your movement**, we're here to guide you every step of the way.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Vision />
      <CTA />
      <Contact />
    </Box>
    
  );
};

export default About;


