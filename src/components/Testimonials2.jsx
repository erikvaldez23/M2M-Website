import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Button,
  Container,
  Grid,
  Fade,
  useTheme,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

// Apple-inspired dark theme
const appleTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007AFF',
    },
    background: {
      default: '#000000',
      paper: 'rgba(28, 28, 30, 0.8)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h4: {
      fontWeight: 300,
      letterSpacing: '-0.02em',
      fontSize: '2.5rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(28, 28, 30, 0.9)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 500,
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(28, 28, 30, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(28, 28, 30, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
          '&:disabled': {
            opacity: 0.3,
          },
        },
      },
    },
  },
});

const TestimonialsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const theme = useTheme();
  
  const testimonials = [
  {
    id: 1,
    name: "Coach Tori Tucker",
    initial: "C",
    rating: 5,
    text: `WE AREN’T US WITHOUT THEM!!! WE LOVE US SOME DR. DRE AND DR. NAT!!!! MY COACHING FRIENDS, PLEASE USE THEM!! YOUR ATHLETES WILL BE UNDER THE BEST CARE IN ALL OF NORTH TEXAS!!!`,
    color: "#5856D6"
  },
  {
    id: 2,
    name: "Tony Swindle",
    initial: "T",
    rating: 5,
    text: `No opinions, straight facts - Made 2 Move is second to none in PT. Customer Service is great and their information and techniques are impeccable. The place to go is Made 2 Move.`,
    color: "#5856D6"
  },
  {
    id: 3,
    name: "Earl Rooks",
    initial: "E",
    rating: 5,
    text: `Made 2 Move is the MOVE. Their approach to sports medicine is unparalleled — the knowledge, tools, and energy to serve and assist. I couldn’t think of a better team to partner with for my events, program, and the care of my college/pro athletes.`,
    color: "#34C759"
  },
  {
    id: 4,
    name: "Dr. Amy Haberman",
    initial: "D",
    rating: 5,
    text: `I cannot recommend Made 2 Move highly enough! I had seen several doctors and had PT at another facility with no answers and no relief. They were able to properly diagnose my problem and therefore were able to treat me with a combination of physical therapy and dry needling. They truly care for each and every one of their patients. Please go see them. You will not regret it!`,
    color: "#FF9500"
  },
  {
    id: 5,
    name: "Regan Garrett",
    initial: "R",
    rating: 5,
    text: `They worked on my lower back pain & after 3 sessions with them it’s completely gone! They also make you feel very comfortable with dry needling (as someone who fears needles)`,
    color: "#34C759"
  },
  {
    id: 6,
    name: "Windy Hudson",
    initial: "W",
    rating: 5,
    text: `if you are looking for physical therapists who will actually listen to you and adjust the regimen to make sure that you’re feeling great, Dr. Natalie and Dr. Drea are the one! I have never experienced a therapy where I knew that my therapist was so in tune with what I needed… ￼ until I met Dr. Natalie and Dr. Drea! They were all in and they’ll take the best care of you!`,
    color: "#5856D6"
  },
  {
    id: 7,
    name: "Mike Myers",
    initial: "M",
    rating: 5,
    text: `Absolutely 💯! They are a multiplier for any coach looking to enhance performance and prevent injuries!`,
    color: "#FF2D92"
  },
  {
    id: 8,
    name: "Micheal Irvin II",
    initial: "M",
    rating: 5,
    text: `LOVED working with these 2!! Gr8 WORK!!`,
    color: "#007AFF"
  },
  {
    id: 9,
    name: "Rylan Austin",
    initial: "R",
    rating: 5,
    text: `Shout out to M2M! Great service guaranteed to give you better flexibility. Go book with them!`,
    color: "#5856D6"
  },
  {
    id: 10,
    name: "Akil Simpson",
    initial: "A",
    rating: 5,
    text: `These two have started a business and they must have been listening to God! These two ladies have already made such a huge impact in my life and the people around me and I can’t thank them enough! Not only do I have the pleasure of working with them at tournaments and camps, I also am a client. The care and the love that exudes from them and their work, is nothing short of amazing! I am so honored to call them my trainers and my friends`,
    color: "#34C759"
  },
  {
    id: 11,
    name: "CJ Wottlin",
    initial: "C",
    rating: 5,
    text: `M2M helped me get back on track after surgery! I’ve never felt more physically confident than I do now all because of them! THANK YOU DR. DRE & DR. NAT`,
    color: "#FF2D92"
  },
  {
    id: 12,
    name: "Cole McKenzie",
    initial: "C",
    rating: 5,
    text: `Dr. Drea and Dr. Nat are incredibly knowledgeable and proficient in what they do.  I cannot recommend either of them enough, and have referred them to multiple friends and coworkers already!  I went to see them initially for shoulder pain, and the cause was quickly and accurately diagnosed and corrected through the PT plan that they designed.  On top of their expertise, they are both friendly, empathetic people who make it impossible to feel uncomfortable.  I have never felt better, and they can do the same for anyone.  I would urge anyone looking to start physical therapy to go to them over anyone else!`,
    color: "#FF2D92"
  },
  {
    id: 13,
    name: "Coach Kortlin White",
    initial: "C",
    rating: 5,
    text: `I firmly believe that any team seeking to maintain their athletes' peak performance, especially during critical playoff seasons, would greatly benefit from partnering with Made 2 Move. Their expertise and personalized approach make them an invaluable asset to any athletic program.`,
    color: "#FF2D92"
  },
  {
    id: 14,
    name: "Phariz Watkins",
    initial: "P",
    rating: 5,
    text: `Extremely grateful for the amazing care & time spent with Made 2 Move. The expertise of Dr. Dre & Dr. Nat has made an immediate difference in how my body feels & functions daily. I appreciate the time spent with M2M & most definitely will be using them moving forward!`,
    color: "#34C759"
  },
  {
    id: 15,
    name: "Nikki Greene",
    initial: "N",
    rating: 5,
    text: `The best in DFW, check them out!`,
    color: "#AF52DE"
  },
  {
    id: 16,
    name: "Daleth Estrada",
    initial: "D",
    rating: 5,
    text: `My knee is recovering amazingly thanks to M2M and their professional PT diagnosis and decision making on the program I needed. Thank you!`,
    color: "#007AFF"
  },
  {
    id: 17,
    name: "Michael Haberman",
    initial: "M",
    rating: 5,
    text: `Back in competition for the first time since my shoulder injury, and it feels great! Huge thanks to the team at Made 2 Move for getting my shoulder rehabbed and competition ready. If you ever need physical therapy, they are the absolute best`,
    color: "#5856D6"
  },
  {
    id: 18,
    name: "Mika Tafua",
    initial: "M",
    rating: 5,
    text: `Mahaloz M2M for getting me right`,
    color: "#34C759"
  }
];


  const itemsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <ThemeProvider theme={appleTheme}>
      <Box
        sx={{
          backgroundColor: '#111',
          minHeight: '60vh',
          py: 6,
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box textAlign="center" mb={8}>
            {/* <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 2 }}
            >
              Hear from our one community church family
            </Typography> */}
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.2,
                fontWeight: "bold"
              }}
            >
              CUSTOMER TESTIMONIALS
            </Typography>
          </Box>

          {/* Testimonials Grid */}
          <Fade in={true} timeout={600}>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {getCurrentTestimonials().map((testimonial, index) => (
                <Grid item xs={12} md={6} lg={4} key={testimonial.id}>
                  <Fade in={true} timeout={800 + index * 100}>
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardContent sx={{ p: 3, flexGrow: 1 }}>
                        {/* Avatar and Rating */}
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          mb={2}
                        >
                          <Box display="flex" alignItems="center" gap={1.5}>
                            <Avatar
                              sx={{
                                bgcolor: testimonial.color,
                                width: 40,
                                height: 40,
                                fontSize: '0.875rem',
                                fontWeight: 600,
                              }}
                            >
                              {testimonial.initial}
                            </Avatar>
                            <Typography
                              variant="body1"
                              color="text.primary"
                              fontWeight={500}
                              sx={{
                                fontSize: "1.5rem"
                              }}
                            >
                              {testimonial.name}
                            </Typography>
                          </Box>
                          <Rating
                            value={testimonial.rating}
                            readOnly
                            size="small"
                            sx={{
                              '& .MuiRating-iconFilled': {
                                color: '#FFD60A',
                              },
                            }}
                          />
                        </Box>

                        {/* Testimonial Text */}
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.6,
                            fontSize: '1.3rem',
                          }}
                        >
                          {testimonial.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Fade>

          {/* Navigation */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
            mb={6}
          >
            <IconButton
              onClick={prevPage}
              disabled={currentPage === 0}
              sx={{ width: 48, height: 48 }}
            >
              <ChevronLeft />
            </IconButton>

            {/* Page Indicators */}
            <Box display="flex" gap={1}>
              {[...Array(totalPages)].map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: index === currentPage ? 'white' : 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: index === currentPage ? 'scale(1.25)' : 'scale(1)',
                    '&:hover': {
                      backgroundColor: index === currentPage ? 'white' : 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              sx={{ width: 48, height: 48 }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TestimonialsComponent;