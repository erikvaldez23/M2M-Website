import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://m2mdfw.com/#webpage",
  "url": "https://m2mdfw.com/",
  "name": "Made 2 Move Sports Medicine & Physical Therapy | Dallas-Fort Worth",
  "description": "Premier sports medicine and concierge physical therapy in Dallas-Fort Worth. Mobile PT services and clinic location. Specializing in athlete recovery, injury prevention, and sports performance.",
  "isPartOf": { "@id": "https://m2mdfw.com/#website" },
  "about": { "@id": "https://m2mdfw.com/#business" },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://m2mdfw.com/" }
    ]
  }
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
                  title="Elite Physical Therapy & Sports Medicine in Dallas-Fort Worth"
                  description="Made 2 Move offers premier concierge physical therapy and sports medicine in Dallas-Fort Worth. Mobile PT services and clinic location. Trusted by NFL, collegiate, and high school athletes for injury rehab, dry needling, and sports performance."
                  keywords="physical therapy Dallas, sports medicine DFW, mobile physical therapy, concierge PT, dry needling Dallas, injury rehab Fort Worth, athletic recovery, sports performance training, Made 2 Move"
                  canonical="https://m2mdfw.com/"
                  image="https://m2mdfw.com/natalie.jpg"
                  schemaMarkup={homepageSchema}
                />
                <main>
                  <Hero />
                  <CTA />
                  <MeetTheTeam />
                  <Services />
                  <CTA2 />
                  <FrameworkCarousel />
                  <Testimonials />
                  <Contact />
                </main>
              </>
            }
          />
          <Route path="/faq" element={
            <>
              <SEO
                title="FAQ – Physical Therapy & Sports Medicine Questions"
                description="Answers to frequently asked questions about Made 2 Move's physical therapy services in Dallas-Fort Worth. Learn about our cash-pay model, mobile concierge services, insurance superbills, and what to expect on your first visit."
                keywords="physical therapy FAQ Dallas, do I need a referral for PT Texas, cash pay physical therapy, mobile PT questions, sports medicine DFW FAQ"
                canonical="https://m2mdfw.com/faq"
                image="https://m2mdfw.com/logo.png"
              />
              <main>
                <FAQ />
              </main>
            </>
          } />
          <Route path="/services" element={
            <>
              <SEO
                title="Services – Physical Therapy, Recovery & Injury Prevention"
                description="Explore Made 2 Move's comprehensive services: Physical Therapy, Athletic Recovery (dry needling, cupping, Normatec), and Injury Prevention programs. Available mobile concierge in DFW or at our Dallas clinic."
                keywords="physical therapy services Dallas, dry needling DFW, cupping therapy, injury prevention sports, athletic recovery, manual therapy Fort Worth, blood flow restriction therapy, sports performance"
                canonical="https://m2mdfw.com/services"
                image="https://m2mdfw.com/natalie.jpg"
              />
              <main>
                <ServiceDetails />
              </main>
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO
                title="About Dr. Natalie Valdez – Physical Therapist & Founder"
                description="Meet Dr. Natalie Valdez, PT, DPT, SMTC, CSCS – founder of Made 2 Move Sports Medicine. A Dallas native and Kinesiology graduate trusted by professional, collegiate, and high school athletes to bridge rehab and peak performance."
                keywords="Dr. Natalie Valdez physical therapist Dallas, sports PT DFW, Made 2 Move founder, DPT Dallas, CSCS physical therapist, athlete physical therapy"
                canonical="https://m2mdfw.com/about"
                image="https://m2mdfw.com/natalie.jpg"
              />
              <main>
                <About />
              </main>
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEO
                title="Privacy Policy"
                description="Read Made 2 Move Sports Medicine's privacy policy detailing how we collect, use, and protect your personal information."
                canonical="https://m2mdfw.com/privacy-policy"
                image="https://m2mdfw.com/logo.png"
              />
              <main>
                <PrivacyPolicy />
              </main>
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
