import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
import CallToAction from "./cta2";
import Contact from "./Contact";

const PrivacyPolicy = () => {
  const policySections = [
    {
      title: "Online Privacy Policy Agreement",
      content: [
        "At M2M Sports Medicine and Physical Therapy, we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect any information you provide while using our website.",
        [
          "1. What personally identifiable information is collected from you through our website;",
          "2. Why we collect personally identifiable information;",
          "3. How we use the collected information;",
          "4. What choices are available to you regarding the use of your data;",
          "5. The security procedures in place to protect the misuse of your information.",
        ],
      ],
    },
    {
      title: "Information We Collect",
      content: [
        "It is always up to you whether to disclose personally identifiable information to us. However, declining to do so may limit our ability to provide services or respond to inquiries.",
        [
          "1. Name",
          "2. Contact Information (email, and phone number)",
          "3. City or general location",
          "4. Health-related information provided voluntarily",
          "5. Website usage data",
        ]
      ],
    },
    {
      title: "Why We Collect Information",
      content: [
        "We use the information you provide to:",
        [
          "Respond to inquiries and schedule therapy appointments",
          "Provide mobile concierge physical therapy services",
          "Send updates or important service-related messages",
          "Understand and improve our website and patient experience",
        ],
      ],
    },
    {
      title: "Use of Collected Information",
      content: [
        "M2M Sports Medicine and Physical Therapy does not sell, rent or lease any of your personal information to third parties.",
        "We may use your information to provide services, communicate with you, and enhance our operations. We may also contact you for feedback or to inform you of relevant updates to our services.",
      ],
    },
    {
      title: "Disclosure of Information",
      content: [
        "We will not disclose your information unless:",
        [
          "Required by law or in response to legal process",
          "You provide consent",
          "Needed to provide services you've requested",
          "To trusted partners who agree to keep your information confidential",
          "To protect the safety, rights, or property of our clients or the public",
        ]
      ]
    },
    {
      title: "Non-Marketing Purposes",
      content: [
        "We reserve the right to contact you for non-marketing purposes (e.g., appointment confirmations, service updates, or policy changes)."
      ]
    },
    {
      title: "Children Under The Age of 13",
      content: [
        "Our website is not directed to individuals under 13. We do not knowingly collect data from children under 13. If such data is collected inadvertently, we will delete it or obtain verified parental consent."
      ]
    },
    {
      title: "Links to Other Websites",
      content: [
        "Our site may contain links to third-party sites. We are not responsible for their privacy practices. Please review the policies of those websites before sharing personal information."
      ]
    },
    {
      title: "Security",
      content: [
        "We implement industry-standard security to protect your information. This includes encrypted transmissions and secure data storage to prevent unauthorized access."
      ]
    },
    {
      title: "Acceptance of Terms",
      content: [
        "By using our website, you accept the practices described in this Privacy Policy. Continued use of the site after updates constitutes acceptance of those changes."
      ]
    },
    {
      title: "How to Contact Us",
      content: [
        "If you have questions about this policy, contact us at:",
        [
          "Email: info@m2mdfw.com",
        ]
      ]
    }
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "300px",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "#F94B3D", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}
        >
          Privacy Policy
        </Typography>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingY: "40px",
          color: "#fff",
          overflowY: "auto",
        }}
      >
        <Typography variant="subtitle1" sx={{ opacity: 0.7, marginBottom: 2 }}>
          Last Updated: March 28, 2025
        </Typography>
        <Divider sx={{ my: 2, backgroundColor: "white" }} />

        {policySections.map((section, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
              {section.title}
            </Typography>
            {section.content.map((item, pIndex) =>
              Array.isArray(item) ? (
                <Box key={pIndex} component="ul" sx={{ pl: 3, mt: 1 }}>
                  {item.map((listItem, listIndex) => (
                    <Typography
                      key={listIndex}
                      component="li"
                      sx={{ lineHeight: 1.6, opacity: 0.9 }}
                    >
                      {listItem}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography
                  key={pIndex}
                  paragraph
                  sx={{ lineHeight: 1.6, opacity: 0.9 }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        ))}
      </Container>

      <Box sx={{ width: "100%" }}>
        <CallToAction />
      </Box>

      <Contact />
    </Box>
  );
};

export default PrivacyPolicy;