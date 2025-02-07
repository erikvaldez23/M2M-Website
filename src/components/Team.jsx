import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Container,
} from "@mui/material";

const teamMembers = [
  {
    name: "Dr. Alex Johnson",
    title: "Senior Physical Therapist",
    certifications: "DPT, OCS, CSCS",
    image: "/M2M-Website/natalie.jpg",
  },
  {
    name: "Dr. Taylor Smith",
    title: "Physical Therapist",
    certifications: "DPT, COMT",
    image: "/M2M-Website/drea.jpg",
  },
];

const MeetTheTeam = () => {
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
              <Card
                sx={{
                  maxWidth: 4000,
                  margin: "auto",
                  borderRadius: 4,
                  boxShadow: 3,
                  height: "100%",
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
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
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
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ 
                      borderRadius: 8, 
                      marginTop: 2,
                      color: "#fff",
                      backgroundColor: "#000",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "3px solid #000"
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MeetTheTeam;
