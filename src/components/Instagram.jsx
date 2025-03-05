import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const InstagramEmbed = ({ postUrls, instagramProfileUrl }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ✅ Load Instagram's embed script dynamically
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setLoaded(true);
      if (window.instgrm) {
        window.instgrm.Embeds.process(); // ✅ Ensures Instagram posts resize properly
      }
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        background: "linear-gradient(to right, #121212, #1e1e1e)",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
          Follow Us on Instagram
        </Typography>
        <Button
          variant="contained"
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#F7E7CE",
            color: "#000",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "30px",
            fontWeight: "bold",
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              transform: "scale(1.05)",
            },
          }}
        >
          Visit Instagram
        </Button>
      </Box>

      {/* Instagram Posts Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {postUrls.map((url, index) => (
          <Paper
            key={index}
            elevation={4}
            sx={{
              maxWidth: "540px",
              minWidth: "326px",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              justifyContent: "center",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0px 6px 20px rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#1c1c1c",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "0px",
                width: "100%",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.05)",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            ></blockquote>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default InstagramEmbed;
