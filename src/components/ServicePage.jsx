import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import CTA from "./cta";

const servicesData = {
  "orthopedic-injuries": {
    title: "Orthopedic Injuries",
    description: "Sports & Performance Rehab for Joint and Muscle Injuries.",
    image: "/M2M-Website/ortho-inj.jpg",
    tagline: "Recover Stronger. Move Better. Prevent Re-Injury.",
    details:
      "Our orthopedic rehabilitation program is designed for athletes and active individuals recovering from fractures, sprains, ligament tears, and overuse injuries. We focus on restoring strength, mobility, and performance through personalized treatment plans.",

    commonInjuries: [
      { name: "ACL / MCL Tears", sports: "Soccer, Basketball, Football" },
      {
        name: "Rotator Cuff Injuries",
        sports: "Baseball, Tennis, Weightlifting",
      },
      { name: "Achilles Tendonitis", sports: "Running, Basketball, Soccer" },
      { name: "Stress Fractures", sports: "Running, Gymnastics" },
      { name: "Muscle Strains", sports: "Sprinting, Weightlifting" },
      { name: "Shin Splints", sports: "Running, Jumping Sports" },
    ],

    recoveryPhases: [
      {
        phase: "Acute Phase (0-2 Weeks)",
        focus: "Reducing swelling, pain, and inflammation.",
      },
      {
        phase: "Rehabilitation Phase (2-8 Weeks)",
        focus: "Restoring range of motion, flexibility, and coordination.",
      },
      {
        phase: "Strength Phase (2-3 Months)",
        focus: "Building muscle endurance and power.",
      },
      {
        phase: "Return to Play (3+ Months)",
        focus: "Sport-specific training and injury prevention.",
      },
    ],

    treatmentOptions: [
      {
        name: "Physical Therapy",
        description:
          "Personalized exercise plans for flexibility, strength, and mobility.",
        image: "/M2M-Website/physical-therapy.jpg",
      },
      {
        name: "Dry Needling",
        description: "Relieves muscle tension and improves flexibility.",
        image: "/M2M-Website/dry-needling.jpg",
      },
      {
        name: "Cupping Therapy",
        description: "Boosts circulation and relieves muscle tightness.",
        image: "/M2M-Website/cupping-therapy.jpg",
      },
      {
        name: "Blood Flow Restriction (BFR)",
        description:
          "Accelerates strength recovery while reducing joint stress.",
        image: "/M2M-Website/bfr-training.jpg",
      },
      {
        name: "Manual Therapy",
        description: "Hands-on techniques for joint mobility and pain relief.",
        image: "/M2M-Website/manual-therapy.jpg",
      },
    ],

    testimonials: [
      {
        name: "Jake Thompson",
        quote:
          "After tearing my ACL, this rehab program got me back on the field in just 7 months!",
        image: "/M2M-Website/athlete1.jpg",
      },
      {
        name: "Sophia Martinez",
        quote:
          "The dry needling therapy helped relieve my muscle tightness faster than I expected.",
        image: "/M2M-Website/athlete2.jpg",
      },
    ],
  },

  "post-op-rehabilitation": {
    title: "Post-Op Rehabilitation",
    description: "Rebuild Strength & Mobility After Surgery.",
    image: "/M2M-Website/post-op.jpg",
    tagline: "Recover with Confidence. Move Without Limits.",
    details:
      "Post-surgical rehabilitation is critical for restoring strength, mobility, and function after orthopedic surgery. Our expert-guided therapy programs help you recover faster and regain full movement safely.",

    commonSurgeries: [
      { name: "Knee Replacement", recoveryTime: "3-6 Months" },
      { name: "Rotator Cuff Repair", recoveryTime: "4-6 Months" },
      { name: "Spinal Fusion", recoveryTime: "6-12 Months" },
      { name: "Hip Replacement", recoveryTime: "4-6 Months" },
    ],

    treatmentOptions: [
      {
        name: "Physical Therapy",
        description: "Restores movement and prevents stiffness.",
        image: "/M2M-Website/physical-therapy.jpg",
      },
      {
        name: "Manual Therapy",
        description: "Hands-on techniques to aid joint recovery.",
        image: "/M2M-Website/manual-therapy.jpg",
      },
      {
        name: "Strength Training",
        description: "Targeted exercises to rebuild muscle.",
        image: "/M2M-Website/strength-training.jpg",
      },
    ],

    testimonials: [
      {
        name: "David Richardson",
        quote:
          "Post-op therapy here was life-changing. I got back to full strength after my knee surgery.",
        image: "/M2M-Website/testimonial1.jpg",
      },
    ],
  },

  recovery: {
    title: "Recovery",
    description: "Maximize Healing & Performance Recovery.",
    image: "/M2M-Website/recovery.jpg",
    tagline: "Train Hard. Recover Smarter.",
    details:
      "Recovery is essential for peak athletic performance. Our recovery programs use cutting-edge techniques to reduce muscle fatigue, prevent injuries, and accelerate healing.",

    recoveryMethods: [
      {
        name: "Cryotherapy",
        description: "Cold therapy for reducing inflammation.",
        image: "/M2M-Website/cryotherapy.jpg",
      },
      {
        name: "Compression Therapy",
        description: "Enhances blood flow and speeds recovery.",
        image: "/M2M-Website/compression.jpg",
      },
      {
        name: "Massage Therapy",
        description: "Deep tissue work for muscle relaxation.",
        image: "/M2M-Website/massage.jpg",
      },
    ],

    testimonials: [
      {
        name: "Emily Carter",
        quote:
          "This recovery program helped me bounce back stronger than ever!",
        image: "/M2M-Website/athlete3.jpg",
      },
    ],
  },

  "dry-needling": {
    title: "Dry Needling",
    description: "Target Muscle Pain with Precision Therapy.",
    image: "/M2M-Website/needling.jpg",
    tagline: "Release Tension. Improve Flexibility. Recover Faster.",
    details:
      "Dry needling is a highly effective treatment for reducing muscle tension, improving mobility, and relieving chronic pain. Our licensed therapists use this technique to accelerate recovery.",

    treatmentFocus: [
      {
        name: "Trigger Point Therapy",
        description: "Targets muscle knots for pain relief.",
      },
      {
        name: "Chronic Pain Management",
        description: "Used for long-term injury recovery.",
      },
      {
        name: "Sports Performance",
        description: "Enhances flexibility and range of motion.",
      },
    ],

    testimonials: [
      {
        name: "Mark Davis",
        quote: "Dry needling made a massive difference in my shoulder pain!",
        image: "/M2M-Website/athlete4.jpg",
      },
    ],
  },

  "cupping-therapy": {
    title: "Cupping Therapy",
    description: "Ancient Healing for Modern Athletes.",
    image: "/M2M-Website/cupping.jpg",
    tagline: "Boost Circulation. Relieve Muscle Tension.",
    details:
      "Cupping therapy improves blood circulation, reduces inflammation, and speeds up muscle recovery. It's widely used by professional athletes for post-workout relief.",

    cuppingMethods: [
      {
        name: "Dynamic Cupping",
        description: "Sliding cups for deeper tissue work.",
      },
      {
        name: "Static Cupping",
        description: "Fixed suction therapy for muscle recovery.",
      },
    ],

    testimonials: [
      {
        name: "Sarah Thompson",
        quote:
          "Cupping therapy helped my muscles recover faster after intense training.",
        image: "/M2M-Website/athlete5.jpg",
      },
    ],
  },

  "soft-tissue-mobilization": {
    title: "Soft Tissue Mobilization",
    description: "Advanced Therapy for Muscle & Joint Mobility.",
    image: "/M2M-Website/soft-tissue.jpg",
    tagline: "Break Up Scar Tissue. Improve Movement.",
    details:
      "Soft tissue mobilization is a specialized technique to reduce muscle tightness, improve flexibility, and break down scar tissue. It's ideal for post-injury recovery and performance enhancement.",

    techniques: [
      {
        name: "Instrument-Assisted Therapy",
        description: "Breaks down scar tissue.",
      },
      {
        name: "Trigger Point Release",
        description: "Reduces chronic muscle tension.",
      },
    ],

    testimonials: [
      {
        name: "James Lee",
        quote:
          "This therapy restored my range of motion after a serious injury.",
        image: "/M2M-Website/athlete6.jpg",
      },
    ],
  },
};

