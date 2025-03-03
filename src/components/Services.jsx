import React, { useState, useRef } from "react";
import { Box, Card, CardMedia, Typography, Button, Modal, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion, useInView } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

// Sample Services Data
const servicesData = [
  {
    id: "physical-therapy",
    title: "PHYSICAL THERAPY",
    description: "Rehabilitate injuries and improve mobility with our expert care.",
    image: "/M2M-Website/ortho-inj.jpg",
    details: [
      { label: "Duration", value: "45-60 mins per session" },
      { label: "Techniques", value: "Manual Therapy, Strength Training, Electrotherapy" },
      { label: "Benefits", value: "Pain relief, improved mobility, injury recovery" },
      { label: "Best For", value: "Post-surgery rehab, chronic pain, joint mobility" },
    ],
  },
  {
    id: "athletic-recovery",
    title: "ATHLETIC RECOVERY",
    description: "Enhance your performance with our specialized recovery programs.",
    image: "/M2M-Website/post-op.jpg",
    details: [
      { label: "Duration", value: "30-45 mins per session" },
      { label: "Techniques", value: "Deep Tissue Massage, Cryotherapy, Stretching" },
      { label: "Benefits", value: "Faster recovery, reduced soreness, injury prevention" },
      { label: "Best For", value: "Athletes, gym-goers, post-competition recovery" },
    ],
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    description: "Stay ahead of injuries with our tailored prevention strategies.",
    image: "/M2M-Website/recovery.jpg",
    details: [
      { label: "Duration", value: "30-60 mins per session" },
      { label: "Techniques", value: "Biomechanical Analysis, Strengthening Exercises" },
      { label: "Benefits", value: "Avoid injuries, enhance stability, improve movement" },
      { label: "Best For", value: "Runners, gym-goers, people with repetitive strain" },
    ],
  },
];

// Styled Components
const GridContainer = styled(motion.div)({
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
  height: "700px",
  transition: "all 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

// 🔥 Ensure the Image Fills the Entire Card
const CardMediaStyled = styled(CardMedia)({
  width: "100%",
  height: "100%",
  objectFit: "cover", // 🔥 Ensures it takes up the full container
});

// Overlay for the Card
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

// 🔥 Modal Styling to Ensure Full Image Coverage
const ModalContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "700px",
  backgroundColor: "#1a1a1a",
  borderRadius: "15px",
  boxShadow: 24,
  padding: "30px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ModalImageContainer = styled(Box)({
  width: "100%",
  height: "300px", // 🔥 Set a fixed height
  overflow: "hidden",
});

const ModalImage = styled(CardMedia)({
  width: "100%",
  height: "100%",
  objectFit: "cover", // 🔥 Ensures it takes up the full modal container
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 15,
  right: 15,
  color: "#fff",
});

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Modal State
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Box id="services" ref={ref} sx={{ backgroundColor: "#000", padding: "40px 0", color: "#F7E7CE" }}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
          SERVICES
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", opacity: 0.8 }}>
          Discover personalized fitness solutions tailored to your needs.
        </Typography>
      </motion.div>

      {/* Animated Services Cards */}
      <GridContainer>
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {/* 🔥 Updated Image with Full Coverage */}
            <CardMediaStyled component="img" image={service.image} alt={service.title} />
            <CardOverlay>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
              <Typography variant="body2">{service.description}</Typography>
              <CTAButton onClick={() => handleServiceClick(service)}>See Details</CTAButton>
            </CardOverlay>
          </ServiceCard>
        ))}
      </GridContainer>

      {/* Service Details Modal */}
      <Modal open={Boolean(selectedService)} onClose={() => setSelectedService(null)}>
        <ModalContainer>
          <CloseButton onClick={() => setSelectedService(null)}>
            <CloseIcon />
          </CloseButton>
          {selectedService && (
            <>
              <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
                {selectedService.title}
              </Typography>
              {/* 🔥 Ensures Image Takes Full Modal Space */}
              <ModalImageContainer>
                <ModalImage component="img" image={selectedService.image} alt={selectedService.title} />
              </ModalImageContainer>
              <Grid container spacing={2}>
                {selectedService.details.map((detail, index) => (
                  <Grid item xs={6} key={index}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>{detail.label}:</Typography>
                    <Typography variant="body2">{detail.value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </ModalContainer>
      </Modal>
    </Box>
  );
};

export default Services;
