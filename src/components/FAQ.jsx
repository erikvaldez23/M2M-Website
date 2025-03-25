import { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CTA from "./cta2";
import Contact from "./Contact"

const faqSections = [
  {
    title: "General Questions",
    id: "general",
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
          "No, we are an out-of-network direct pay company. A Superbill for insurance reimbursement can be provided to you upon request. We are also FSA/HSA eligible.",
      },
      {
        id: "q3",
        question: "Why should I choose a Cash pay company?",
        answer:
          "We prioritize quality patient care and take the control out of the insurance companies’ hands. This allows us to treat you one-on-one and prioritize your unique health goals. When you invest in yourself, you gain the freedom to receive the care you deserve without the restrictions of limited visits.",
      },
      {
        id: "q4",
        question: "Do I need a referral from a physician to be seen?",
        answer:
          "No, the state of Texas allows individuals direct access to physical therapy. If you have a referral, we will stay in contact with your physician.",
      },
    ],
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef({});

  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#000",
          py: { xs: 4, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Box>

      {/* FAQ Content */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {faqSections.map(({ id, title, questions }, sectionIdx) => (
          <Box
            key={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            sx={{ mb: 6 }}
          >
            {/* <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#F94B3D",
                mb: 2,
                textAlign: "center",
              }}
            >
              {title}
            </Typography> */}

            {questions.map(({ id: questionId, question, answer }, idx) => (
              <Accordion
                key={questionId}
                expanded={expanded === questionId}
                onChange={() =>
                  setExpanded(expanded === questionId ? false : questionId)
                }
                sx={{
                  mb: 2,
                  background:
                    expanded === questionId
                      ? "#000"
                      : "#000",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#F94B3D" }} />}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "1.1rem", color: "#ccc" }}>
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Container>

      <CTA />
      <Contact />
    </Box>
  );
}
