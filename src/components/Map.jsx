import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const BusinessInfoContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
});

const MapContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  alignItems: "center",
  padding: "50px 20px",
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
});

const Map = () => {
  return (
    <Box sx={{ background: "#f5f5f5", py: 6 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "#222",
        }}
      >
        Find Us
      </Typography>

      <MapContainer>
        {/* Embedded Google Map */}
        <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
          <iframe
            title="Business Location"
            width="100%"
            height="400px"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=Your+Business+Name,+Your+City,+Your+Country&key=YOUR_GOOGLE_MAPS_API_KEY`}
          />
        </Box>

        {/* Business Information */}
        <BusinessInfoContainer>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            <FaMapMarkerAlt style={{ color: "#007AFF", marginRight: 8 }} />
            Business Name
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
            123 Main Street, City, Country
          </Typography>

          <Divider sx={{ width: "100%", my: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            <FaPhone style={{ color: "#34C759", marginRight: 8 }} />
            Call Us
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
            +1 (555) 123-4567
          </Typography>

          <Divider sx={{ width: "100%", my: 2 }} />

          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            <FaClock style={{ color: "#FF9500", marginRight: 8 }} />
            Hours
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            Mon-Fri: 9AM - 6PM <br /> Sat: 10AM - 4PM <br /> Sun: Closed
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "#007AFF",
              color: "#fff",
              borderRadius: "8px",
              px: 4,
              py: 1,
              fontWeight: "bold",
              "&:hover": { background: "#0056CC" },
            }}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Your+Business+Name,+Your+City",
                "_blank"
              )
            }
          >
            Open in Google Maps
          </Button>
        </BusinessInfoContainer>
      </MapContainer>
    </Box>
  );
};

export default Map;
