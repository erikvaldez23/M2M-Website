import React, { useEffect } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "../../public/both.jpg";
import natalie from "../../public/natalie.jpg";
import drea from "../../public/drea.jpg";
import Vision from "./Vision";
import CTA2 from "./cta2";

// ✅ Inline reusable profile component
const DoctorProfile = ({ id, name, title, description, image, reverse = false }) => {
  return (
    <Box id={id} sx={{ backgroundColor: "#000", paddingTop: 10, paddingBottom: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4} alignItems="flex-start" direction={reverse ? "row-reverse" : "row"}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={image}
                alt={`Professional portrait of ${name}`}
                sx={{
                  width: { xs: "100%", md: "70%" },
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                  margin: "0 auto",
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <Typography variant="h4" fontWeight="bold" color="#F94B3D" gutterBottom>
                {name}
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="#fff" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body1" color="#fff">{description}</Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const About = () => {
  const location = useLocation();

  // ✅ Scroll to anchor if #id is in URL
  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.replace("#", "");
      const element = document.getElementById(anchor);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // wait for DOM to finish rendering
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          py: { xs: 10, md: 5 },
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
                marginTop: "80px",
              }}
            >
              ABOUT US
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Intro Section */}
      <Box sx={{ backgroundColor: "#000", paddingTop: 5, paddingBottom: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={aboutImage}
                alt="Photo of Dr. Natalie and Dr. Andrea together"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <Typography variant="h4" fontWeight="bold" color="#F94B3D" gutterBottom>
                MEET DR. NAT & DR. DRE
              </Typography>
              <Typography variant="body1" color="#fff">
                PT School big and little turned best friends and now business partners. Together, we bring a wealth of
                knowledge and passion for helping you achieve your movement goals and improve your overall health. We
                truly believe movement is the best medicine and our elite care will help you reach your peak
                performance.
              </Typography>
              <Typography variant="body1" color="#fff" sx={{ mt: 2 }}>
                After several years of experience in the sports medicine and orthopedic field, we found that clinics
                sacrificed quality patient care for increased income, and we decided we wanted to take a different
                approach. At M2M, we believe in empowering athletes and active individuals to achieve optimal health and
                full recovery through expert, personalized one-on-one care.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Dr. Natalie Section */}
      <DoctorProfile
        id="natalie"
        name="DR. NATALIE VALDEZ"
        title="PT, DPT, SMTC, CSCS, Cert. Dry Needling"
        image={natalie}
        description={`Dr. Nat, a Dallas native, earned her undergraduate degree in Kinesiology from Texas Woman’s University - Denton. She then went on to earn her Doctorate of Physical Therapy from Texas Woman’s University – Dallas. She is trusted by athletes of all levels (Professional, Collegiate, High School, and youth sports) to perform at the top of their game. As a Certified Strength & Conditioning Specialist, she blends rehab and strength training to create sport-specific programs to help athletes reach their peak performance and return to sport. She also believes that there is an athlete inside everyone and will help you reach your full potential.`}
      />

      {/* Dr. Andrea Section */}
      <DoctorProfile
        id="andrea"
        name="DR. ANDREA SIGSBEE"
        title="PT, DPT, Cert. Dry Needling"
        image={drea}
        reverse
        description={`Dr. Dre, born and raised in Dallas, has a strong passion for combining her love for health and wellness with healing and serving others. She attained her undergraduate degree in Kinesiology from Texas A&M - Commerce. She then attained her Doctorate of Physical Therapy at Texas Woman’s University – Dallas and has experience working with professional, high school, and college athletes as well as the active population. She also has a love for personal training and nutrition, as she has had to use them a lot for her own personal goals and experiences.`}
      />

      <CTA2 />
      <Vision />
    </>
  );
};

export default About;
