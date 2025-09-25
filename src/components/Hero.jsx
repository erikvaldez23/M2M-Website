import React, { useState } from "react";
import "./Hero.css";
import { Dialog, DialogContent, IconButton, Button } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Subhero from "./Subhero"; // Import Subhero
import video from "../../public/home-video.mov";
import SubIcons from "./SubIcons";
import wordLogo from "../../public/word-logo.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  // Open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="hero">
        {/* Video Background */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <motion.img
            src={wordLogo}
            alt="Elite Care Logo"
            className="word-logo"
            initial={{ opacity: 0, scale: 0.8, y: -50 }} // Initial state: hidden, slightly smaller, moves up
            animate={{ opacity: 1, scale: 1, y: 0 }} // Final state: fully visible, normal size
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2, // Adds a slight delay after page load
            }}
          />

          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "transparent",
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
          </motion.div> */}
        </div>

        {/* Subhero Overlay */}
        {/* <Subhero /> */}
        <SubIcons />

        {/* Quote Form Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative", padding: 0 }}>
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "lightgray" },
              }}
            >
              <FaTimes />
            </IconButton>

            {/* Embedded Quote Form */}
            <iframe
              src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title="Fast Quote"
            ></iframe>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default Hero;
