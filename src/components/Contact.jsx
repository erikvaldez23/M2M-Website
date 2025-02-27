import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
  padding: "30px 20px",
  backgroundColor: "#000",
  color: "#F7E7CE",
});

const IframeContainer = styled("iframe")(({ height }) => ({
  width: "100%",
  maxWidth: "800px",
  height: `${height}px`, // Dynamically set the height
  border: "none",
  borderRadius: "10px",
  boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
  transition: "height 0.5s ease-in-out", // Smooth height change
}));

const Contact = () => {
  const [iframeHeight, setIframeHeight] = useState(800); // Default height

  useEffect(() => {
    const handleResize = (event) => {
      if (event.origin.includes("jotform.com")) {
        const newHeight = event.data?.height || 800;
        setIframeHeight(newHeight);
      }
    };

    window.addEventListener("message", handleResize);

    return () => {
      window.removeEventListener("message", handleResize);
    };
  }, []);

  return (
    <Container id="contact">
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
        CONTACT US
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, textAlign: "center", opacity: 0.8 }}>
        Fill out the form below and we'll get back to you as soon as possible.
      </Typography>

      <IframeContainer
        src="https://form.jotform.com/242896129509165"
        height={iframeHeight}
        title="Contact Form"
      />
    </Container>
  );
};

export default Contact;

