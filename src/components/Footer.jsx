import React from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../public/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1f1f1f",
        color: "white",
        py: isMobile ? 2 : 4,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Logo + Social Media */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-between",
            flexWrap: "wrap",
            mb: isMobile ? 3 : 2,
            gap: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.05)" },
            }}
            onClick={handleLogoClick}
            role="button"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Made 2 Move Sports Medicine & Physical Therapy"
              style={{ height: isMobile ? "40px" : "50px" }}
              loading="lazy"
            />
          </Box>

          {/* Social Icons */}
          <Box
            component="nav"
            aria-label="Social media links"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "1rem" : "1.5rem",
            }}
          >
            <IconButton
              component="a"
              href="https://www.instagram.com/m2mdfw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Made 2 Move on Instagram"
              color="inherit"
              sx={{ transition: "color 0.3s", "&:hover": { color: "#C8102E" } }}
            >
              <FaInstagram size={isMobile ? 22 : 24} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/people/Made-2-Move/61573160043411/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Made 2 Move on Facebook"
              color="inherit"
              sx={{ transition: "color 0.3s", "&:hover": { color: "#C8102E" } }}
            >
              <FaFacebook size={isMobile ? 22 : 24} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@m2mdfw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Made 2 Move on TikTok"
              color="inherit"
              sx={{ transition: "color 0.3s", "&:hover": { color: "#C8102E" } }}
            >
              <FaTiktok size={isMobile ? 22 : 24} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/made-2-move-sports-medicine-physical-therapy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Made 2 Move on LinkedIn"
              color="inherit"
              sx={{ transition: "color 0.3s", "&:hover": { color: "#C8102E" } }}
            >
              <FaLinkedin size={isMobile ? 22 : 24} />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "gray", opacity: 0.2, my: 2 }} />

        {/* Internal Navigation */}
        <Box
          component="nav"
          aria-label="Footer navigation"
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? 1 : 3,
            flexWrap: "wrap",
            mb: 1,
          }}
        >
          {[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "FAQ", to: "/faq" },
            { label: "Privacy Policy", to: "/privacy-policy" },
          ].map(({ label, to }) => (
            <RouterLink
              key={to}
              to={to}
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: isMobile ? "13px" : "14px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8102E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              {label}
            </RouterLink>
          ))}
        </Box>

        <Divider sx={{ bgcolor: "gray", opacity: 0.2, my: 2 }} />

        {/* Contact Info */}
        <Typography
          variant="body2"
          sx={{ fontSize: isMobile ? "12px" : "13px", color: "#aaa", mb: 1 }}
        >
          <Link
            href="mailto:info@m2mdfw.com"
            color="inherit"
            underline="hover"
            sx={{ color: "#aaa" }}
          >
            info@m2mdfw.com
          </Link>
          {" · "}
          Dallas-Fort Worth Metroplex, TX
        </Typography>

        <Typography
          variant="body2"
          sx={{ mt: 1, fontSize: isMobile ? "11px" : "12px", opacity: 0.6 }}
        >
          © {new Date().getFullYear()} Made 2 Move Sports Medicine &amp; Physical Therapy. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
