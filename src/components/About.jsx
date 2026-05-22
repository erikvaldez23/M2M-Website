import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImage from "../../public/logo.png";
import natalie from "../../public/natalie.jpg";
import drea from "../../public/drea.jpg";
import Vision from "./Vision";
import CTA2 from "./cta2";
import Contact from "./Contact";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://m2mdfw.com/about#natalie",
  "name": "Dr. Natalie Valdez",
  "givenName": "Natalie",
  "familyName": "Valdez",
  "honorificPrefix": "Dr.",
  "jobTitle": "Physical Therapist & Founder",
  "description": "Dr. Natalie Valdez, PT, DPT, SMTC, CSCS, is a Dallas native and founder of Made 2 Move Sports Medicine & Physical Therapy. Trusted by professional, collegiate, and high school athletes for bridging rehab and peak performance.",
  "image": "https://m2mdfw.com/natalie.jpg",
  "url": "https://m2mdfw.com/about",
  "worksFor": { "@id": "https://m2mdfw.com/#business" },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Texas Woman's University",
      "description": "Undergraduate degree in Kinesiology (Denton campus); Doctorate of Physical Therapy (Dallas campus)"
    }
  ],
  "hasCredential": [
    "Doctor of Physical Therapy (DPT)",
    "Sports Manual Therapy Certified (SMTC)",
    "Certified Strength and Conditioning Specialist (CSCS)",
    "Certified Dry Needling"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/natalie-valdez-pt-dpt-smtc-cscs-cert-dn-a66095231/",
    "https://www.instagram.com/drnat.dpt/"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://m2mdfw.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://m2mdfw.com/about" }
  ]
};

// ✅ Inline reusable profile component
const DoctorProfile = ({
  id,
  name,
  title,
  description,
  image,
  reverse = false,
}) => {
  return (
    <Box
      id={id}
      sx={{ backgroundColor: "#000", paddingTop: 10, paddingBottom: 8 }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            direction={{
              xs: "column",
              md: reverse ? "row-reverse" : "row",
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" }, // ✅ Center image on mobile
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Professional portrait of ${name}`}
                sx={{
                  width: { xs: "80%", md: "70%" },
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography component="h2" variant="h4" fontWeight="bold" color="#C8102E">
                {name}
              </Typography>
              <Typography component="p" variant="h6" fontWeight="bold" color="#fff" mb="6px">
                {title}
              </Typography>
              <Typography variant="body1" color="#fff">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const About = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // true for mobile/tablet

  // ✅ Scroll to anchor if #id is in URL
  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.replace("#", "");
      const element = document.getElementById(anchor);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <Box
        component="header"
        sx={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          py: { xs: 1, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              component="h1"
              variant={isMobile ? "h3" : "h1"}
              fontWeight="bold"
              sx={{
                letterSpacing: 1.5,
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
                marginTop: { xs: "40px", md: "80px" },
              }}
            >
              About Dr. Nat
            </Typography>
          </motion.div>
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

      {/* Intro Section */}
      <Box sx={{ backgroundColor: "#000", paddingTop: 5, paddingBottom: 8 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                fontWeight="bold"
                color="#C8102E"
                gutterBottom
              >
                Why Made 2 Move?
              </Typography>
              <Typography variant="body1" color="#fff">
                I always knew sports physical therapy was where I belonged -
                my athletic background drew me to this field, but the level of
                mental stimulation and problem solving it requires is what truly
                solidified my passion for it. After several years of experience
                in the sports medicine and orthopedic field, I realized that the
                traditional clinic model wasn't built for true healing. Too many
                clinics prioritized patient volume over value, pushing providers
                to sacrifice the quality of care people genuinely deserved. I
                knew I had to create something better - an environment where
                every patient gets intentional, individualized treatment and
                performance-driven results. Made 2 Move was then created in
                September of 2024. My clinical focus is elite athlete care -
                bridging rehab, performance, and return-to-sport at the highest
                level.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically
                height: "100%", // Ensures the container takes up full height
                minHeight: "300px", // Optional: Set a minimum height for the container
              }}
            >
              <Box
                component="img"
                src={aboutImage}
                alt="Photo of Dr. Natalie and Dr. Andrea together"
                sx={{
                  width: { xs: "90%", md: "100%" },
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: 3,
                  pt: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>



      {/* Dr. Andrea Section */}
      {/* <DoctorProfile
        id="andrea"
        name="DR. ANDREA SIGSBEE"
        title="PT, DPT, Cert. Dry Needling"
        image={drea}
        reverse
        description={`Dr. Drea, born and raised in Dallas, has a strong passion for combining her love for health and wellness with healing and serving others. She attained her undergraduate degree in Kinesiology from Texas A&M - Commerce. She then attained her Doctorate of Physical Therapy at Texas Woman’s University – Dallas and has experience working with professional, high school, and college athletes as well as the active population. She also has a love for personal training and nutrition, as she has had to use them a lot for her own personal goals and experiences.`}
      /> */}

      <CTA2 />
      <Vision />
      <Contact />
    </>
  );
};

export default About;
