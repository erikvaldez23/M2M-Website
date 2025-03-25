import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTA2 from "./cta2";
import Contact from "./Contact";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    image: "/M2M-Website/pt.jpg",
    intro:
      "Evaluation and treatment for orthopedic injuries and post-operative rehabilitation",
    description: [
      "Manual Therapy",
      "Soft Tissue Release",
      "Fascial Mobilization",
      "Active Release Techniques",
      "Joint Mobilization/Manipulations",
      "Therapeutic Exercise",
      "Neuromuscular Re-education",
      "Blood Flow Restriction",
      "Modalities (Dry Needling, Cupping Therapy)",
      "Injury Management/Risk Reduction",
    ],
    outro:
      "An initial evaluation will be performed to address your injury, pain, limitations, and other movement deficits. Based on your goals and sport, an individualized treatment plan will be created for you.",
  },
  {
    id: "athletic-recovery",
    title: "RECOVERY",
    image: "/M2M-Website/recovery.jpg",
    intro:
      "Improve your performance and recover faster between games/practices & events",
    description: [
      "Dry Needling",
      "Cupping Therapy",
      "Graston/IASTM",
      "Mobility Tune-up",
      "Manual Therapy",
      "Electro Therapy",
      "Stretch Therapy",
      "Normatec Compression & other elite Hyperice products",
    ],
    outro: "",
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION & SPORTS PERFORMANCE ASSESSMENT",
    image: "/M2M-Website/injury-prevention.jpg",
    intro:
      "Improve your overall performance in your sport and extend your career longevity by addressing muscular imbalances and movement deficits",
    description: [
      "Movement Analysis",
      "Mobility Screen",
      "Sport Performance Assessment",
      "Running Analysis",
    ],
    outro: "",
  },
];

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ backgroundColor: "#000", py: { xs: 1, md: 6 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Typography
            variant={isMobile ? "h2" : "h1"}
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
            <Box id={service.id} key={service.id}>
              <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
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
                        display: "block",
                        mx: { xs: "auto", md: 0 },
                      }}
                    />
                  </motion.div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                  }}
                >
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

                    {service.intro && (
                      <Typography
                        variant="body1"
                        sx={{ color: "#ccc", mb: 2, fontSize: "1.05rem" }}
                      >
                        {service.intro}
                      </Typography>
                    )}

                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {service.description.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                            fontSize: "1.1rem",
                            marginBottom: "0.5rem",
                            transition: "transform 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "translateX(5px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "none")
                          }
                        >
                          <FaCheckCircle
                            style={{
                              color: "#F94B3D",
                              marginRight: "10px",
                              minWidth: "20px",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {service.outro && (
                      <Typography
                        variant="body1"
                        sx={{ color: "#ccc", mt: 2, fontSize: "1.05rem" }}
                      >
                        {service.outro}
                      </Typography>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant="contained"
                        onClick={handleOpenModal}
                        sx={{
                          mt: 3,
                          backgroundColor: "#F94B3D",
                          color: "#000",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "bold",
                          px: { xs: 2, md: 4 },
                          py: { xs: 1, md: 1.5 },
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          borderRadius: "30px",
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#000",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>

        <Dialog open={openModal} onClose={handleCloseModal} maxWidth="lg" fullWidth>
          <DialogContent sx={{ position: "relative", padding: 0 }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "lightgray" },
              }}
            >
              <FaTimes color="#000" />
            </IconButton>

            <iframe
              src="https://form.jotform.com/242896129509165"
              width="100%"
              height="100%"
              style={{
                border: "none",
                minHeight: "600px",
                height: "calc(100vh - 100px)",
              }}
              title="Appointment Booking"
            ></iframe>
          </DialogContent>
        </Dialog>
      </Box>

      <CTA2 />
      <Contact />
    </>
  );
};

export default ServiceDetails;
