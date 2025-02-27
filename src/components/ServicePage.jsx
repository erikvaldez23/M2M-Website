import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import CTA from "./cta";
import Contact from "./Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesDetails = {
  "physical-therapy": {
    title: "PHYSICAL THERAPY",
    shortDescription:
      "Rehabilitate injuries and improve mobility with our expert care.",
    fullDescription:
      "Our physical therapy programs are designed to help individuals recover from injuries, surgeries, or chronic conditions. We use evidence-based techniques, personalized treatment plans, and state-of-the-art equipment to enhance recovery and restore function.",
    conditionsTreated: [
      "Post-surgical rehabilitation",
      "Chronic pain management",
      "Sports injuries",
      "Mobility impairments",
      "Neurological disorders (e.g., stroke recovery)",
    ],
    conditionsImage: "/M2M-Website/both.jpg",
    whoCanBenefit: [
      "Athletes recovering from injuries",
      "Elderly individuals with mobility issues",
      "Post-operative patients",
      "People suffering from chronic pain",
      "Individuals with movement impairments",
    ],
    benefits: [
      "Improved mobility and flexibility",
      "Pain relief and management",
      "Faster post-surgery recovery",
      "Injury rehabilitation",
    ],
    techniques: [
      "Manual Therapy",
      "Therapeutic Exercises",
      "Electrotherapy",
      "Postural Training",
    ],
    image: "/M2M-Website/both.jpg",
    testimonials: [
      {
        name: "John Doe",
        feedback:
          "The therapy sessions helped me regain full motion in my knee. Highly recommended!",
      },
      {
        name: "Jane Smith",
        feedback:
          "Amazing experience! The therapists are very knowledgeable and caring.",
      },
    ],
    faqs: [
      {
        question: "How long does a therapy session last?",
        answer:
          "Sessions typically last between 30 to 60 minutes, depending on the treatment plan.",
      },
      {
        question: "Will insurance cover physical therapy?",
        answer:
          "Many insurance plans cover physical therapy. Contact your provider for details.",
      },
    ],
    cta: "Book a consultation today and start your journey to recovery.",
  },
  "athletic-recovery": {
    title: "ATHLETIC RECOVERY",
    shortDescription:
      "Enhance your performance with our specialized recovery programs.",
    fullDescription:
      "Our athletic recovery program is designed for professional and recreational athletes looking to maximize recovery and reduce the risk of future injuries. We use a combination of soft tissue work, mobility drills, and guided exercises to ensure optimal performance.",
    conditionsTreated: [
      "Muscle soreness and fatigue",
      "Overuse injuries",
      "Tendonitis and inflammation",
      "Delayed Onset Muscle Soreness (DOMS)",
      "Joint stiffness",
    ],
    conditionsImage: "/M2M-Website/both.png",
    whoCanBenefit: [
      "Professional and amateur athletes",
      "Weekend warriors",
      "Gym enthusiasts",
      "Marathon runners",
      "Weightlifters",
    ],
    benefits: [
      "Faster muscle recovery",
      "Reduced soreness and fatigue",
      "Injury prevention",
      "Performance optimization",
    ],
    techniques: [
      "Deep Tissue Massage",
      "Cryotherapy",
      "Stretching and Mobility Work",
      "Foam Rolling and Myofascial Release",
    ],
    image: "/M2M-Website/post-op.jpg",
    testimonials: [
      {
        name: "Michael Johnson",
        feedback:
          "I felt a significant difference in my recovery after just a few sessions.",
      },
      {
        name: "Emma Lee",
        feedback:
          "The recovery techniques helped me stay at my peak performance for my competitions!",
      },
    ],
    faqs: [
      {
        question: "How often should I do recovery sessions?",
        answer:
          "It depends on your training intensity. Athletes benefit from at least one session per week.",
      },
      {
        question: "Can I still train while undergoing recovery treatments?",
        answer:
          "Yes! Recovery techniques are designed to support your training and help reduce fatigue.",
      },
    ],
    cta: "Take your recovery to the next level. Book a session today!",
  },
  "injury-prevention": {
    title: "INJURY PREVENTION",
    shortDescription:
      "Stay ahead of injuries with our tailored prevention strategies.",
    fullDescription:
      "Our injury prevention programs focus on assessing movement patterns, strengthening key muscle groups, and educating patients on techniques to reduce injury risk. We tailor our programs to athletes, active individuals, and those at risk of repetitive strain injuries.",
    conditionsTreated: [
      "Repetitive strain injuries",
      "Poor movement patterns",
      "Joint instability",
      "Muscle imbalances",
      "Postural misalignments",
    ],
    conditionsImage: "/M2M-Website/conditions-treated.png",
    whoCanBenefit: [
      "Athletes looking to avoid injuries",
      "People with past injuries seeking prevention",
      "Office workers with poor posture",
      "Runners and cyclists",
      "Anyone engaging in physical activity",
    ],
    benefits: [
      "Reduced risk of future injuries",
      "Enhanced stability and balance",
      "Corrective movement patterns",
      "Strength and flexibility improvement",
    ],
    techniques: [
      "Functional Movement Screening",
      "Strength and Stability Exercises",
      "Biomechanical Analysis",
      "Joint Mobilization",
    ],
    image: "/M2M-Website/recovery.jpg",
    testimonials: [
      {
        name: "Sarah Williams",
        feedback:
          "Thanks to their injury prevention program, I haven't had any issues with my ankle since starting!",
      },
      {
        name: "Kevin Brooks",
        feedback:
          "The screening process helped me correct my form and avoid future knee pain!",
      },
    ],
    faqs: [
      {
        question: "How do I know if I need injury prevention training?",
        answer:
          "If you've had past injuries, experience discomfort during activity, or want to improve movement quality, prevention training can help.",
      },
      {
        question: "Can injury prevention help with existing injuries?",
        answer:
          "While injury prevention focuses on reducing future injuries, it can also support existing injury management when combined with rehabilitation.",
      },
    ],
    cta: "Take control of your health and prevent injuries before they happen. Schedule a screening today!",
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesDetails[serviceId];

  if (!service) {
    return (
      <Typography variant="h6" textAlign="center">
        Service not found
      </Typography>
    );
  }

  return (
    <Box backgroundColor="#F7E7CE">
      {/* Hero Section */}
      <Box
        sx={{
          height: "30vh",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)", // Dark overlay
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h3" fontWeight="bold">
            {service.title}
          </Typography>
          <Typography variant="h6">{service.shortDescription}</Typography>
        </Container>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Typography variant="h4" sx={{ color: "#000", fontWeight: "500" }}>
          {service.title} is redefining recovery for athletes by combining
          science-backed rehabilitation techniques with performance optimization
          strategies to help athletes recover faster and perform at their best.
        </Typography>
      </Box>

      <Divider sx={{ width: "50%", mx: "auto", marginBottom: 4, borderColor: "#000", borderBottomWidth: "5px" }} />


      <Container>
        <Typography
          variant="h4"
          sx={{
            color: "#6666FF",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Built for Athletes
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1, mb: 4 }}>
          {service.title} is designed to keep you in the game
        </Typography>

        <Grid container spacing={4}>
          {/* Total Patients Recovered */}
          <Grid item xs={12} md={4}>
            <Box sx={{ borderLeft: "2px solid black", pl: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                1,000+
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Athletes Recovered
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Our specialized therapy programs have helped thousands of
                athletes regain strength, mobility, and confidence after
                injuries.
              </Typography>
              {/* <Box sx={{ mt: 1 }}>🏥 🏃‍♂️ 💪</Box> */}
            </Box>
          </Grid>

          {/* Recovery Programs */}
          <Grid item xs={12} md={4}>
            <Box sx={{ borderLeft: "2px solid black", pl: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                10+
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Specialized Recovery Programs
              </Typography>
              <Typography variant="body2" color="textSecondary">
                From post-injury rehab to peak performance training, we offer
                personalized recovery solutions for all levels of athletes.
              </Typography>
              {/* <Typography variant="body2" fontWeight="bold" color="#6666FF">
                Explore Our Programs →
              </Typography> */}
            </Box>
          </Grid>

          {/* Professional & Elite Athletes Served */}
          <Grid item xs={12} md={4}>
            <Box sx={{ borderLeft: "2px solid black", pl: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                50+
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Pro & Collegiate Athletes Served
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Trusted by elite athletes across various sports, our clinic
                provides cutting-edge treatment and injury prevention
                strategies.
              </Typography>
              {/* <Typography variant="body2" fontWeight="bold" color="#6666FF">
                See Success Stories →
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Content Section */}
      <Container sx={{ mt: 4, pb: 4 }}>
        {/* Staggered Sections */}
        {[
          {
            title: "Conditions Treated",
            content: service.conditionsTreated,
            image: service.conditionsImage,
          },
          { title: "Who Can Benefit?", content: service.whoCanBenefit },
          { title: "Benefits", content: service.benefits },
          { title: "Techniques Used", content: service.techniques },
        ].map((section, index) => (
          <Grid
            container
            spacing={4}
            alignItems="center"
            key={index}
            sx={{ my: 5 }}
          >
            {/* Conditionally Swap Image/Text Position */}
            {index % 2 === 0 ? (
              <>
                {/* Image on Left */}
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={section.image || "/M2M-Website/both.jpg"} // Fallback image
                    alt={section.title}
                    sx={{
                      width: "100%",
                      maxHeight: "400px",
                      borderRadius: "8px",
                      boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                    }}
                  />
                </Grid>
                {/* Text on Right */}
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <List>
                    {section.content.map((item, i) => (
                      <ListItem key={i}>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </>
            ) : (
              <>
                {/* Text on Left */}
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <List>
                    {section.content.map((item, i) => (
                      <ListItem key={i}>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                {/* Image on Right */}
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={section.image || "/M2M-Website/both.jpg"} // Fallback image
                    alt={section.title}
                    sx={{
                      width: "100%",
                      maxHeight: "400px",
                      borderRadius: "8px",
                      boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
                    }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        ))}

        {/* FAQs - Accordion */}
        <Typography variant="h5" mt={3} mb={1}>
          Frequently Asked Questions
        </Typography>
        {service.faqs.map((faq, index) => (
          <Accordion key={index} sx={{ my: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <CTA />
      <Contact />
    </Box>
  );
};

export default ServicePage;
