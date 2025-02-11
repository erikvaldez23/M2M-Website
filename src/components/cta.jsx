// cta.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 2,
            mb: 4,
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Elevate Your Recovery, <br/> Maximize Your Performance
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            mb: 5,
            color: "#f0f0f0",
            maxWidth: "900px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Join our community of peak performers and take the first step toward a stronger, healthier you. Book your session today!
        </Typography>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              border: "3px solid #fff",
              fontSize: "1.1rem",
              borderRadius: "30px",
            }}
          >
            Book Your Appointment
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default CTA;
