import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa";
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
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "stretch" }, // ✅ centers horizontally on mobile
          }}
        >
          {/* Mission */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              maxWidth: { xs: 500, md: "none" }, // ✅ nice width on mobile
              width: "100%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1, display: "flex" }}
            >
              <Box
                sx={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  padding: { xs: 3, md: 4 },
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
                  health and full recovery through expert, personalized
                  one-on-one physical therapy and care.
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* Vision */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              maxWidth: { xs: 500, md: "none" }, // ✅ same behavior as Mission
              width: "100%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ flex: 1, display: "flex" }}
            >
              <Box
                sx={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  padding: { xs: 3, md: 4 },
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
                  expectations and foster a thriving, resilient community of
                  peak performers.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Vision;
