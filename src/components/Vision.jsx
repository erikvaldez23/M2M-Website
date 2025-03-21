import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    id: 1,
    title: "Expert Care & Precision",
    description:
      "Providing evidence-based treatments with expert hands-on care to restore movement and function.",
    icon: <FaTools size={50} color="#007AFF" />,
  },
  {
    id: 2,
    title: "Personalized Rehabilitation",
    description:
      "Customizing treatment plans to fit each individual's goals, lifestyle, and recovery needs.",
    icon: <FaShieldAlt size={50} color="#34C759" />,
  },
  {
    id: 3,
    title: "Holistic Healing",
    description:
      "Addressing the body as a whole—mind, muscles, and mobility—to achieve long-term wellness.",
    icon: <FaCar size={50} color="#FF9500" />,
  },
  {
    id: 4,
    title: "Empowering Movement",
    description:
      "Helping patients regain confidence in their movement and prevent future injuries.",
    icon: <FaHandHoldingUsd size={50} color="#FF3B30" />,
  },
];

const Vision = () => {
  return (
    <Box
      sx={{
        py: 5,
        background: "#000",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1.5,
              mb: 3,
              background: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"SF Pro Display", "Inter", sans-serif',
            }}
          >
            MISSION & VISION
          </Typography>
          {/* <Typography variant="h5" sx={{ color: "#000", mb: 5 }}>
            Excellence through innovation, commitment, and personalized care.
          </Typography> */}
        </motion.div>

        {/* Vision & Mission Section */}
        <Grid container spacing={6} justifyContent="center">

        <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  background: "#fff",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                  padding: 4,
                  height: "350px", // ✅ Fixed height for uniformity
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start", // ✅ Keeps text vertically centered
                  color: "#000"
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
                  Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#000", lineHeight: 1.8, textAlign: "center" }}
                >
                  Empowering Athletes and active individuals to achieve optimal
                  health and full recovery through expert, personalized
                  one-on-one physical therapy and care.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  background: "#fff",
                  backdropFilter: "blur(20px)",
                  padding: 4,
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                  height: "350px", // ✅ Fixed height for uniformity
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start", // ✅ Keeps text vertically centered
                }}
              >
                <Typography variant="h4" sx={{ color: "#000", fontWeight: "bold", mb: 2, textAlign: "center" }}>
                  Vision
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#000", lineHeight: 1.8 , textAlign: "center"}}
                >
                  To be the premiere destination for athletes and active
                  individuals seeking exceptional care, where our passion for
                  healing and our love for the human body drives us to exceed
                  expectations and foster a thriving, resilient community of
                  peak performers. performers.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          
        </Grid>

        {/* Icons & Vision Points
        <Grid container spacing={4} justifyContent="center">
          {visionPoints.map((point, index) => (
            <Grid item xs={12} sm={6} md={3} key={point.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    width: "280px",
                    height: "320px", // ✅ Fixed height for consistency
                    background: "rgba(15, 6, 6, 0.3)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{point.icon}</Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                      {point.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6e6e73",
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Vision;
