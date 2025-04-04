import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation(); // ← Get current location
  const isAboutPage = location.pathname.includes("about"); // ← Check for "about"

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone,
      city: formData.city,
      services: formData.services,
    };

    emailjs
      .send(
        "service_pl9hftf", // EmailJS Service ID
        "template_yierqza", // EmailJS Template ID
        templateParams,
        "IJjDD9FPCyRdlPMm0" // EmailJS User ID
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            city: "",
            services: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll(".animate-on-scroll").forEach((el) => {
              el.classList.add("animate"); // Trigger animation
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const target = document.querySelector(".contact-section");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: isAboutPage ? "#1f1f1f" : "#000", // ← conditional background
        width: "100%",
        padding: 2,
      }}
    >
      <Box
        sx={{ py: 4, px: "10px", maxWidth: "1200px", margin: "auto" }}
        id="contact"
      >
        {/* Contact Header */}
        <Typography
          variant={isMobile ? "h3" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#fff", textAlign: "center" }}
        >
          CONTACT US
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5} sx={{ display: "flex" }}>
            <Card sx={{ backgroundColor: "#f8f9fa", flexGrow: 1 }}>
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly", // <-- Use even spacing or center
                  height: "100%",
                }}
              >
                {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaMapMarkerAlt
                    size={24}
                    style={{ marginRight: 10, color: "#000" }}
                  />
                  <Box>
                    <Typography variant="h6">Location</Typography>
                    <Typography variant="body2">
                      4514 Travis St UNIT 115
                    </Typography>
                    <Typography variant="body2">Dallas, TX</Typography>
                  </Box>
                </Box> */}

                {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaPhone
                    size={24}
                    style={{ marginRight: 10, color: "#000" }}
                  />
                  <Box>
                    <Typography variant="h6">Call Us</Typography>
                    <Typography variant="body2">+1 (972) 362-8468</Typography>
                  </Box>
                </Box> */}

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <FaEnvelope
                    size={24}
                    style={{ marginRight: 10, color: "#000" }}
                  />
                  <Box>
                    <Typography variant="h6">Email Us</Typography>
                    <Typography variant="body2">info@m2mdfw.com</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ mt: "4px", mr: 1 }}>
                    <FaCar size={24} style={{ color: "#000" }} />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h6">Location</Typography>
                    <Typography variant="body2">
                      M2M is a Sports Medicine and Physical Therapy company that
                      offers services in the Dallas-Fort Worth Metroplex. We
                      offer mobile concierge services, but we also have a
                      location in the Dallas area. For concierge services, we
                      will come to your home or facility. For our Dallas
                      location, we operate out of Park Cities Personal Training
                      (PCPT) in the Knox/Highland Park area.
                    </Typography>
                  </Box>
                </Box>

                {/* Google Map Embed */}
                <Box sx={{ marginTop: 2 }}>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338.2899300661918!2d-96.79229958215073!3d32.82257382388968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9efde6e3e3e5%3A0xf5e92ba54793f9ed!2sPark%20Cities%20Personal%20Training!5e0!3m2!1sen!2sus!4v1740681091437!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7} sx={{ display: "flex" }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#fff",
                padding: "20px",
                boxShadow: 3,
                borderRadius: 2,
                flexGrow: 1, // Ensures it stretches to match the height of the left side
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />

              <TextField
                label="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />

              <TextField
                label="Phone Number *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                fullWidth
              />

              <TextField
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="City *"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Services Needed (Optional)"
                name="services"
                value={formData.services}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                multiline
                rows={4}
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#F94B3D",
                    color: "#000",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
