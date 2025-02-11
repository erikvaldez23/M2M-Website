// MeetTheTeam.jsx
import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaLinkedin, FaInstagram, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "NICLOE CRUISE",
    title: "Designer",
    description: "The beach, brown fox jumps over a lazy dog. This black or silver, Mr. white or gray, thick fish very good for the web design team like this quick company.",
    image: "/M2M-Website/natalie.jpg",
    backgroundColor: "#FF4B4B",
    socials: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      instagram: "https://instagram.com/dr.alexjohnson",
    },
  },
  {
    name: "PAUL SAM GEORGIA",
    title: "Programmer",
    description: "The beach, brown fox jumps over a lazy dog. This black or silver, Mr. white or gray, thick fish very good for the programming team like this quick company.",
    image: "/M2M-Website/drea.jpg",
    backgroundColor: "#3B82F6",
    socials: {
      linkedin: "https://linkedin.com/in/taylor-smith",
      instagram: "https://instagram.com/dr.taylorsmith",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MeetTheTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 4,
        color: "#333",
        overflowX: "hidden", // Fix for the top overflow issue
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            color: "#fff"
          }}
        >
          MEET THE TEAM
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    height: 350,
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "grayscale(100%)",
                    }}
                  />
                  <Box
                    sx={{
                      width: "50%",
                      backgroundColor: member.backgroundColor,
                      color: "#fff",
                      padding: 3,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    {/* Circular Icons */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "#000",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: 1,
                        }}
                        onClick={() => window.open(member.socials.linkedin, '_blank')}
                      >
                        <FaLinkedin color="#fff" size={20} />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "#000",
                          borderRadius: "50%",
                          width: 40,
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: 1,
                        }}
                        onClick={() => window.open(member.socials.instagram, '_blank')}
                      >
                        <FaInstagram color="#fff" size={20} />
                      </IconButton>
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontStyle: "italic", mb: 2 }}
                    >
                      {member.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.5, mb: 2 }}
                    >
                      {member.description}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => setSelectedMember(member)}
                      sx={{
                        backgroundColor: "#fff",
                        color: member.backgroundColor,
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: member.backgroundColor,
                          color: "#fff",
                          border: "2px solid #fff",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Detailed Info */}
        <Dialog
          open={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          maxWidth="sm"
          fullWidth
        >
          <DialogContent sx={{ position: "relative", padding: 4 }}>
            <IconButton
              onClick={() => setSelectedMember(null)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "white",
                "&:hover": { backgroundColor: "lightgray" },
              }}
            >
              <FaTimes />
            </IconButton>

            {selectedMember && (
              <Box textAlign="center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    marginBottom: "20px",
                  }}
                />
                <Typography variant="h4" gutterBottom>
                  {selectedMember.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {selectedMember.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedMember.description}
                </Typography>
              </Box>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
