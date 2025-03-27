import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Topbar from "./Topbar";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./cta";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Topbar notFound={true} />

      {/* Main 404 Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "#b6c0c2",
          padding: { xs: 4, md: 8 },
          mt: { xs: "56px", md: "64px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#FF6F61", fontWeight: "bold", mb: 1 }}
            >
              404
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Oops! I may have chewed up the power cord.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
              Go back to our main page to continue your visit.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "25px",
                px: 4,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
              href="/"
            >
              Back to main page
            </Button>
          </Box>

          {/* Image Section */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="/dog.jpeg"
              alt="Funny Dog"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <CTA />
      </Box>
      {/* Contact Section */}
      <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
        <Contact />
      </Box>
    </Box>
  );
};

export default ErrorPage;
