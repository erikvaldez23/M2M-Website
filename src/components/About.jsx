import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { minHeight, styled } from "@mui/system";
import { motion } from "framer-motion";

import Topbar from "./Topbar";
import Hero from "./Hero"; // ✅ Import Hero component
import CTA from "./cta"; // ✅ Import CTA component
import Footer from "./Footer"; // ✅ Import Footer component

// ✅ Styled Components for Modern Look
const SectionWrapper = styled(Box)({
  background: "#F7E7CE", // Light background for contrast
  padding: "100px 20px",
});

const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "20px",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
});

const About = () => {
  return (
    <>
      {/* ✅ Navigation Bar */}
      <Topbar />

      {/* ✅ Hero Section with Custom Props */}
      <Hero/>

      {/* ✅ About Section */}
      <SectionWrapper id="about">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* ✅ Left Side - Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <StyledImage src="/M2M-Website/both.jpg" alt="Physical Therapy Clinic" />
              </motion.div>
            </Grid>

            {/* ✅ Right Side - Text Content */}
            <Grid item xs={12} md={6}>
              <ContentWrapper>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "#007bff",
                      textTransform: "uppercase",
                      mb: 3,
                    }}
                  >
                    Who We Are
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#333",
                      fontWeight: 400,
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    At <strong>M2M Physical Therapy</strong>, we are committed to helping you **move better, feel stronger, and live pain-free**.
                    Our team of expert physical therapists offers personalized, **one-on-one care** tailored to your needs.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      lineHeight: 1.7,
                      mb: 4,
                    }}
                  >
                    With a focus on **evidence-based rehabilitation**, we provide a **holistic approach** to healing,
                    ensuring every patient gets the highest level of care. Whether you’re recovering from an injury, surgery, or just looking to **enhance your movement**, we're here to guide you every step of the way.
                  </Typography>
                </motion.div>
              </ContentWrapper>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* ✅ CTA Section */}
      <CTA />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default About;
