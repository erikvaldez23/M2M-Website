import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa";
import { motion } from "framer-motion";

const visionPoints = [
  {
    id: 1,
    title: "Craftsmanship",
    description: "Delivering superior quality with attention to detail and precision.",
    icon: <FaTools size={40} />,
  },
  {
    id: 2,
    title: "Protection & Privacy",
    description: "Enhancing comfort, style, and security through advanced tinting solutions.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    description: "Ensuring every client receives exceptional value and service.",
    icon: <FaCar size={40} />,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Providing high-quality services at competitive rates.",
    icon: <FaHandHoldingUsd size={40} />,
  },
];

const Vision = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #000000, #1c1c1c)",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Vision Title */}
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#00bcd4",
          }}
        >
          Our Vision
        </Typography>

        {/* Vision Statement */}
        <Typography
          variant="h6"
          sx={{
            mb: 6,
            fontSize: "1.4rem",
            color: "#bbb",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
            textShadow: "1px 1px 5px rgba(0, 188, 212, 0.3)",
          }}
        >
          To be the premier destination for athletes & active individuals seeking exceptional care, where our passion for healing and love for the human body drives us to exceed expectations & foster a thriving, resilient community of peak performers.
        </Typography>

        {/* Vision Points */}
        <Grid container spacing={4} justifyContent="center">
          {visionPoints.map((point, index) => (
            <Grid item xs={12} sm={6} md={3} key={point.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    py: 4,
                    px: 3,
                    borderRadius: "20px",
                    minHeight: "260px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 12px 30px rgba(0, 188, 212, 0.6)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#00bcd4",
                      }}
                    >
                      {point.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                        mb: 1,
                        letterSpacing: 1,
                      }}
                    >
                      {point.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#bbb",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
