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
    name: "NICLOE CRUISE",
    title: "Designer",
    description:
      "Specializes in modern, dynamic fitness studio designs that inspire motivation and energy.",
    image: "/M2M-Website/natalie-removebg.png",
    socials: {
      linkedin: "https://linkedin.com/in/alex-johnson",
      instagram: "https://instagram.com/dr.alexjohnson",
    },
  },
  {
    name: "PAUL SAM GEORGIA",
    title: "Programmer",
    description:
      "Expert in developing interactive fitness tracking and performance-enhancing applications.",
    image: "/M2M-Website/drea.jpg",
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
        background: "linear-gradient(135deg, #000, #1a1a1a)",
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
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            letterSpacing: "4px",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #a8dadc, #457b9d)",
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
                      mb: 2,
                      color: "#ccc",
                    }}
                  >
                    {member.title}
                  </Typography>
                  <Button
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
                    }}
                  >
                    Read More
                  </Button>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
                      display: "flex",
                      gap: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ backgroundColor: "#fff", p: 1, borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}
                      onClick={() => window.open(member.socials.linkedin, "_blank")}
                    >
                      <FaLinkedin color="#000" size={20} />
                    </IconButton>
                    <IconButton
                      sx={{ backgroundColor: "#fff", p: 1, borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}
                      onClick={() => window.open(member.socials.instagram, "_blank")}
                    >
                      <FaInstagram color="#000" size={20} />
                    </IconButton>
                  </Box>
                </Box>
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
          <DialogContent
            sx={{
              position: "relative",
              padding: 4,
              background: "linear-gradient(135deg, #1a1a1a, #000)",
              color: "#fff",
            }}
          >
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
              <Box textAlign="center">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                  }}
                  gutterBottom
                >
                  {selectedMember.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#bbb", fontStyle: "italic" }}
                >
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
