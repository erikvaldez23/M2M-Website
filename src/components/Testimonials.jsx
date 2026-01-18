import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-marquee-slider";
import { Typography, Box, Container } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const testimonialsData = [
  {
    name: "Coach Tori Tucker",
    role: "Coach",
    review:
      "WE AREN’T US WITHOUT THEM!!! WE LOVE US SOME DR. NAT!!!! MY COACHING FRIENDS, PLEASE USE THEM!! YOUR ATHLETES WILL BE UNDER THE BEST CARE IN ALL OF NORTH TEXAS!!!",
    image: "/M2M-Website/sarah.jpg",
    rating: 5,
    date: "2024-02-10",
  },
  {
    name: "Tony Swindle",
    role: "Swin City",
    review:
      "No opinions, straight facts - Made 2 Move is second to none in PT. Customer Service is great and their information and techniques are impeccable. The place to go is Made 2 Move.",
    image: "/M2M-Website/james.jpg",
    rating: 5,
    date: "2024-01-20",
  },
  {
    name: "Earl Rooks",
    role: "ProSkills",
    review:
      "Made 2 Move is the MOVE. Their approach to sports medicine is unparalleled — the knowledge, tools, and energy to serve and assist. I couldn’t think of a better team to partner with for my events, program, and the care of my college/pro athletes.",
    image: "/M2M-Website/emily.jpg",
    rating: 5,
    date: "2023-12-05",
  },
  {
    name: "Regan Garrett",
    role: "Client",
    review:
      "Dr. Nat worked on my lower back pain & after 3 sessions with her it’s completely gone! She also made me feel very comfortable with dry needling (as someone who fears needles)",
    image: "/M2M-Website/olivia.jpg",
    rating: 5,
    date: "2024-02-25",
  },
  {
    name: "Windy Hudson",
    role: "Client",
    review:
      "If you are looking for a physical therapist who will actually listen to you and adjust the regimen to make sure that you’re feeling great, Dr. Natalie is the one! I have never experienced a therapy where I knew that my therapist was so in tune with what I needed… until I met Dr. Natalie! She is all in and will take the best care of you”",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Mike Myers",
    role: "MBA",
    review:
      "Absolutely 💯! They are a multiplier for any coach looking to enhance performance and prevent injuries!",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Rylan Austin",
    role: "Client",
    review:
      "Shout out to M2M! Great service guaranteed to give you better flexibility. Go book with them!",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Akil Simpson",
    role: "Client",
    review:
      "M2M has already made such a huge impact in my life and the people around me and I can’t thank them enough! Not only do I have the pleasure of working with them at tournaments and camps, I am also a client. The care and the love that exudes from Dr. Nat and her work, is nothing short of  amazing!",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Coach Kortlin White",
    role: "Coach",
    review:
      "I firmly believe that any team seeking to maintain their athletes' peak performance, especially during critical playoff seasons, would greatly benefit from partnering with Made 2 Move. Their expertise and personalized approach make them an invaluable asset to any athletic program.",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Mika Tafua",
    role: "Professional Athlete",
    review:
      "Mahaloz M2M for getting me right",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Tyrese Robinson",
    role: "NFL OL",
    review: "My time with Dr. Nat has been incredible. I have been progressing weekly so that I can get back onto the field without pain or limitations. She is amazing at what she does",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Deshawn Warner",
    role: "SMU DE",
    review: "I have been working with Dr. Nat for about 2-3 months and she is amazing. She is very caring and pays attention to what the root problem is and what is truly causing all these issues with my body. She will fix you for the long run and not just for the right now",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "KB Ingram",
    role: "NCHS RB",
    review: "I love working with Dr. Nat. I have been working for her for about a year now and ever since I have been working with her I have been feeling more flexible and ready to take the field. She is truly one of the best in the world.",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Ketron Jackson",
    role: "NFL WR",
    review: "It is a really great environment with Dr. Nat! She always will give you great work and is the most genuine!",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Brock Lacy",
    role: "NCHS LB",
    review: "Go to Dr. Nat if you want to take your game to the next level! Since I have been going to her, I have felt more explosive and able to take more hits on the field",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Kori Singleton",
    role: "Athlete",
    review: "Dr. Nat is the best physical therapist! She really cares about you and has taken my game to the next level by getting me stronger.",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Harper Gibbs",
    role: "Athlete",
    review: "Absolutely love them!! I have had three ACL tears and have worked with Natalie on two of mine, she is so good that I decided to move with her when she started her own PT business. You get great quality of care and attention to detail once you go to them you will come back better and stronger!",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Kalyn Thomas",
    role: "Client",
    review: "Dr. Natalie is the best! I had a lot of Achilles pain from the college basketball days and she dry needled, scraped, and worked the pain out. Also gave me great exercises to strengthen my calves that I still use to this day. I went from an 8/10 in pain to 0/10 most days. Recommend to anyone with old injuries looking to get back to 100% health.",
    image: "/M2M-Website/daniel.jpg",
    rating: 5,
    date: "2024-01-15",
  },
];

