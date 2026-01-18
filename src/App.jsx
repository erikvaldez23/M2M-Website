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
import CTA from './components/cta';
import CTA2 from './components/cta2';
import FAQ from './components/FAQ';
import ServiceDetails from './components/ServiceDetails';
import SEO from './components/SEO';

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
      <Router>
        <ScrollToTop />
        <ScrollHandler />
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="M2M Sports Medicine | Elite Physical Therapy & Performance in Dallas"
                  description="Premier sports performance and physical therapy in Dallas-Fort Worth. Mobile concierge services and clinic location. Specializing in athlete recovery and injury prevention."
                  keywords="Sports Physical Therapy Dallas, Mobile PT DFW, Athlete Recovery, Injury Prevention, Performance Training"
                  url="https://m2mdfw.com/"
                />
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
          {/* <Route path="/gallery" element={
            <>
              <SEO
                title="Gallery | M2M Sports Medicine"
                description="View our athletes in action and our state-of-the-art facility. M2M Sports Medicine & Physical Therapy in Dallas."
                url="https://m2mdfw.com/#/gallery"
              />
              <Gallery />
            </>
          } /> */}
          <Route path="/faq" element={
            <>
              <SEO
                title="FAQ | M2M Physical Therapy Questions"
                description="Frequently asked questions about insurance, mobile concierge services, and what to expect during your first visit at M2M."
                url="https://m2mdfw.com/#/faq"
              />
              <FAQ />
            </>
          } />
          {/* <Route path="/testimonials" element={
            <>
              <SEO
                title="Client Reviews | M2M Sports Medicine"
                description="See what professional, collegiate, and youth athletes are saying about Dr. Natalie Valdez and the M2M team."
                url="https://m2mdfw.com/#/testimonials"
              />
              <Testimonials />
            </>
          } /> */}
          {/* <Route path="/booking" element={
            <>
              <SEO
                title="Book Appointment | M2M Sports Medicine"
                description="Schedule your physical therapy or performance training session online. Mobile concierge or Dallas clinic location available."
                url="https://m2mdfw.com/#/booking"
              />
              <Booking />
            </>
          } /> */}
          <Route path="/services" element={
            <>
              <SEO
                title="Services | Physical Therapy & Performance"
                description="Comprehensive services including Dry Needling, Cupping, Manual Therapy, ACL Rehab, and Sports Performance Training."
                url="https://m2mdfw.com/#/services"
              />
              <ServiceDetails />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO
                title="About Us | Dr. Natalie Valdez"
                description="Meet Dr. Natalie Valdez and the expert team at M2M Sports Medicine. Dedicated to bridging the gap between rehab and performance."
                url="https://m2mdfw.com/#/about"
              />
              <About />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEO
                title="Privacy Policy | M2M Sports Medicine"
                description="Read our privacy policy regarding how we collect and use your data."
                url="https://m2mdfw.com/#/privacy-policy"
              />
              <PrivacyPolicy />
            </>
          } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
