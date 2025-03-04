import React, { useState, useRef } from "react";
import { Box, Card, CardMedia, Typography, Button, Modal, Grid, IconButton, useTheme, useMediaQuery } from "@mui/material";
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
    additionalImages: ["/M2M-Website/pt-session1.jpg", "/M2M-Website/pt-session2.jpg"],
    price: "$75 per session",
    targetAudience: "Athletes, seniors, post-surgery patients",
    details: [
      { label: "Duration", value: "45-60 mins per session" },
      { label: "Techniques", value: "Manual Therapy, Strength Training, Electrotherapy" },
      { label: "Benefits", value: "Pain relief, improved mobility, injury recovery" },
      { label: "Best For", value: "Post-surgery rehab, chronic pain, joint mobility" },
    ],
    testimonials: [
      { name: "Sarah D.", review: "After just three sessions, my knee pain was completely gone! Highly recommend their team." },
      { name: "James P.", review: "The best therapists in town! They really care about their patients." },
    ],
  },
  {
    id: "athletic-recovery",
    title: "ATHLETIC RECOVERY",
    description: "Enhance your performance with our specialized recovery programs.",
    image: "/M2M-Website/post-op.jpg",
    additionalImages: ["/M2M-Website/ath-recovery1.jpg", "/M2M-Website/ath-recovery2.jpg"],
    price: "$60 per session",
    targetAudience: "Athletes, gym-goers, post-competition recovery",
    details: [
      { label: "Duration", value: "30-45 mins per session" },
      { label: "Techniques", value: "Deep Tissue Massage, Cryotherapy, Stretching" },
      { label: "Benefits", value: "Faster recovery, reduced soreness, injury prevention" },
      { label: "Best For", value: "Athletes, gym-goers, post-competition recovery" },
    ],
    testimonials: [
      { name: "Mike R.", review: "I felt rejuvenated after just one session! Perfect for post-game recovery." },
      { name: "Chris W.", review: "This has been a game-changer for my muscle recovery routine!" },
    ],
  },
  {
    id: "injury-prevention",
    title: "INJURY PREVENTION",
    description: "Stay ahead of injuries with our tailored prevention strategies.",
    image: "/M2M-Website/recovery.jpg",
    additionalImages: ["/M2M-Website/injury-prev1.jpg", "/M2M-Website/injury-prev2.jpg"],
    price: "$70 per session",
    targetAudience: "Runners, gym-goers, people with repetitive strain",
    details: [
      { label: "Duration", value: "30-60 mins per session" },
      { label: "Techniques", value: "Biomechanical Analysis, Strengthening Exercises" },
      { label: "Benefits", value: "Avoid injuries, enhance stability, improve movement" },
      { label: "Best For", value: "Athletes, active individuals, injury prevention" },
    ],
    testimonials: [
      { name: "Kelly T.", review: "I learned exercises that have prevented my old knee issues from coming back." },
      { name: "Jordan B.", review: "A must for runners! My stability and endurance have improved drastically." },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  // Modal State
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Box id="services" ref={ref} sx={{ backgroundColor: "#000", padding: "40px 0", color: "#F7E7CE" }}>
      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <Typography variant={isMobile ? "h4" : "h2"} sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
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

        {/* 🔥 Image Gallery: First Main Image + Additional Images */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mb: 3 }}>
          <CardMedia component="img" image={selectedService.image} alt={selectedService.title} sx={{ width: "45%", height: 200, borderRadius: "10px" }} />
          {selectedService.additionalImages?.map((img, index) => (
            <CardMedia key={index} component="img" image={img} alt={`Service ${index}`} sx={{ width: "45%", height: 200, borderRadius: "10px" }} />
          ))}
        </Box>

        {/* 🔥 Pricing & Target Audience */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          Price: <span style={{ color: "#FFD700" }}>{selectedService.price}</span>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
          <strong>Best For:</strong> {selectedService.targetAudience}
        </Typography>

        {/* 🔥 Detailed Information Grid */}
        <Grid container spacing={2}>
          {selectedService.details.map((detail, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>{detail.label}:</Typography>
              <Typography variant="body2">{detail.value}</Typography>
            </Grid>
          ))}
        </Grid>

        {/* 🔥 Testimonials Section */}
        {selectedService.testimonials && selectedService.testimonials.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>Customer Reviews</Typography>
            {selectedService.testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ background: "#222", padding: "15px", borderRadius: "10px", mb: 2 }}>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>"{testimonial.review}"</Typography>
                <Typography variant="body2" sx={{ color: "#FFD700", mt: 1 }}>- {testimonial.name}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </>
    )}
  </ModalContainer>
</Modal>

    </Box>
  );
};

export default Services;
