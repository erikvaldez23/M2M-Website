import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTA2 from "./cta2";

// Service Data
const services = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    image: "/M2M-Website/pt.jpg",
    description: [
      "Manual Therapy",
      "Soft Tissue Release",
      "Joint Mobilization",
      "Therapeutic Exercise",
      "Post Surgical Rehab",
    ],
  },
  {
    id: "recovery",
    title: "RECOVERY",
    image: "/M2M-Website/recovery.jpg", 
    description: [
      "Strength & Conditioning",
      "Sport-Specific Training",
      "Personalized Training Programs",
      "Endurance Training",
    ],
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    image: "/M2M-Website/injury-prevention.jpg",
    description: [
      "Movement Assessments",
      "Prehabilitation Exercises",
      "Balance & Stability Training",
      "Core Strength Training",
    ],
  },
];

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{ backgroundColor: "#000", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            py: 6,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Services
        </Typography>

        {services.map((service, index) => (
          <Grid
            container
            spacing={4}
            key={service.id}
            alignItems="center"
            // direction={index % 2 === 0 ? "row" : "row-reverse"} // Alternate layout
            sx={{ mb: 6 }}
          >
            {/* Service Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>

            {/* Service Description */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#F94B3D",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>

                <ul style={{ color: "#fff", fontSize: "1.1rem", paddingLeft: "20px" }}>
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: "#fff",
                    color: "#F94B3D",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#F94B3D",
                      color: "#fff",
                    },
                  }}
                  onClick={() => navigate("/contact")}
                >
                  BOOK NOW
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        ))}
      </Container>    
    </Box>

<CTA2 />
</>
  );
};

export default ServiceDetails;
