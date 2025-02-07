import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample Services Data
const servicesData = [
  {
    id: "orthopedic-injuries",
    title: "ORTHOPEDIC INJURIES",
    description: "Customized recovery plans for joint and muscle injuries.",
    image: "/M2M-Website/ortho-inj.jpg",
  },
  {
    id: "post-op-rehabilitation",
    title: "POST-OP REHABILITATION",
    description: "Get back on track with specialized post-surgery programs.",
    image: "/M2M-Website/post-op.jpg",
  },
  {
    id: "recovery",
    title: "RECOVERY",
    description: "Accelerate your performance recovery using modern techniques.",
    image: "/M2M-Website/recovery.jpg",
  },
  {
    id: "dry-needling",
    title: "DRY NEEDLING",
    description: "Alleviate muscle pain and improve flexibility.",
    image: "/M2M-Website/needling.jpg",
  },
  {
    id: "cupping-therapy",
    title: "CUPPING THERAPY",
    description: "Boost circulation and relieve muscle tension.",
    image: "/M2M-Website/cupping.jpg",
  },
  {
    id: "soft-tissue-mobilization",
    title: "SOFT TISSUE MOBILIZATION",
    description: "Advanced techniques for muscle recovery and mobility.",
    image: "/M2M-Website/soft-tissue.jpg",
  },
];

// Styled Components for Modern Look
const GradientBackground = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #000428, #004e92)", // Dark Blue Gradient
  color: "#fff",
  padding: theme.spacing(6, 2),
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)", // Glass effect
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
  },
}));

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: "#fff",
  padding: "20px",
});

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00e676", // Vibrant Green
  color: "#000",
  fontWeight: "bold",
  borderRadius: 50,
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#1de9b6",
  },
}));

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true, // Enable infinite scroll
    speed: 700,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <GradientBackground id="services">
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Our Services
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
        Discover personalized fitness solutions tailored to your needs.
      </Typography>

      {/* Mobile View: Carousel */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {servicesData.map((service) => (
            <Box key={service.id} sx={{ px: 2 }}>
              <ServiceCard onClick={() => handleServiceClick(service.id)}>
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                  }}
                />
                <Overlay>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {service.title}
                  </Typography>
                  <CTAButton>See Details</CTAButton>
                </Overlay>
              </ServiceCard>
            </Box>
          ))}
        </Slider>
      ) : (
        // Desktop View: Grid Layout
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {servicesData.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard onClick={() => handleServiceClick(service.id)}>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                    }}
                  />
                  <Overlay>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {service.description}
                    </Typography>
                    <CTAButton>Learn More</CTAButton>
                  </Overlay>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </GradientBackground>
  );
};

export default Services;
