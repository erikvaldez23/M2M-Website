import React, { useState, useRef } from "react";
import { Box, Card, CardMedia, Typography, Button, Modal, Grid, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { motion, useInView } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick"; // 🔥 Import Carousel

// Sample Services Data
const servicesData = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    description: "Rehabilitate injuries and improve mobility with our expert care.",
    image: "/M2M-Website/ortho-inj.jpg",
  },
  {
    id: "athletic-recovery",
    title: "ATHLETIC RECOVERY",
    description: "Enhance your performance with our specialized recovery programs.",
    image: "/M2M-Website/post-op.jpg",
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    description: "Stay ahead of injuries with our tailored prevention strategies.",
    image: "/M2M-Website/recovery.jpg",
  },
];

// Styled Components
const ServiceCard = styled(motion(Card))(({ isMobile }) => ({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  height: isMobile ? "450px" : "700px", // 🔥 Reduce height on mobile
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const CardMediaStyled = styled(CardMedia)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const CardOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: "#fff",
  padding: "20px",
});

const CTAButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: 50,
  border: "3px solid #fff",
  marginTop: "10px",
  transition: "background 0.3s ease",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
});

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Modal State
  const [selectedService, setSelectedService] = useState(null);
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // 🔥 Carousel Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.03,
    slidesToScroll: 1,
    arrows: false, // Hide arrows on mobile
  };

  return (
    <Box id="services" ref={ref} sx={{ backgroundColor: "#000", padding: "40px 0", color: "#F7E7CE" }}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <Typography variant={isMobile ? "h3" : "h2"} sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
          SERVICES
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", opacity: 0.8 }}>
          Discover personalized fitness solutions tailored to your needs.
        </Typography>
      </motion.div>

      {/* 🔥 Mobile View Uses Carousel, Desktop Uses Grid */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {servicesData.map((service, index) => (
            <Box key={service.id} sx={{ padding: "0 10px" }}>
              <ServiceCard isMobile={isMobile}>
                <CardMediaStyled component="img" image={service.image} alt={service.title} />
                <CardOverlay>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                  <CTAButton onClick={() => handleServiceClick(service)}>See Details</CTAButton>
                </CardOverlay>
              </ServiceCard>
            </Box>
          ))}
        </Slider>
      ) : (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "50px 10%" }}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id}>
              <CardMediaStyled component="img" image={service.image} alt={service.title} />
              <CardOverlay>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
                <Typography variant="body2">{service.description}</Typography>
                <CTAButton onClick={() => handleServiceClick(service)}>See Details</CTAButton>
              </CardOverlay>
            </ServiceCard>
          ))}
        </Box>
      )}

      {/* 🔥 Service Details Modal */}
      <Modal open={Boolean(selectedService)} onClose={() => setSelectedService(null)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "90%", maxWidth: "700px", bgcolor: "#1a1a1a", borderRadius: "15px", boxShadow: 24, p: 3, color: "#fff" }}>
          <IconButton sx={{ position: "absolute", top: 15, right: 15, color: "#fff" }} onClick={() => setSelectedService(null)}>
            <CloseIcon />
          </IconButton>

          {selectedService && (
            <>
              <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                {selectedService.title}
              </Typography>
              <CardMedia component="img" image={selectedService.image} alt={selectedService.title} sx={{ width: "100%", height: 200, borderRadius: "10px", mb: 3 }} />
              <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
                Price: <span style={{ color: "#FFD700" }}>$ per session</span>
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Services;
