import React from "react";
import { Box, Container, Typography } from "@mui/material";

const MapSection = () => {
  return (
    <Box sx={{ backgroundColor: "black", py:2 }}>
      <Container maxWidth="lg">
        {/* Header Title */}
        <Typography 
          variant="h2" 
          fontWeight="bold" 
          textAlign="center" 
          gutterBottom 
          color="white"
        >
          WHERE WE ARE LOCATED
        </Typography>
      </Container>

      {/* Map Embed Section */}
      <Box
        sx={{
          width: "100%",
          height: "40vh", // Adjust height as needed
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8018044740475!2d-101.87771402430353!3d33.58449487333676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c413f31ec847%3A0x52db374b7b07849!2sTexas%20Tech%20University!5e0!3m2!1sen!2sus!4v1740529843821!5m2!1sen!2sus"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection;
