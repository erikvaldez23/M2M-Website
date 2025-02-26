import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import CTA from "./cta";
import Contact from "./Contact";

const testimonialsData = [
  {
    name: "Coach Tori Tucker",
    review:
      "WE AREN’T US WITHOUT THEM!!! WE LOVE US SOME DR. DRE AND DR. NAT!!!! MY COACHING FRIENDS, PLEASE USE THEM!! YOUR ATHLETES WILL BE UNDER THE BEST CARE IN ALL OF NORTH TEXAS!!!",
    image: "/M2M-Website/sarah.jpg",
    rating: 5,
    date: "2024-02-10",
  },
  {
    name: "Tony Swindle",
    review:
      "No opinions, straight facts - Made 2 Move is second to none in PT. Customer Service is great and their information and techniques are impeccable. The place to go is Made 2 Move.",
    image: "/M2M-Website/james.jpg",
    rating: 5,
    date: "2024-01-20",
  },
  {
    name: "Earl Rooks",
    review:
      "Made 2 Move is the MOVE. Their approach to sports medicine is unparalleled — the knowledge, tools, and energy to serve and assist. I couldn’t think of a better team to partner with for my events, program, and the care of my college/pro athletes.",
    image: "/M2M-Website/emily.jpg",
    rating: 5,
    date: "2023-12-05",
  },
  {
    name: "Dr. Amy Haberman",
    review:
      "I cannot recommend Made 2 Move highly enough! I had seen several doctors and had PT at another facility with no answers and no relief. They were able to properly diagnose my problem and therefore were able to treat me with a combination of physical therapy and dry needling. They truly care for each and every one of their patients. Please go see them. You will not regret it!",
    image: "/M2M-Website/michael.jpg",
    rating: 5,
    date: "2024-03-01",
  },
  {
    name: "Regan Garrett",
    review:
    "They worked on my lower back pain & after 3 sessions with them it’s completely gone! They also make you feel very comfortable with dry needling (as someone who fears needles)",
    image: "/M2M-Website/olivia.jpg",
    rating: 5,
    date: "2024-02-25",
  },
  {
    name: "Windy Hudson",
    review:
      "if you are looking for physical therapists who will actually listen to you and adjust the regimen to make sure that you’re feeling great, Dr. Natalie and Dr. Drea are the one! I have never experienced a therapy where I knew that my therapist was so in tune with what I needed… ￼ until I met Dr. Natalie and Dr. Drea! They were all in and they’ll take the best care of you!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Mike Myers",
    review:
      "Absolutely 💯! They are a multiplier for any coach looking to enhance performance and prevent injuries!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Windy Hudson",
    review:
      "if you are looking for physical therapists who will actually listen to you and adjust the regimen to make sure that you’re feeling great, Dr. Natalie and Dr. Drea are the one! I have never experienced a therapy where I knew that my therapist was so in tune with what I needed… ￼ until I met Dr. Natalie and Dr. Drea! They were all in and they’ll take the best care of you!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Micheal Irvin II",
    review:
      "LOVED working with these 2!! Gr8 WORK!!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Rylan Austin",
    review:
      "Shout out to M2M! Great service guaranteed to give you better flexibility. Go book with them!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Akhil Simpson",
    review:
      "These two have started a business and they must have been listening to God! These two ladies have already made such a huge impact in my life and the people around me and I can’t thank them enough! Not only do I have the pleasure of working with them at tournaments and camps, I also am a client. The care and the love that exudes from them and their work, is nothing short of amazing! I am so honored to call them my trainers and my friends",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "CJ Wottliin",
    review:
      "M2M helped me get back on track after surgery! I’ve never felt more physically confident than I do now all because of them! THANK YOU DR. DRE & DR. NAT",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Cole McKenzie",
    review:
      "Dr. Drea and Dr. Nat are incredibly knowledgeable and proficient in what they do.  I cannot recommend either of them enough, and have referred them to multiple friends and coworkers already!  I went to see them initially for shoulder pain, and the cause was quickly and accurately diagnosed and corrected through the PT plan that they designed.  On top of their expertise, they are both friendly, empathetic people who make it impossible to feel uncomfortable.  I have never felt better, and they can do the same for anyone.  I would urge anyone looking to start physical therapy to go to them over anyone else!",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
  {
    name: "Coach Kortlin White",
    review:
      "I firmly believe that any team seeking to maintain their athletes' peak performance, especially during critical playoff seasons, would greatly benefit from partnering with Made 2 Move. Their expertise and personalized approach make them an invaluable asset to any athletic program.",
    image: "/M2M-Website/daniel.jpg",
    rating: 4,
    date: "2024-01-15",
  },
];

// ✅ Function to format date
const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
};

const Testimonials = () => {
  return (
    <>
      {/* ✅ Hero Section (Black Background with Header) */}
      <Box
        sx={{
          background: "#000",  // Black background
          color: "#F7E7CE",      // White text
          textAlign: "center",
          py: { xs: 10, md: 14 }, // Adjust spacing for different screen sizes
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                letterSpacing: 1.5,
                mb: 2,
                fontFamily: '"SF Pro Display", "Inter", sans-serif',
              }}
            >
              CUSTOMER TESTIMONIALS
            </Typography>
            <Typography
              variant="h6"
              sx={{ maxWidth: "600px", mx: "auto", color: "#b0b0b0" }}
            >
              Real stories from real people. See how M2M Physical Therapy has transformed lives.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ✅ Testimonials Section */}
      <Box
        id="testimonials"
        sx={{
          background: "#F7E7CE",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
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
                      border: "5px solid #000",
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
                        overflowY: "auto",
                        maxHeight: "350px",
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
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", mb: 0.5 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#6e6e73", mb: 1 }}
                      >
                        {formatDate(testimonial.date)}
                      </Typography>

                      {/* ✅ Star Ratings */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 0.5,
                          mb: 1,
                        }}
                      >
                        {Array(testimonial.rating)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} size={18} color="#FFD700" />
                          ))}
                      </Box>

                      {/* ✅ Review with Scroll */}
                      <Typography
                        sx={{
                          color: "#6e6e73",
                          fontSize: "16px",
                          overflowWrap: "break-word",
                        }}
                      >
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

      <CTA />
      <Contact />
    </>
  );
};

export default Testimonials;
