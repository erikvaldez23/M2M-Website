// MeetTheTeam.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
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
    name: "Dr. Alex Johnson",
    title: "Senior Physical Therapist",
    certifications: "DPT, OCS, CSCS",
    image: "/M2M-Website/natalie.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      instagram: "https://instagram.com/dr.alexjohnson",
    },
  },
  {
    name: "Dr. Taylor Smith",
    title: "Physical Therapist",
    certifications: "DPT, COMT",
    image: "/M2M-Website/drea.jpg",
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
        justifyContent: "center",
        paddingY: 4,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Meet the Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    maxWidth: 400,
                    margin: "auto",
                    borderRadius: 15,
                    boxShadow: 5,
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: 500,
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" component="div" align="center">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      align="center"
                    >
                      {member.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      sx={{ marginTop: 1 }}
                    >
                      Certifications: {member.certifications}
                    </Typography>

                    {/* Social Icons */}
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                      <IconButton
                        component="a"
                        href={member.socials.linkedin}
                        target="_blank"
                        sx={{ color: "#0077b5" }}
                      >
                        <FaLinkedin size={24} />
                      </IconButton>
                      <IconButton
                        component="a"
                        href={member.socials.instagram}
                        target="_blank"
                        sx={{ color: "#E4405F" }}
                      >
                        <FaInstagram size={24} />
                      </IconButton>
                    </Box>

                    <motion.div
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setSelectedMember(member)}
                        sx={{
                          borderRadius: 8,
                          marginTop: 2,
                          color: "#fff",
                          backgroundColor: "#000",
                          "&:hover": {
                            backgroundColor: "#fff",
                            color: "#000",
                            border: "3px solid #000",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Detailed Info */}
        <Dialog open={!!selectedMember} onClose={() => setSelectedMember(null)} maxWidth="sm" fullWidth>
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
                  {selectedMember.certifications}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Dr. {selectedMember.name} specializes in sports injury recovery and holistic physical therapy techniques, ensuring personalized care tailored to each individual’s needs.
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
