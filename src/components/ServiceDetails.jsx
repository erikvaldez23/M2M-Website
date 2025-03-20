import React from "react";
import { Container, Grid, Typography, Box, Divider } from "@mui/material";
import aboutImage from "../../public/both.jpg"; // Replace with your image path
import natalie from "../../public/natalie.jpg";
import drea from "../../public/drea.jpg";
import { motion } from "framer-motion";
import CTA from "./cta";
import Contact from "./Contact";
import Map from "./Map";
import Vision from "./Vision";
import FrameworkCarousel from "./FrameworkCarousel";

const About = () => {
  return (
    <>
      <Box
        sx={{
          background: "#000", // Black background
          color: "#fff", // White text
          textAlign: "center",
          py: { xs: 10, md: 5 }, // Adjust spacing for different screen sizes
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
            {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Divider color="#fff" width="300px" />
            </Box> */}
          </motion.div>
        </Container>
      </Box>
      <Box
        sx={{ backgroundColor: "#000", paddingTop: 5, paddingBottom: 8 }}
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
                variant="h4"
                fontWeight="bold"
                color="#F94B3D"
                gutterBottom
              >
                MEET DR. NAT & DR. DRE
              </Typography>
              <Typography variant="body1" color="#fff">
                PT School big and little turned best friends and now business
                partners. Together, we bring a wealth of knowledge and passion
                for helping you achieve your movement goals and improve your
                overall health. We truly believe movement is the best medicine
                and our elite care will help you reach your peak performance.
              </Typography>
              <Typography variant="body1" color="#fff" sx={{ mt: 2 }}>
                After several years of experience in the sports medicine and
                orthopedic field, we found that clinics sacrificed quality
                patient care for increased income, and we decided we wanted to
                take a different approach. At M2M, we believe in empowering
                athletes and active individuals to achieve optimal health and
                full recovery through expert, personalized one-on-one care.
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

      <Box
        sx={{ backgroundColor: "#000", paddingTop: 10, paddingBottom: 8 }}
        id="about"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            {/* Left Column - Description */}
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#F94B3D"
                gutterBottom
              >
                DR. NATALIE VALDEZ
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#fff"
                gutterBottom
              >
                PT, DPT, SMTC, CSCS, Cert. Dry Needling
              </Typography>

              <Typography variant="body1" color="#fff">
                Dr. Nat, a Dallas native, earned her undergraduate degree in
                Kinesiology from Texas Woman’s University - Denton. She then
                went on to earn her Doctorate of Physical Therapy from Texas
                Woman’s University – Dallas. She is trusted by athletes of all
                levels (Professional, Collegiate, High School, and youth sports)
                to perform at the top of their game. As a Certified Strength &
                Conditioning Specialist, she blends rehab and strength training
                to create sport-specific programs to help athletes reach their
                peak performance and return to sport. She also believes that
                there is an athlete inside everyone and will help you reach your
                full potential.
              </Typography>
            </Grid>

            {/* Right Column - Image */}
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={natalie}
                alt="Clinic Interior"
                sx={{
                  width: "70%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#000", paddingTop: 2, paddingBottom: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={drea}
                alt="Clinic Interior"
                sx={{
                  width: "70%",
                  // marginLeft: "200px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              />
            </Grid>
            {/* Left Column - Description */}
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#F94B3D"
                gutterBottom
              >
                DR. ANDREA SIGSBEE
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="#fff"
                gutterBottom
              >
                PT, DPT, Cert. Dry Needling
              </Typography>
              <Typography variant="body1" color="#fff">
                Dr. Dre, born and raised in Dallas, has a strong passion for
                combining her low for health and wellness with healing and
                serving others. She attained her undergraduate degree in
                Kinesiology from Texas A&M - Commerce. She then attained her
                Doctorate of Physical Therapy at Texas Woman’s University –
                Dallas and has experience working with professional, high
                school, and college athletes as well as the active population.
                She also has a love for personal training and nutrition, as she
                has had to use them a lot for her own personal goals and
                experiences.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>



      <Vision />
      {/* <CTA /> */}
      {/* <Contact /> */}
    </>
  );
};

export default About;
