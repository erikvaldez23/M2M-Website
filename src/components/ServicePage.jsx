import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Button, List, ListItem, ListItemText, Paper } from "@mui/material";

const servicesDetails = {
  "physical-therapy": {
    title: "PHYSICAL THERAPY",
    shortDescription: "Rehabilitate injuries and improve mobility with our expert care.",
    fullDescription:
      "Our physical therapy programs are designed to help individuals recover from injuries, surgeries, or chronic conditions. We use evidence-based techniques, personalized treatment plans, and state-of-the-art equipment to enhance recovery and restore function.",
    conditionsTreated: [
      "Post-surgical rehabilitation",
      "Chronic pain management",
      "Sports injuries",
      "Mobility impairments",
      "Neurological disorders (e.g., stroke recovery)"
    ],
    whoCanBenefit: [
      "Athletes recovering from injuries",
      "Elderly individuals with mobility issues",
      "Post-operative patients",
      "People suffering from chronic pain",
      "Individuals with movement impairments"
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
    image: "/M2M-Website/ortho-inj.jpg",
    testimonials: [
      {
        name: "John Doe",
        feedback: "The therapy sessions helped me regain full motion in my knee. Highly recommended!",
      },
      {
        name: "Jane Smith",
        feedback: "Amazing experience! The therapists are very knowledgeable and caring.",
      },
    ],
    faqs: [
      {
        question: "How long does a therapy session last?",
        answer: "Sessions typically last between 30 to 60 minutes, depending on the treatment plan."
      },
      {
        question: "Will insurance cover physical therapy?",
        answer: "Many insurance plans cover physical therapy. Contact your provider for details."
      }
    ],
    cta: "Book a consultation today and start your journey to recovery."
  },
  "athletic-recovery": {
    title: "ATHLETIC RECOVERY",
    shortDescription: "Enhance your performance with our specialized recovery programs.",
    fullDescription:
      "Our athletic recovery program is designed for professional and recreational athletes looking to maximize recovery and reduce the risk of future injuries. We use a combination of soft tissue work, mobility drills, and guided exercises to ensure optimal performance.",
    conditionsTreated: [
      "Muscle soreness and fatigue",
      "Overuse injuries",
      "Tendonitis and inflammation",
      "Delayed Onset Muscle Soreness (DOMS)",
      "Joint stiffness"
    ],
    whoCanBenefit: [
      "Professional and amateur athletes",
      "Weekend warriors",
      "Gym enthusiasts",
      "Marathon runners",
      "Weightlifters"
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
        feedback: "I felt a significant difference in my recovery after just a few sessions.",
      },
      {
        name: "Emma Lee",
        feedback: "The recovery techniques helped me stay at my peak performance for my competitions!"
      }
    ],
    faqs: [
      {
        question: "How often should I do recovery sessions?",
        answer: "It depends on your training intensity. Athletes benefit from at least one session per week."
      },
      {
        question: "Can I still train while undergoing recovery treatments?",
        answer: "Yes! Recovery techniques are designed to support your training and help reduce fatigue."
      }
    ],
    cta: "Take your recovery to the next level. Book a session today!"
  },
  "injury-prevention": {
    title: "INJURY PREVENTION",
    shortDescription: "Stay ahead of injuries with our tailored prevention strategies.",
    fullDescription:
      "Our injury prevention programs focus on assessing movement patterns, strengthening key muscle groups, and educating patients on techniques to reduce injury risk. We tailor our programs to athletes, active individuals, and those at risk of repetitive strain injuries.",
    conditionsTreated: [
      "Repetitive strain injuries",
      "Poor movement patterns",
      "Joint instability",
      "Muscle imbalances",
      "Postural misalignments"
    ],
    whoCanBenefit: [
      "Athletes looking to avoid injuries",
      "People with past injuries seeking prevention",
      "Office workers with poor posture",
      "Runners and cyclists",
      "Anyone engaging in physical activity"
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
        feedback: "Thanks to their injury prevention program, I haven't had any issues with my ankle since starting!",
      },
      {
        name: "Kevin Brooks",
        feedback: "The screening process helped me correct my form and avoid future knee pain!"
      }
    ],
    faqs: [
      {
        question: "How do I know if I need injury prevention training?",
        answer: "If you've had past injuries, experience discomfort during activity, or want to improve movement quality, prevention training can help."
      },
      {
        question: "Can injury prevention help with existing injuries?",
        answer: "While injury prevention focuses on reducing future injuries, it can also support existing injury management when combined with rehabilitation."
      }
    ],
    cta: "Take control of your health and prevent injuries before they happen. Schedule a screening today!"
  }
};




const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesDetails[serviceId];

  if (!service) {
    return <Typography variant="h6" textAlign="center">Service not found</Typography>;
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "30vh",
          backgroundImage: `url(${service.image})`,
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
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay
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

      {/* Content Section */}
      <Container sx={{ mt: 4, pb: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About {service.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {service.fullDescription}
        </Typography>

        {/* Conditions Treated (If Applicable) */}
        {service.conditionsTreated && (
          <>
            <Typography variant="h5" mt={3} mb={1}>
              Conditions Treated
            </Typography>
            <List>
              {service.conditionsTreated.map((condition, index) => (
                <ListItem key={index}>
                  <ListItemText primary={condition} />
                </ListItem>
              ))}
            </List>
          </>
        )}

        {/* Who Can Benefit */}
        <Typography variant="h5" mt={3} mb={1}>
          Who Can Benefit?
        </Typography>
        <List>
          {service.whoCanBenefit.map((group, index) => (
            <ListItem key={index}>
              <ListItemText primary={group} />
            </ListItem>
          ))}
        </List>

        {/* Benefits */}
        <Typography variant="h5" mt={3} mb={1}>
          Benefits
        </Typography>
        <List>
          {service.benefits.map((benefit, index) => (
            <ListItem key={index}>
              <ListItemText primary={benefit} />
            </ListItem>
          ))}
        </List>

        {/* Techniques Used */}
        <Typography variant="h5" mt={3} mb={1}>
          Techniques Used
        </Typography>
        <List>
          {service.techniques.map((technique, index) => (
            <ListItem key={index}>
              <ListItemText primary={technique} />
            </ListItem>
          ))}
        </List>

        {/* Testimonials */}
        <Typography variant="h5" mt={3} mb={1}>
          Testimonials
        </Typography>
        {service.testimonials.map((testimonial, index) => (
          <Paper key={index} sx={{ mt: 2, p: 2, bgcolor: "grey.100", borderRadius: "8px" }}>
            <Typography variant="body1">"{testimonial.feedback}"</Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              — {testimonial.name}
            </Typography>
          </Paper>
        ))}

        {/* FAQs */}
        <Typography variant="h5" mt={3} mb={1}>
          Frequently Asked Questions
        </Typography>
        {service.faqs.map((faq, index) => (
          <Box key={index} sx={{ mt: 2, p: 2, bgcolor: "grey.200", borderRadius: "8px" }}>
            <Typography variant="subtitle1" fontWeight="bold">{faq.question}</Typography>
            <Typography variant="body2">{faq.answer}</Typography>
          </Box>
        ))}

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h5" fontWeight="bold">
            {service.cta}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Book a Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicePage;
