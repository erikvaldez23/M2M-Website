import { useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CTA from "./cta2";
import Contact from "./Contact";

const faqSections = [
  {
    title: "General Questions",
    id: "general",
    questions: [
      {
        id: "q1",
        question: "Where are you located?",
        answer:
          "M2M is a Sports Medicine and Physical Therapy company that offers services in the Dallas-Fort Worth Metroplex. We offer mobile concierge services, but we also have a location in the Dallas area. For concierge services, we will come to your home or facility. For our Dallas location, we operate out of Park Cities Personal Training (PCPT) in the Knox/Highland Park area.",
      },
      {
        id: "q2",
        question: "Do you take insurance?",
        answer:
          "No, we are an out-of-network direct pay company. A Superbill for insurance reimbursement can be provided to you upon request. We are also FSA/HSA eligible.",
      },
      {
        id: "q3",
        question: "Why should I choose a cash pay company?",
        answer:
          "We prioritize quality patient care and take the control out of the insurance companies' hands. This allows us to treat you one-on-one and prioritize your unique health goals. When you invest in yourself, you gain the freedom to receive the care you deserve without the restrictions of limited visits. Our transparent pricing ensures you know the cost upfront, so there are no surprise bills. In most cases, you'll achieve your goals more quickly, which means fewer visits and a lower overall cost.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqSections.flatMap((section) =>
    section.questions.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://m2mdfw.com/" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://m2mdfw.com/faq" },
  ],
};

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff" }} component="article">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <Box
        component="header"
        sx={{
          backgroundColor: "#000",
          py: { xs: 4, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant={isMobile ? "h3" : "h2"}
          sx={{
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: 1,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#ccc", mt: 1, maxWidth: 600, mx: "auto", px: 2 }}
        >
          Everything you need to know about our physical therapy and sports medicine services in Dallas-Fort Worth.
        </Typography>
      </Box>

      {/* FAQ Content */}
      <Container maxWidth="md" sx={{ py: 6 }} component="section" aria-label="FAQ answers">
        {faqSections.map(({ id, title, questions }) => (
          <Box
            key={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            sx={{ mb: 6 }}
          >
            {questions.map(({ id: questionId, question, answer }) => (
              <Accordion
                key={questionId}
                expanded={expanded === questionId}
                onChange={() =>
                  setExpanded(expanded === questionId ? false : questionId)
                }
                sx={{
                  mb: 2,
                  background: "#000",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#C8102E" }} />}
                  aria-controls={`${questionId}-content`}
                  id={`${questionId}-header`}
                >
                  <Typography
                    component="h2"
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails id={`${questionId}-content`}>
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
