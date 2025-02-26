import React from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../public/logo.png"; // Ensure correct path

const Footer = () => {
  return (
<Box
  component="footer"
  sx={{
    backgroundColor: "#000",
    color: "white",
    py: 4,
  }}
>

      <Container maxWidth="lg">
        {/* Top Section: Logo + Social Media */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          {/* Company Logo */}
          <Box sx={{ display: "flex", alignItems: "center", "&:hover": { cursor: "pointer", transform:"scale(1.05)" } }}>
            <img src={logo} alt="Company Logo" style={{ height: "50px" }} />
          </Box>

          {/* Social Media Icons */}
          <Box>
            <IconButton
              color="inherit"
              sx={{
                mx: 1,
                transition: "color 0.3s",
                "&:hover": { color: "#F7E7CE" }, // Blue color on hover
              }}
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebook size={24} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                mx: 1,
                transition: "color 0.3s",
                "&:hover": { color: "#F7E7CE" },
              }}
              href="https://instagram.com"
              target="_blank"
            >
              <FaInstagram size={24} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                mx: 1,
                transition: "color 0.3s",
                "&:hover": { color: "#F7E7CE" },
              }}
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                mx: 1,
                transition: "color 0.3s",
                "&:hover": { color: "#F7E7CE" },
              }}
              href="https://twitter.com"
              target="_blank"
            >
              <FaTwitter size={24} />
            </IconButton>
          </Box>
        </Box>

        {/* Divider for Separation */}
        <Divider sx={{ bgcolor: "gray", opacity: 0.2, my: 2 }} />

        {/* Middle Section: Website URL + Privacy Policy */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          <Link
            href="https://tinttekplus.com"
            color="inherit"
            underline="hover"
          >
            www.m2mdfw.com
          </Link>
          <Link href="/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>
        </Box>

        {/* Bottom Section: All Rights Reserved */}
        <Typography
          variant="body2"
          sx={{ textAlign: "center", mt: 2, fontSize: "12px", opacity: 0.7 }}
        >
          © {new Date().getFullYear()} Made2Move . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
