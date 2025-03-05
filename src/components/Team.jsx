import React from "react";
import { Box, Grid, Typography, IconButton, Container, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. Natalie Valdez",
    certs: "PT, DPT, SMTC, CSCS, Cert. DN",
    title: "Founder Physical Therapist",
    description:
      "Dr. Natalie Valdez, a Dallas native, earned her Doctorate of Physical Therapy from Texas Women's University - Dallas. As a former athlete herself, she has always had the passion for working with the sports active population. She has experience working with athletes of all levels (professional, collegiate, high school, and youth sports) for return to sport. Natalie also has a background in strenfgth and conditioning and is a Certified and Conditioning Specialist. She has a passion for strength and wellness and is commited to helping individuals achieve their optimal health and performance. When she is not working you can catch her traveling with her husband walking thier dogs on the Katy trail, and doing pilates.",
    image: "/M2M-Website/natalie.jpg",
    modalImage: "/M2M-Website/natalie.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      instagram: "https://instagram.com/dr.alexjohnson",
    },
  },
  {
    name: "Dr. Andrea Sigsbee",
    certs: "PT, DPT, Cert. DN",
    title: "Founder Physical Therapist",
    description:
      "Dr. Andrea Sigsbee, born and raised in Dallas, has a strong passion for combining her love for health and wellness with healing and serving others. She attained her Doctorate of Physical Therapy at Texas Women's University in Dallas and has experience working with professional, high school, and college athletes as well as the activbe population. She also has a love for personal training and nutrition as she has had to use her own personal goals and experiences. When not working, you can catch her lifting weights in the gym, doing pilates, or traveling to a new place on the map.",
    image: "/M2M-Website/drea.jpg",
    modalImage: "/M2M-Website/drea.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/taylor-smith",
      instagram: "https://instagram.com/dr.taylorsmith",
    },
  },
];

const CardContainer = styled(motion.div)({
  maxWidth: "500px",  // Max width instead of fixed width
  width: "100%", // Make it flexible
  aspectRatio: "3 / 4", // Ensures consistent proportions
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",

  // Tablet adjustments
  "@media (max-width: 900px)": {
    maxWidth: "350px", 
    aspectRatio: "4 / 5",
  },

  // Mobile adjustments
  "@media (max-width: 600px)": {
    maxWidth: "100%",
    aspectRatio: "3 / 4", 
  },
});


const CardBackground = styled(Box)({
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  position: "relative",
  padding: "20px",
  transition: "filter 0.5s ease",
  overflow: "hidden",
  "&:hover": {
    filter: "brightness(80%)",
  },
});

// **Main Animation Variants**
const contentVariants = {
  initial: { opacity: 1, y: 0 },
  hover: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeOut" } },
};

const overlayVariants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
  },
};

const MeetTheTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F7E7CE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 6,
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h2"}
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          letterSpacing: "4px",
          textTransform: "uppercase",
          background: "#000",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Meet The Team
      </Typography>

      {/* ✅ Centering the Grid */}
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              display="flex"
              justifyContent="center"
            >
              <CardContainer initial="initial" whileHover="hover">
                <CardBackground
                  sx={{ backgroundImage: `url(${member.image})` }}
                >
                  {/* Default Content (Slight Fade When Hovered) */}
                  <motion.div
                    variants={contentVariants}
                    style={{
                      position: "absolute",
                      width: "100%",
                      bottom: "20px",
                      left: "20px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontStyle: "italic", color: "#fff" }}
                    >
                      {member.certs}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontStyle: "italic", color: "#ccc" }}
                    >
                      {member.title}
                    </Typography>
                  </motion.div>

                  {/* New Content (Appears from Bottom When Hovered) */}
                  <motion.div
                    variants={overlayVariants}
                    style={{
                      position: "absolute",
                      width: "95%",
                      bottom: "10px",
                      left: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                      }}
                    >
                      {member.description}
                    </Typography>

                    {/* Social Media Icons */}
                    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                      {member.socials.linkedin && (
                        <IconButton
                          sx={{
                            backgroundColor: "#fff",
                            p: 1,
                            borderRadius: "50%",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          }}
                          onClick={() =>
                            window.open(member.socials.linkedin, "_blank")
                          }
                        >
                          <FaLinkedin color="#000" size={20} />
                        </IconButton>
                      )}
                      {member.socials.instagram && (
                        <IconButton
                          sx={{
                            backgroundColor: "#fff",
                            p: 1,
                            borderRadius: "50%",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          }}
                          onClick={() =>
                            window.open(member.socials.instagram, "_blank")
                          }
                        >
                          <FaInstagram color="#000" size={20} />
                        </IconButton>
                      )}
                    </Box>
                  </motion.div>
                </CardBackground>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
