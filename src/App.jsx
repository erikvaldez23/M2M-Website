import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";  // ✅ Import useEffect
import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
// import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import Vision from './components/Vision';
import Footer from './components/Footer';
// import Chatbot from './ChatBot';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import FrameworkCarousel from './components/FrameworkCarousel';
import MeetTheTeam from './components/Team';
import CTA from './components/cta'
import ErrorPage from "./components/ErrorPage";
import ServicePage from './components/ServicePage';

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
                <FrameworkCarousel />
                <Services />
                {/* <WhyChooseUs /> */}
                {/* <Testimonials /> */}
                <Vision />
                <Contact />
                <Footer />
              </>
            } 
          />
          {/* ✅ Dynamic Route for Individual Service Pages */}
          {/* <Route path="/services/:serviceId" element={<ServicesPage />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Chatbot /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
