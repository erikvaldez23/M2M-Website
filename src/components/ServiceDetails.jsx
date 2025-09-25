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
  Slide,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTA2 from "./cta2";
import Contact from "./Contact";
import {
  FaTimes,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Slider from "react-slick";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "-30px",
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#fff",
      borderRadius: "50%",
      p: 1.2,
      "&:hover": {
        backgroundColor: "#F94B3D",
      },
    }}
  >
    <FaChevronLeft />
  </Box>
);

const CustomNextArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "-30px",
      transform: "translateY(-50%)",
      zIndex: 2,
      cursor: "pointer",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#fff",
      borderRadius: "50%",
      p: 1.2,
      "&:hover": {
        backgroundColor: "#F94B3D",
      },
    }}
  >
    <FaChevronRight />
  </Box>
);

const services = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    images: [
      "/physical-therapy/pt6.jpeg",
      "/physical-therapy/pt2.jpeg",
      "/physical-therapy/pt3.jpeg",
      "/physical-therapy/pt4.jpeg",
      "/physical-therapy/pt5.jpeg",
      "/physical-therapy/pt1.jpeg",
      "/physical-therapy/pt7.jpeg",
      "/physical-therapy/pt8.jpeg",
    ],
    intro:
      "Evaluation and treatment for orthopedic injuries and post-operative rehabilitation.",
    description: [
      "Manual Therapy",
      "Soft Tissue Release",
      "Fascial Mobilization",
      "Active Release Techniques",
      "Joint Mobilization/Manipulation",
      "Therapeutic Exercise",
      "Neuromuscular Re-education",
      "Blood Flow Restriction",
      "Modalities (Dry Needling, Cupping Therapy)",
      "Injury Management/Risk Reduction",
    ],
    outro:
      "An initial evaluation will be performed to address your injury, pain, limitations, and other movement deficits. Based on your goals and sport, an individualized treatment plan will be created for you.",
    outro2: "",
  },
  {
    id: "athletic-recovery",
    title: "RECOVERY",
    images: [
      "/recovery/recovery6.jpeg",
      "/recovery/recovery1.jpeg",
      "/recovery/recovery3.jpeg",
      "/recovery/recovery4.jpeg",
      "/recovery/recovery5.jpeg",
      "/recovery/recovery2.jpeg",
    ],
    intro:
      "Improve your performance and recover faster between games/practices & events.",
    description: [
      "Dry Needling",
      "Cupping Therapy",
      "Graston/IASTM",
      "Mobility Tune-up",
      "Manual Therapy",
      "Electro Therapy",
      "Stretch Therapy",
      "Normatec Compression & Hyperice products",
    ],
    outro:
      "Recovery services require an initial evaluation in order for us to individualize the treatment to YOU and allow you to perform at your peak potential.",
    outro2: "Team recovery available upon request.",
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    images: [
      "/injury-prevention/ip4.jpeg",
      "/injury-prevention/ip2.jpeg",
      "/injury-prevention/ip3.jpeg",
      "/injury-prevention/ip1.jpeg",
      "/injury-prevention/ip5.jpeg",
      "/injury-prevention/ip6.jpeg",
    ],
    intro:
      "Improve your overall performance in your sport and extend your career longevity by addressing muscular imbalances and movement deficits.",
    description: [
      "Movement Analysis",
      "Mobility Screen",
      "Sport Performance Assessment",
      "Running Analysis",
    ],
    outro:
      "Injury prevention services require an initial evaluation in order for us to individualize the treatment to YOU and allow you to perform at your peak potential.",
    outro2: "Team injury prevention available upon request.",
  },
];

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <Box
        component="ul"
        sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: 0.5,
          "&.slick-active": {
            backgroundColor: "#F94B3D",
            opacity: 1,
          },
        }}
      />
    ),
  };

  return (
    <>
      <Box
        sx={{
//           background: `    radial-gradient(1200px 800px at 20% 10%, rgba(255, 60, 60, 0.07), transparent 60%),
//     radial-gradient(900px 700px at 85% 35%, rgba(200, 0, 0, 0.08), transparent 65%),
//     radial-gradient(700px 600px at 30% 80%, rgba(255, 120, 120, 0.05), transparent 60%),
//     linear-gradient(180deg, #0b0b0c 0%, #0a0a0b 35%, #111014 100%);
// `,
          background: "#000",
          py: { xs: 1, md: 6 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
          </motion.div>

          {services.map((service, index) => (
            <Paper
              id={service.id}
              key={service.id}
              elevation={6}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: "24px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <Slider {...sliderSettings}>
                        {service.images.map((img, i) => (
                          <Box
                            key={i}
                            component="img"
                            src={img}
                            alt={`${service.title} ${i + 1}`}
                            sx={{
                              width: "100%",
                              height: { xs: "350px", sm: "450px", md: "600px" },
                              objectFit: "cover",
                              borderRadius: "16px",
                              boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                              transition: "transform 0.3s ease-in-out",
                              "&:hover": {
                                transform: "scale(1.03)",
                              },
                            }}
                          />
                        ))}
                      </Slider>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ textAlign: { xs: "center", md: "left" } }}
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
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {service.intro && (
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ccc",
                          fontWeight: 500,
                          fontStyle: "italic",
                          mb: 2,
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {service.intro}
                      </Typography>
                    )}

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        textAlign: "left",
                      }}
                    >
                      {service.description.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#fff",
                            fontSize: "1.1rem",
                            marginBottom: "0.7rem",
                            transition: "transform 0.2s ease-in-out",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform =
                              "translateX(8px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateX(0)")
                          }
                        >
                          <FaCheckCircle
                            style={{
                              color: "#F94B3D",
                              marginRight: "12px",
                              minWidth: "20px",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {service.outro && (
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ccc",
                          mt: 2,
                          fontWeight: 500,
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {service.outro}
                      </Typography>
                    )}

                    {service.outro2 && (
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ccc",
                          mt: 2,
                          fontWeight: 500,
                          fontStyle: "italic",
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                        }}
                      >
                        {service.outro2}
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
                          background: "#F94B3D",
                          color: "#fff",
                          fontWeight: "bold",
                          px: { xs: 3, md: 5 },
                          py: { xs: 1, md: 1.5 },
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                          borderRadius: "30px",
                          boxShadow: "0 4px 15px rgba(249, 75, 61, 0.4)",
                          "&:hover": {
                            background: "#fff",
                            color: "#F94B3D",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Container>

        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="lg"
          fullWidth
          TransitionComponent={Slide}
          TransitionProps={{ direction: "up" }}
        >
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
