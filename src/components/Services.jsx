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
  IconButton,
  useMediaQuery,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
  {
    id: "vehicle-window-tinting",
    title: "ORTHOPEDIC INJURIES",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/M2M-Website/ortho-inj.jpg",
  },
  {
    id: "tesla-window-tinting",
    title: "POST-OP REHABILITATION",
    description:
      "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/M2M-Website/post-op.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "RECOVERY",
    description:
      "Protect your paint from chips, scratches, and environmental damage.",
      image: "/M2M-Website/recovery.jpg",
  },
  {
    id: "residential-window-tinting",
    title: "DRY NEEDLING",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/M2M-Website/needling.jpg",
  },
  {
    id: "vehicle-paint-correction",
    title: "CUPPING THERAPY",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/M2M-Website/cupping.jpg",
  },
  {
    id: "vehicle-paint-protection",
    title: "SOFT TISSUE MOBILIZATION",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/M2M-Website/soft-tissue.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = {
    dots: false, // Remove bottom dots if needed
    infinite: false,
    speed: 500,
    slidesToShow: 1.2, // Slight overlap effect
    slidesToScroll: 1,
    arrows: false, // 🚨 This removes the right arrow!
    centerMode: true,
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
    <Box
      id="services"
      sx={{
        py: 6,
        textAlign: "center",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        TINTEK+ SERVICES
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
        Premium automotive care to enhance, protect, and maintain your vehicle.
      </Typography>

      {isMobile ? (
        /** 🎠 Mobile Carousel */
        <Box sx={{ position: "relative", px: 2 }}>
          <Slider {...sliderSettings}>
            {servicesData.map((service) => (
              <Box key={service.id} sx={{ px: 2 }}>
                <Card
                  sx={{
                    width: "100%", // Full width inside the slider
                    height: 450, // Fixed height for uniformity
                    maxWidth: 380,
                    margin: "0 auto",
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: "#1C1C1E",
                    "&:hover": {
                      transform: "scale(1.02)",
                      transition: "0.3s ease-in-out",
                    },
                  }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {/* Image Fully Covering the Card */}
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "100%", // Ensure full height of card
                      objectFit: "cover", // Crop image to fit properly
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />

                  {/* Dark Overlay for Readability */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.6)", // Dark overlay (adjust opacity if needed)
                    }}
                  />

                  {/* Text and Button Positioned Above Overlay */}
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "20px",
                      color: "#fff", // Ensure text is readable
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>

                    {/* Transparent See Details Button */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.2)", // Light transparency
                        color: "#fff",
                        width: "90%",
                        borderRadius: 50,
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                      }}
                    >
                      See Details
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        /** 🖥️ MUI Grid Layout for Desktop */
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2} // Controls the gap between cards
            justifyContent="center" // Centers the grid on the page
            alignItems="stretch" // Ensures equal card heights
          >
            {servicesData.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 350,
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: "black", // Ensures no background gaps
                    "&:hover": {
                      transform: "scale(1.05)",
                      outline: "5px solid #007bff", // Change from border to outline
                      backgroundColor: "black", // Prevents visual gaps
                    },
                  }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.5)", // Dark overlay (Always Visible)
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};
export default Services;
