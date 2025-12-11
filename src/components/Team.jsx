import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

// Team Member Data
const teamMembers = [
  {
    id: "natalie",
    name: "Dr. Nat",
    certs: "PT, DPT, SMTC, CSCS, Cert. DN",
    title: "PHYSICAL THERAPIST/FOUNDER",
    description:
      "Trusted by athletes of all levels (Professional, Collegiate, High school, and Youth sports) to perform at the top of their game. She also has a background in strength and conditioning and is committed to helping individuals reach their peak performance.",
    image: "/natalie.jpg",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/natalie-valdez-pt-dpt-smtc-cscs-cert-dn-a66095231/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/drnat.dpt/",
    },
  },
];

const MeetTheTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1f1f1f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 4, md: 4 },
        color: "#fff",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          background: "#fff",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Meet The Founder
      </Typography>

      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} key={member.id}>
              {/* Wrapper that changes layout based on breakpoint */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: {
                    xs: "center",
                    md: "center", // ✅ vertically center bio & image on desktop
                  },
                  textAlign: { xs: "center", md: "left" },
                  gap: { xs: 3, md: 5 },
                  pt: { xs: 2, md: 6 },
                  pb: { xs: 4, md: 2 },
                }}
              >
                {/* Image – 30% on desktop, centered on mobile */}
                <Box
                  sx={{
                    flexBasis: { xs: "100%", md: "30%" }, // ✅ 30% on desktop
                    maxWidth: { xs: "100%", md: "30%" },
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: { xs: "80%", sm: "70%", md: "100%" },
                      maxWidth: 320,
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
                      objectFit: "cover",
                      mx: "auto", // ✅ centers within mobile frame
                    }}
                  />
                </Box>

                {/* Bio – 70% on desktop, vertically centered via parent alignItems */}
                <Box
                  sx={{
                    flexBasis: { xs: "100%", md: "70%" }, // ✅ 70% on desktop
                    maxWidth: { xs: "100%", md: "70%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", color: "#fff", mb: 0.5 }}
                  >
                    {member.certs}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontStyle: "italic", color: "#ccc", mb: 2 }}
                  >
                    {member.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mb: 2, maxWidth: { xs: "100%", md: "90%" } }}
                  >
                    {member.description}
                  </Typography>

                  {/* Social Icons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {member.socials.linkedin && (
                      <IconButton
                        sx={{
                          backgroundColor: "#fff",
                          p: 1,
                          borderRadius: "50%",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          "&:hover": {
                            backgroundColor: "#F94B3D",
                            transform: "translateY(-1px)",
                            "& svg": {
                              color: "#000",
                            },
                          },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(member.socials.linkedin, "_blank");
                        }}
                      >
                        <FaLinkedin color="#000" size={20} />
                      </IconButton>
                    )}

                    {member.socials.instagram && (
                      <IconButton
                        sx={{
                          backgroundColor: "#fff",
                          p: 1,
                          borderRadius: "50%",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                          transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                          "&:hover": {
                            backgroundColor: "#F94B3D",
                            transform: "translateY(-1px)",
                            "& svg": {
                              color: "#000",
                            },
                          },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(member.socials.instagram, "_blank");
                        }}
                      >
                        <FaInstagram color="#000" size={20} />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
