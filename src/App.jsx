import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";
import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import FrameworkCarousel from './components/FrameworkCarousel';
import MeetTheTeam from './components/Team';
import ErrorPage from "./components/ErrorPage";
import About from './components/About';
import Booking from './components/Booking';
import Map from './components/Map';
import Instagram from './components/Instagram';
import CTA from './components/cta';
import Techniques from './components/Techniques';
import InstagramEmbed from './components/Instagram';
import CTA2 from './components/cta2';
import FAQ from './components/FAQ';
import ServiceDetails from './components/ServiceDetails';

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const offset = 100;
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router baseName="/M2M-Website/"> {/* ✅ Using HashRouter now */}
        <ScrollToTop />
        <ScrollHandler />
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CTA />
                <MeetTheTeam />
                <Services />
                <CTA2 />
                <FrameworkCarousel />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
