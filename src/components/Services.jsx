import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import { maxWidth, styled } from "@mui/system";
import { motion } from "framer-motion";

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
    description:
      "Stay ahead of injuries with our tailored prevention strategies.",
    image: "/M2M-Website/recovery.jpg",
  },
]


// Styled Components
const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "50px 10%",
  justifyContent: "center",
});

const ServiceCard = styled(motion(Card))({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  height: "700px", // ✅ Fixed height for consistency
  transition: "all 0.4s ease", // ✅ Smooth transition for both effects
  "&:hover": {
    transform: "scale(1.05)", // ✅ Scale up on hover
  },
  "&:hover img": {
    filter: "brightness(1.2)", // ✅ Brighten image on hover
  },
});

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
  transition: "opacity 0.3s ease",
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

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <Box
      id="services"
      sx={{ backgroundColor: "#000", padding: "40px 0", color: "#fff" }}
    >
      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        SERVICES
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", opacity: 0.8}}
      >
        Discover personalized fitness solutions tailored to your needs.
      </Typography>

      <GridContainer>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ delay: index * 0.15 }}
          >
            <CardMediaStyled
              component="img"
              image={service.image}
              alt={service.title}
            />
            <CardOverlay>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
              <CTAButton onClick={() => handleServiceClick(service.id)}>
                See Details
              </CTAButton>
            </CardOverlay>
          </ServiceCard>
        ))}
      </GridContainer>
    </Box>
  );
};

export default Services;
