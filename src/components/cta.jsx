import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
} from "@mui/material";
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
          color: "#fff",
          height: { xs: "40vh", md: "40vh" }, // Responsive height
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <Divider color="#F94B3D" /> */}
          <Typography
            variant="h4"
            sx={{
              paddingTop: 3,
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#fff",
              mb: 3, // Less margin on mobile
              fontSize: { xs: "1.8rem", sm: "2rem", md: "3.5rem", lg: "4rem" },
              textAlign: "center",
            }}
          >
            Recover and Return Stronger
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              mb: 4, // Adjusted for mobile
              color: "fff",
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.6rem", lg: "1.8rem" }, 
              textAlign: "center",
            }}
          >
            Combining the power of movement with elite care to help you reach your peak performance
          </Typography>

          {/* <Typography
            variant="h2"
            sx={{
              color: "#fff",
              paddingTop: 3,
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 2,
              mb: 3, // Less margin on mobile
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // ✅ Smaller for mobile
              textAlign: "center",
            }}
          >
            Want to join our community of <br/> peak performers?
          </Typography> */}

     

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
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                px: { xs: 2, md: 4 }, // Responsive padding
                py: { xs: 1, md: 1.5 }, // Responsive padding
                border: "3px solid #fff",
                fontSize: { xs: "1rem", md: "1.5rem" }, // Responsive font size
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#F94B3D",
                  borderColor: "#F94B3D",
                  color: "#fff",
                },
              }}
            >
              Book Now
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
