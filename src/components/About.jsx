import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import aboutImage from "../../public/vertical-both.jpg"; // Replace with your image path
import { motion } from "framer-motion";
import CTA from "./cta"
import Contact from "./Contact"
import Map from "./Map"
import Vision from "./Vision"
import FrameworkCarousel from "./FrameworkCarousel";

const About = () => {
  return (
    <>
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
              variant="h2"
              fontWeight="bold"
              sx={{
                letterSpacing: 1.5,
                mb: 2,
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              ABOUT OUR CLINIC
            </Typography>
          </motion.div>
        </Container>
      </Box>
    <Box
      sx={{ backgroundColor: "#F7E7CE", paddingTop: 5, paddingBottom: 8 }}
      id="about"
    >
      <Container maxWidth="lg">

        {/* Two-Column Layout */}
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Column - Description */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="#000"
              gutterBottom
            >
              Helping You Move Better, Live Better
            </Typography>
            <Typography variant="body1" color="#000">
              At <strong>M2M Physical Therapy</strong>, we believe that movement
              is medicine. Our mission is to help you move better, feel
              stronger, and live without pain. Whether you’re an athlete
              recovering from an injury, a post-surgical patient regaining
              mobility, or someone experiencing chronic pain, our expert
              physical therapists are here to support your journey to recovery.
            </Typography>

            <Typography variant="body1" color="#000" sx={{ mt: 2 }}>
              We take a personalized, hands-on approach to rehabilitation,
              ensuring that every treatment plan is tailored to your unique
              needs. No two patients are the same, which is why we focus on
              developing customized care plans that promote healing, restore
              function, and prevent future injuries. Our team utilizes the
              latest evidence-based technique in manual therapy, strength
              training, and functional movement to help you regain control of
              your body.
            </Typography>

            <Typography variant="body1" color="#000" sx={{ mt: 2 }}>
              Our approach goes beyond just treating symptoms—we focus on
              long-term wellness and injury prevention. We empower our patients
              with the knowledge and tools they need to take charge of their
              health. Whether through guided therapeutic exercises, pain
              management techniques, or lifestyle modifications, we ensure that
              you leave our clinic feeling confident in your ability to stay
              active and pain-free.
            </Typography>

            <Typography variant="body1" color="#000" sx={{ mt: 2 }}>
              At M2M Physical Therapy, we are committed to helping you achieve
              your goals, whether big or small. From returning to daily
              activities pain-free to excelling in your favorite sport, we are
              here to guide you every step of the way. Our compassionate team is
              dedicated to providing exceptional care in a warm, welcoming
              environment, where every patient is treated like family.
            </Typography>

            <Typography variant="body1" color="#000" sx={{ mt: 2 }}>
              Take the first step toward a healthier, stronger you. Schedule an
              appointment today and let us help you move better, feel better,
              and live better.
            </Typography>
          </Grid>

          {/* Right Column - Image */}
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
        </Grid>
      </Container>
    </Box>
    <FrameworkCarousel />
    <Vision />
    <CTA />
    <Contact />
    </>
  );
};

export default About;
