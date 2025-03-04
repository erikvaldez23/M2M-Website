import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";



const specialTechniques = [
    {
      id: "cupping",
      title: "Cupping Therapy",
      description: "A traditional technique using suction cups to improve circulation and relieve muscle tension.",
      image: "/M2M-Website/cupping.jpg",
      benefits: [
        "Boosts circulation",
        "Relieves muscle tension",
        "Speeds up recovery",
        "Reduces inflammation",
      ],
      usedIn: ["Sports Massage", "Athletic Recovery"],
    },
    {
      id: "dry-needling",
      title: "Dry Needling",
      description: "A targeted technique that releases muscle knots and relieves chronic pain using thin needles.",
      image: "/M2M-Website/dry-needling.jpg",
      benefits: [
        "Releases muscle tension",
        "Reduces pain",
        "Increases mobility",
        "Speeds up muscle recovery",
      ],
      usedIn: ["Physical Therapy", "Injury Prevention"],
    },
    {
      id: "normatec",
      title: "NormaTec Recovery",
      description: "A state-of-the-art compression therapy system that enhances circulation and speeds up muscle recovery.",
      image: "/M2M-Website/normatec.jpg",
      benefits: [
        "Improves blood circulation",
        "Reduces muscle soreness",
        "Enhances post-workout recovery",
        "Decreases swelling",
      ],
      usedIn: ["Athletic Recovery", "Post-Operative Rehabilitation"],
    },
    {
      id: "graston",
      title: "Graston Technique",
      description: "An advanced soft tissue mobilization technique using metal instruments to break down scar tissue.",
      image: "/M2M-Website/graston.jpg",
      benefits: [
        "Reduces scar tissue buildup",
        "Enhances muscle healing",
        "Increases range of motion",
        "Speeds up recovery",
      ],
      usedIn: ["Physical Therapy", "Post-Operative Rehabilitation"],
    },
  ];
  
  // Special Techniques Section
  const Techniques = () => {
    return (
      <Box sx={{ backgroundColor: "#111", padding: "50px 10%", color: "#F7E7CE", textAlign: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>Innovative Techniques</Typography>
        <Typography variant="h6" sx={{ opacity: 0.8, mb: 5 }}>
          Advanced physical therapy techniques designed for faster recovery and peak performance.
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {specialTechniques.map((technique) => (
            <Grid item xs={12} sm={6} md={4} key={technique.id}>
              <Card sx={{ backgroundColor: "#222", color: "#fff", borderRadius: "15px", padding: "20px", textAlign: "center" }}>
                <CardMedia component="img" image={technique.image} alt={technique.title} sx={{ height: 200, borderRadius: "10px" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>{technique.title}</Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>{technique.description}</Typography>
                
                <Box sx={{ mt: 2 }}>
                  {technique.benefits.map((benefit, index) => (
                    <Typography key={index} variant="body2" sx={{ fontStyle: "italic", color: "#FFD700", mt: 0.5 }}>
                      • {benefit}
                    </Typography>
                  ))}
                </Box>
  
                <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
                  Used In: {technique.usedIn.join(", ")}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Techniques;
  