import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";  // ✅ Import useEffect
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

// ✅ Helper function to handle scrolling after navigation
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const offset = 100; // Adjust this value as needed
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100); // Small delay to ensure the page loads before scrolling
    }
  }, [location]);

  return null;
};

// const postUrls = [
//   "https://www.instagram.com/p/DGdfsYPpKat/",
//   "https://www.instagram.com/p/DD7TalmpU9Q/",
//   "https://www.instagram.com/p/DENWgknJBBW/",
//   "https://www.instagram.com/p/DGVv3X_JCmA/",
// ];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/M2M-Website/"> 
        <ScrollToTop />
        <ScrollHandler />  {/* ✅ New component to handle scrolling */}
        <Topbar /> {/* ✅ Keep Topbar on all pages for navigation */}
        <Routes className="App">
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
                {/* <InstagramEmbed postUrls={postUrls} /> */}
                <Testimonials />
                <Contact />
                {/* <Map /> */}
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
          {/* <Route path="/services/:serviceId" element={<ServicePage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