// Styled Components
const HeroSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  if (!service) {
    return <Typography variant="h4">Service Not Found</Typography>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <HeroSection style={{ backgroundImage: `url(${service.image})` }}>
        <Typography
          variant="h3"
          sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}
        >
          {service.title}
        </Typography>
      </HeroSection>

      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {service.tagline}
        </Typography>
        <Typography
          variant="h6"
          sx={{ opacity: 0.8, maxWidth: "800px", mx: "auto", mt: 2 }}
        >
          {service.details}
        </Typography>

        {/* Common Injuries Section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Common Injuries We Treat
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {service.commonInjuries.map((injury, index) => (
              <Grid item key={index}>
                <Typography variant="h6">
                  ✅ {injury.name} <br /> <small>({injury.sports})</small>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recovery Timeline */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Recovery Timeline
          </Typography>
          {service.recoveryPhases.map((phase, index) => (
            <Typography key={index} variant="h6">
              🔹 <strong>{phase.phase}:</strong> {phase.focus}
            </Typography>
          ))}
        </Box>

        {/* Treatment Options */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
          {service.treatmentOptions.map((treatment, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: "15px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={treatment.image}
                  alt={treatment.name}
                />
                <CardContent>
                  <Typography variant="h6">{treatment.name}</Typography>
                  <Typography variant="body2">
                    {treatment.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Athlete Testimonials */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Athlete Success Stories
          </Typography>
          {service.testimonials.map((testimonial, index) => (
            <Typography key={index} variant="h6">
              “{testimonial.quote}” - {testimonial.name}
            </Typography>
          ))}
        </Box>

        {/* Call to Action */}
        <Button
          variant="contained"
          sx={{ mt: 4, px: 4, py: 1.5, borderRadius: "30px" }}
          onClick={() => navigate(-1)}
        >
          Schedule Your Evaluation
        </Button>
      </Container>
      <Box sx={{ width: "100vw" }}>
        <CTA />
      </Box>
    </motion.div>
  );
};

export default ServicePage;