const repeatTestimonials = [...testimonialsData, ...testimonialsData];

const Testimonials = () => {
  const [velocity, setVelocity] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setVelocity(mobile ? 10 : 15);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePause = () => {
    if (isPaused) {
      sliderRef.current?.slickPlay();
    } else {
      sliderRef.current?.slickPause();
    }
    setIsPaused((prev) => !prev);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: (dots) => (
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          bottom: "-60px"
        }}
      >
        {dots}
      </Box>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: 0.5,
          transition: "all 0.3s ease",
        }}
      />
    ),
  };

  return (
    <>
      <Box
        id="reviews"
        sx={{
          backgroundColor: "#1f1f1f",
          color: "#000",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            background: "#1f1f1f",
            color: "#fff",
            textAlign: "center",
            py: { xs: 3, md: 5 },
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant={isMobile ? "h3" : "h2"}
                fontWeight="bold"
                sx={{ letterSpacing: 1.5 }}
              >
                REVIEWS
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Carousel or Marquee */}
        <Box sx={{ px: 2, pt: 2, pb: 4 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              paddingTop: 1,
              paddingBottom: 5,
            }}
          >
            {isMobile ? (
              <Box
                onClick={togglePause}
                sx={{ cursor: "pointer", touchAction: "manipulation" }}
              >
                <Box sx={{ paddingBottom: "30px" }}> {/* ✅ space below cards */}
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {testimonialsData.map((testimonial, index) => (
                      <Box
                        key={`${testimonial.name}-${index}`}
                        sx={{
                          background: "#111",
                          color: "#fff",
                          borderRadius: "20px",
                          textAlign: "center",
                          padding: 3,
                          minHeight: 400,
                          maxWidth: 380,
                          mx: "auto",
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", mt: 2, fontSize: 22 }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "#aaa", fontSize: 14, display: "block", mb: 1 }}
                        >
                          {testimonial.role}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          {Array(testimonial.rating)
                            .fill()
                            .map((_, i) => (
                              <FaStar key={i} size={18} color="#FFD700" />
                            ))}
                        </Box>

                        <Box sx={{ maxHeight: 250, overflowY: "auto", p: 1 }}>
                          <Typography
                            variant="body1"
                            sx={{ fontSize: 17, color: "#fff" }}
                          >
                            "{testimonial.review}"
                          </Typography>
                        </Box>

                        {/* Play/Pause icon */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            position: "absolute",
                            bottom: 12,
                            right: 12,
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            padding: 6,
                            boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {isPaused ? (
                            <PlayArrowIcon fontSize="small" sx={{ color: "#111" }} />
                          ) : (
                            <PauseIcon fontSize="small" sx={{ color: "#111" }} />
                          )}
                        </motion.div>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            ) : (
              <Marquee velocity={isPaused ? 0 : velocity} direction="rtl">
                {repeatTestimonials.map((testimonial, index) => (
                  <Box
                    key={`${testimonial.name}-${index}`}
                    sx={{
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      margin: "0 20px",
                      background: "#111",
                      color: "#fff",
                      borderRadius: "20px",
                      textAlign: "center",
                      minWidth: 380,
                      maxWidth: 420,
                      height: 400,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      "&:hover": {
                        transform: "scale(0.95)",
                      },
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mt: 5, fontSize: 25 }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#aaa", fontSize: 14, display: "block", mb: 1 }}
                    >
                      {testimonial.role}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      {Array(testimonial.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} size={18} color="#FFD700" />
                        ))}
                    </Box>

                    <Box
                      sx={{
                        height: 250,
                        overflowY: "auto",
                        p: 2,
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontSize: 17, color: "#fff" }}
                      >
                        "{testimonial.review}"
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Marquee>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;