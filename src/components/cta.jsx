import React, { useState } from "react";
import { Box, Typography, Button, Dialog, DialogContent, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"; // Close button icon

const CTA = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box
        sx={{
          py: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 },
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#F7E7CE",
          minHeight: { xs: "60vh", md: "40vh" }, // Responsive height
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
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" }, // More responsive font sizes
            }}
          >
            Elevate Your Recovery, <br /> Maximize Your Performance
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
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive paragraph text
            }}
          >
            Join our community of peak performers and take the first step toward
            a stronger, healthier you. Book your session today!
          </Typography>

          {/* Open Modal Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                backgroundColor: "#000",
                color: "#F7E7CE",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                px: { xs: 2, md: 4 }, // Responsive padding
                py: { xs: 1, md: 1.5 }, // Responsive padding
                border: "3px solid #F7E7CE",
                fontSize: { xs: "0.9rem", md: "1.1rem" }, // Responsive font size
                borderRadius: "30px",
              }}
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </motion.div>
      </Box>

      {/* Modal with iFrame */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg" // Larger modal width
        fullWidth
      >
        <DialogContent sx={{ position: "relative", padding: 0 }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "lightgray" },
            }}
          >
            <FaTimes color="#000" />
          </IconButton>

          {/* Embedded Booking Form */}
          <iframe
            src="https://form.jotform.com/242896129509165?fbclid=PAZXh0bgNhZW0CMTEAAaa3F0MXz517ogsk3gL8Kl5qWpuivE0c8r8xxWRzX4RRaP7LSEAf9eTAiWE_aem_HC4A5TADGf9YLd_oAlmlqg"
            width="100%"
            height="100%"
            style={{
              border: "none",
              minHeight: "600px",
              height: "calc(100vh - 100px)", // Makes modal adaptive
            }}
            title="Appointment Booking"
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CTA;
