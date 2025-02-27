import React, { useState } from "react";
import {
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
    name: "Dr. Natalie Valdez",
    certs: "PT, DPT, SMTC, CSCS, Cert. DN",
    title: "Founder Physical Therapist",
    description:
      "Dr. Natalie Valdez, a Dallas native, earned her Doctorate of Physical Therapy from Texas Women's University - Dallas. As a former athlete herself, she has always had the passion for working with the sports active population. She has experience working with athletes of all levels (professional, collegiate, high school, and youth sports) for return to sport. Natalie also has a background in strenfgth and conditioning and is a Certified and Conditioning Specialist. She has a passion for strength and wellness and is commited to helping individuals achieve their optimal health and performance. When she is not working you can catch her traveling with her husband walking thier dogs on the Katy trail, and doing pilates.",
    image: "/M2M-Website/natalie.jpg",
    modalImage: "/M2M-Website/natalie.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      instagram: "https://instagram.com/dr.alexjohnson",
    },
  },
  {
    name: "Dr. Andrea Sigsbee",
    certs: "PT, DPT, Cert. DN",
    title: "Founder Physical Therapist",
    description:
      "Dr. Andrea Sigsbee, born and raised in Dallas, has a strong passion for combining her love for health and wellness with healing and serving others. She attained her Doctorate of Physical Therapy at Texas Women's University in Dallas and has experience working with professional, high school, and college athletes as well as the activbe population. She also has a love for personal training and nutrition as she has had to use her own personal goals and experiences. When not working, you can catch her lifting weights in the gym, doing pilates, or traveling to a new place on the map.",
    image: "/M2M-Website/drea.jpg",
    modalImage: "/M2M-Website/drea.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/taylor-smith",
      instagram: "https://instagram.com/dr.taylorsmith",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MeetTheTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "#F7E7CE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 6,
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            letterSpacing: "4px",
            textTransform: "uppercase",
            background: "#000",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meet The Team
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                whileHover={{ scale: 1.03 }}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 600,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    transition: "all 0.5s ease-in-out",
                    ":hover": {
                      filter: "brightness(80%)",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontStyle: "italic",
                      color: "#fff",
                    }}
                  >
                    {member.certs}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontStyle: "italic",
                      mb: 2,
                      color: "#ccc",
                    }}
                  >
                    {member.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "#fff",
                        p: 1,
                        borderRadius: "50%",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                      }}
                      onClick={() =>
                        window.open(member.socials.linkedin, "_blank")
                      }
                    >
                      <FaLinkedin color="#000" size={20} />
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: "#fff",
                        p: 1,
                        borderRadius: "50%",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                      }}
                      onClick={() =>
                        window.open(member.socials.instagram, "_blank")
                      }
                    >
                      <FaInstagram color="#000" size={20} />
                    </IconButton>
                  </Box>

                  {/* <Button
                    variant="outlined"
                    onClick={() => setSelectedMember(member)}
                    sx={{
                      color: "#fff",
                      borderColor: "#fff",
                      backdropFilter: "blur(5px)",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                      mt: 2, // Adds spacing below social icons
                    }}
                  >
                    Read More
                  </Button> */}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Modal for Detailed Info */}
        <Dialog
          open={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          maxWidth="md"
          fullWidth
        >
          <DialogContent
            sx={{
              position: "relative",
              padding: 4,
              background: "linear-gradient(135deg, #1a1a1a, #000)",
              color: "#fff",
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={() => setSelectedMember(null)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "lightgray" },
              }}
            >
              <FaTimes color="#000" />
            </IconButton>

            {selectedMember && (
              <Grid container spacing={4} alignItems="center">
                {/* Employee Image (Left Side) */}
                <Grid item xs={12} sm={5}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "auto",
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    <img
                      src={selectedMember.modalImage}
                      alt={selectedMember.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                      }}
                    />
                  </Box>
                </Grid>

                {/* Employee Details (Right Side) */}
                <Grid item xs={12} sm={7}>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                        fontWeight: "bold",
                      }}
                      gutterBottom
                    >
                      {selectedMember.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#bbb", fontStyle: "italic", mb: 2 }}
                    >
                      {selectedMember.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {selectedMember.description}
                    </Typography>

                    {/* Social Media Links */}
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                      {selectedMember.socials.linkedin && (
                        <IconButton
                          sx={{
                            backgroundColor: "#fff",
                            p: 1.2,
                            borderRadius: "50%",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          }}
                          onClick={() =>
                            window.open(
                              selectedMember.socials.linkedin,
                              "_blank"
                            )
                          }
                        >
                          <FaLinkedin color="#000" size={24} />
                        </IconButton>
                      )}
                      {selectedMember.socials.instagram && (
                        <IconButton
                          sx={{
                            backgroundColor: "#fff",
                            p: 1.2,
                            borderRadius: "50%",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          }}
                          onClick={() =>
                            window.open(
                              selectedMember.socials.instagram,
                              "_blank"
                            )
                          }
                        >
                          <FaInstagram color="#000" size={24} />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
