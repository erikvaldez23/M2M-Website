import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import Topbar from "./Topbar";
import Hero from "./Hero";
import CTA from "./cta";
import Footer from "./Footer";


const testimonialsData = [
  {
    name: "Sarah L.",
    review: "M2M Physical Therapy helped me regain my mobility after a knee injury. Their personalized care made all the difference!",
    image: "/M2M-Website/sarah.jpg",
    rating: 5,
    date: "2024-02-10",
  },
  {
    name: "James W.",
    review: "Highly recommend M2M! Their therapists are knowledgeable, friendly, and truly care about your progress.",
    image: "/M2M-Website/james.jpg",
    rating: 5,
    date: "2024-01-20",
  },
  {
    name: "Emily R.",
    review: "The one-on-one attention and custom treatment plan at M2M were game-changers for my recovery.",
    image: "/M2M-Website/emily.jpg",
    rating: 5,
    date: "2023-12-05",
  },
  {
    name: "Michael B.",
    review: "Fantastic experience! My shoulder pain has significantly improved thanks to their hands-on approach.",
    image: "/M2M-Website/michael.jpg",
    rating: 5,
    date: "2024-03-01",
  },
  {
    name: "Olivia T.",
    review: "The therapists at M2M are outstanding! They genuinely care about your recovery and make every session count. Highly recommend!",
    image: "/M2M-Website/olivia.jpg",
    rating: 5,
    date: "2024-02-25",
  },
  {
    name: "Daniel K.",
    review: "After struggling with back pain for years, M2M provided the relief I needed. Their professional and personalized approach made all the difference!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
];



// ✅ Function to format date
const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(dateString));
};

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
      <Box sx={{ background: "#F7E7CE", py: { xs: 8, md: 12 }, textAlign: "center" }}>
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
                background: "#000",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              CUSTOMER TESTIMONIALS
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
            background: "#F7E7CE",
            borderRadius: "30px",
            padding: "20px",
            border: "3px solid #000",
            textAlign: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.05)" },
            height: "350px", // ✅ Fixed height for all cards
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardContent
            sx={{
              overflowY: "auto", // ✅ Enables scroll when text overflows
              maxHeight: "350px", // ✅ Prevents excessive content shifting
              padding: "10px",
            }}
          >
            {/* ✅ Avatar */}
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, margin: "0 auto 10px" }}
            />

            {/* ✅ Name & Date */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
              {testimonial.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#6e6e73", mb: 1 }}>
              {formatDate(testimonial.date)}
            </Typography>

            {/* ✅ Star Ratings */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 1 }}>
              {Array(testimonial.rating).fill().map((_, i) => (
                <FaStar key={i} size={18} color="#FFD700" />
              ))}
            </Box>

            {/* ✅ Review with Scroll */}
            <Typography sx={{ color: "#6e6e73", fontSize: "16px", overflowWrap: "break-word" }}>
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
