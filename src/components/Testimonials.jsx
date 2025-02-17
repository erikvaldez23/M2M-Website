import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";

import Topbar from "./Topbar";
import Hero from "./Hero";
import CTA from "./cta";
import Footer from "./Footer";

// ✅ Hardcoded Testimonials Data
const testimonialsData = [
  {
    name: "Sarah L.",
    review: "M2M Physical Therapy helped me regain my mobility after a knee injury. Their personalized care made all the difference!",
    image: "/M2M-Website/sarah.jpg",
  },
  {
    name: "James W.",
    review: "Highly recommend M2M! Their therapists are knowledgeable, friendly, and truly care about your progress.",
    image: "/M2M-Website/james.jpg",
  },
  {
    name: "Emily R.",
    review: "The one-on-one attention and custom treatment plan at M2M were game-changers for my recovery.",
    image: "/M2M-Website/emily.jpg",
  },
  {
    name: "Michael B.",
    review: "Fantastic experience! My shoulder pain has significantly improved thanks to their hands-on approach.",
    image: "/M2M-Website/michael.jpg",
  },
];

const Testimonials = () => {
  return (
    <>
      {/* ✅ Navigation Bar */}
      <Topbar />

      {/* ✅ Hero Section */}
      <Hero
        title="What Our Clients Say"
        subtitle="Real stories from real people. See how M2M Physical Therapy has transformed lives."
        backgroundImage="/M2M-Website/testimonials-hero.jpg"
      />

      {/* ✅ Testimonials Section */}
      <Box sx={{ background: "#f8f9fa", py: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Container maxWidth="lg">
          {/* ✅ Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1.5,
                mb: 3,
                background: "linear-gradient(90deg, #007AFF, #34C759)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              Our Clients Love Us
            </Typography>
          </motion.div>

          {/* ✅ Testimonials Grid */}
          <Grid container spacing={4} justifyContent="center">
            {testimonialsData.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "20px",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                      padding: "20px",
                      textAlign: "center",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <CardContent>
                      {/* ✅ Avatar */}
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 80, height: 80, margin: "0 auto 15px" }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography sx={{ color: "#6e6e73", fontSize: "16px" }}>
                        "{testimonial.review}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ✅ CTA Section */}
      <CTA />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Testimonials;
