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
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTA2 from "./cta2";
import { FaTimes, FaCheckCircle } from "react-icons/fa"; // ✅ added icon

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
    id: "athletic-recovery",
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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box sx={{ backgroundColor: "#000", py: 6 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
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
            <Box id={service.id} key={service.id}>
              <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                {/* Image */}
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

                {/* Text + Button */}
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

                    {/* ✅ Updated list with custom icons */}
                    <Box sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}>
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

                      {/* Button */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button
                          variant="contained"
                          onClick={handleOpenModal}
                          sx={{
                            mt: 2,
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
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>

        {/* Modal with iFrame */}
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
              src="https://form.jotform.com/242896129509165?fbclid=PAZXh0bgNhZW0CMTEAAaa3F0MXz517ogsk3gL8Kl5qWpuivE0c8r8xxWRzX4RRaP7LSEAf9eTAiWE_aem_HC4A5TADGf9YLd_oAlmlqg"
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
    </>
  );
};

export default ServiceDetails;
