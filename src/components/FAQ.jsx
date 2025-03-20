import { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemButton,
  Paper,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "./Footer";
import CTA from "./cta2";
import Contact from "./Contact";

// Define sections with 5 questions each
const faqSections = [
  {
    questions: [
      {
        id: "q1",
        question: "Where are you located?",
        answer:
          "M2M is a Sports medicine and Physical Therapy company that offers services in the Dallas-Fort Worth metroplex. We offer concierge services, but we also have a location in the Dallas area. For concierge services, we will come to your home or facility. For our Dallas location, we operate out of Park Cities Personal Training (PCPT) in the Knox/Highland Park area.",
      },
      {
        id: "q2",
        question: "Do you take insurance?",
        answer:
          "No, we are an out-of-network direct pay company. A Superbill for insurance reimbursement can be provided to you upon request. We are also FSA/HSA eligible. ",
      },
      {
        id: "q3",
        question: "Why should I choose a Cash pay company? ",
        answer:
          "We prioritize quality patient care and take the control out of the insurance companies’ hands. This allows us to treat you one-on-one and prioritize your unique health goals. When you invest in yourself, you gain the freedom to receive the care you deserve without the restrictions of limited visits. Our transparent pricing ensures you know the cost upfront, so there are no surprise bills. In most cases, you’ll achieve your goals more quickly, which means fewer visits and a lower overall cost.",
      },
      {
        id: "q4",
        question: "Do I need a referral from a physician to be seen? ",
        answer:
          "No, the state of Texas allows individuals direct access to physical therapy. Start your journey with us today! If you have a referral from your physician, we will stay in contact with them so that they are kept up to date with your progress.",
      },
    ],
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef({});

  // Scroll to section
  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="faq" style={{ backgroundColor: "#000" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "35vh", md: "25vh" },
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          {/* <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Find answers to common questions or contact us for support.
          </Typography> */}
        </Container>
      </Box>

      <Container sx={{ maxWidth: "800px" }}>
        {/* Table of Contents */}
        {/* <Paper
          elevation={3}
          sx={{
            padding: 3,
            marginBottom: 4,
            borderRadius: "12px",
            backgroundColor: "#fff", // ✅ Changed to solid white
            backdropFilter: "none", // ✅ Remove glass effect (optional)
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Table of Contents
          </Typography>
          <List>
            {faqSections.map(({ id, title }) => (
              <ListItemButton
                key={id}
                onClick={() => handleScroll(id)}
                sx={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#2794d2",
                    color: "#fff",
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "500" }}>{title}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Paper> */}

        {/* FAQ Sections */}
        {faqSections.map(({ id, title, questions }) => (
          <div key={id} ref={(el) => (sectionRefs.current[id] = el)}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ marginTop: 2, marginBottom: 1 }}
            >
              {title}
            </Typography>
            {questions.map(({ id, question, answer }) => (
              <Accordion
                key={id}
                expanded={expanded === id}
                onChange={() => setExpanded(expanded === id ? false : id)}
                sx={{
                  borderRadius: "8px",
                  color: "#F94B3D",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  marginBottom: "8px",
                  backgroundColor: "#000",
                  border: "1px solid #fff",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#F94B3D" }} />}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "1.2em", color: "#fff" }}>
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ))}
      </Container>

      <CTA />
    </div>
  );
}
