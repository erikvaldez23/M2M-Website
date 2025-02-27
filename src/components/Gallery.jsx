import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import Contact from './Contact';
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Import icons for arrows
import CTA from "./cta";

const images = [
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
  "/TintTek-Website/picture.jpeg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Hero Section with Black Background */}
      <Box
        sx={{
          background: "#000", // Black background
          color: "#F7E7CE", // White text
          textAlign: "center",
          py: { xs: 10, md: 14 }, // Adjust spacing for different screen sizes
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                letterSpacing: 1.5,
                mb: 2,
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              OUR GALLERY
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Gallery Content with White Background */}
      <Box
        sx={{
          background: "#F7E7CE", // White background
          color: "#000", // Black text
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flex: "1",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: 2,
              paddingBottom: 10,
            }}
          >
            <Grid container spacing={2}>
              {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Gallery image ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover",
                        borderRadius: "5px",
                        "&:hover": {
                          transform: "scale(1.05)",
                          cursor: "pointer",
                          opacity: 0.4,
                        },
                      }}
                      onClick={() => handleImageClick(index)}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* See More Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 8, // Keep existing margin spacing
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#F7E7CE",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                    border: "5px solid #000",
                    fontSize: "1.1rem",
                    borderRadius: "30px",
                  }}
                  href="https://www.instagram.com/tinttekplus/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SEE MORE PHOTOS ON INSTAGRAM
                </Button>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      <CTA />
      <Contact />

      {/* Image Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <Box sx={{ position: "relative", padding: 0 }}>
          <img
            src={images[currentImageIndex]}
            alt={`Enlarged gallery image`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              margin: 0,
            }}
          />
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ChevronLeft sx={{ color: "white", fontSize: 50 }} />
          </IconButton>
          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ChevronRight sx={{ color: "white", fontSize: 50 }} />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

export default Gallery;
