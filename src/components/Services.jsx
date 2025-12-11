import React, { useRef } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample Services Data
const servicesData = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    image: "/physical-therapy/pt3.png",
  },
  {
    id: "athletic-recovery",
    title: "RECOVERY",
    image: "/recovery/recovery-main.JPG",
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    image: "/injury-prevention/ip-main.JPG",
  },
];

const ServiceCard = styled(motion(Card))(({ theme, isMobile }) => ({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  height: "400px", // Default mobile height
  [theme.breakpoints.up("sm")]: { height: "500px" },
  [theme.breakpoints.up("md")]: { height: "600px" },
  transition: "all 0.4s ease",
  ...( !isMobile && { // Only add hover effect if not mobile
    "&:hover": { transform: "scale(1.05)" },
  }),
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
  background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
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
  mt: 1,
  transition: "background 0.3s ease",
  "&:hover": { backgroundColor: "#F94B3D", color: "#fff", border: "3px solid #F94B3D" },
});

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    navigate("/services", { state: { scrollTo: service.id } });
  };

  // Adjust carousel settings for mobile if necessary
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        backgroundColor: "#000",
        pt: { xs: 4, sm: 7 },
        color: "#fff",
      }}
    >
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          SERVICES
        </Typography>
      </motion.div>

      {isMobile ? (
       <Box
       sx={{
         position: "relative",
         overflow: "hidden",
         py: 4,
         "& .slick-dots li button:before": {
           color: "#fff", // Set dots to white
           fontSize: "12px",
         },
       }}
     >
       <Slider {...sliderSettings}>
         {servicesData.map((service) => (
           <Box key={service.id} sx={{ px: 1 }}>
             <ServiceCard isMobile={isMobile}>
               <CardMediaStyled
                 component="img"
                 image={service.image}
                 alt={service.title}
                 loading="lazy"
               />
               <CardOverlay>
                 <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                   {service.title}
                 </Typography>
                 <Typography variant="body2">
                   {service.description}
                 </Typography>
                 <CTAButton onClick={() => handleServiceClick(service)}>
                   See Details
                 </CTAButton>
               </CardOverlay>
             </ServiceCard>
           </Box>
         ))}
       </Slider>
     </Box>
     
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
            px: { xs: 2, sm: 4, md: "10%" },
            py: 4,
          }}
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id}>
              <CardMediaStyled
                component="img"
                image={service.image}
                alt={service.title}
                loading="lazy"
              />
              <CardOverlay>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {service.title}
                </Typography>
                <CTAButton onClick={() => handleServiceClick(service)}>
                  See Details
                </CTAButton>
              </CardOverlay>
            </ServiceCard>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Services;
