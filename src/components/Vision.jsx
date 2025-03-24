import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  FaTools,
  FaShieldAlt,
  FaCar,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    id: 1,
    title: "Expert Care & Precision",
    description:
      "Providing evidence-based treatments with expert hands-on care to restore movement and function.",
    icon: <FaTools size={40} color="#007AFF" />,
  },
  {
    id: 2,
    title: "Personalized Rehabilitation",
    description:
      "Customizing treatment plans to fit each individual's goals, lifestyle, and recovery needs.",
    icon: <FaShieldAlt size={40} color="#34C759" />,
  },
  {
    id: 3,
    title: "Holistic Healing",
    description:
      "Addressing the body as a whole—mind, muscles, and mobility—to achieve long-term wellness.",
    icon: <FaCar size={40} color="#FF9500" />,
  },
  {
    id: 4,
    title: "Empowering Movement",
    description:
      "Helping patients regain confidence in their movement and prevent future injuries.",
    icon: <FaHandHoldingUsd size={40} color="#FF3B30" />,
  },
];

const Vision = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 10 },
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
              fontSize: { xs: "32px", md: "48px" },
              letterSpacing: 1.5,
              background: "#fff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"SF Pro Display", "Inter", sans-serif',
            }}
          >
            MISSION & VISION
          </Typography>
        </motion.div>

        {/* Mission & Vision Boxes */}
        <Grid
          container
          spacing={4}
          direction={{ xs: "column", md: "row" }}
          alignItems="stretch"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {/* Mission */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  padding: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "24px", md: "32px" },
                  }}
                >
                  Mission
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#000",
                    lineHeight: 1.8,
                  }}
                >
                  Empowering athletes and active individuals to achieve optimal
                  health and full recovery through expert, personalized one-on-one
                  physical therapy and care.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Vision */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  padding: { xs: 3, md: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    fontSize: { xs: "24px", md: "32px" },
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#000",
                    lineHeight: 1.8,
                  }}
                >
                  To be the premiere destination for athletes and active
                  individuals seeking exceptional care, where our passion for
                  healing and our love for the human body drives us to exceed
                  expectations and foster a thriving, resilient community of peak
                  performers.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Icon Cards */}
        {/* <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mt: 6 }}
        >
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
                    width: "100%",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    minHeight: "280px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{point.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
                    >
                      {point.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#d0d0d0",
                        fontSize: "14px",
                        textAlign: "center",
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
