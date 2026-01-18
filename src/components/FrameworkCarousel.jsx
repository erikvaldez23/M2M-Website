// FrameworkCarousel.jsx
import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee-slider';
import './FrameworkCarousel.css';
import hyperIce from '../../public/hyperice.png';
import proSkills from '../../public/pro-skills.png';
import solidCore from '../../public/solid-core.png';
import swinCity from '../../public/swin-city.png';
import northCrowley from '../../public/north-crowley.png';
import pcpt from "../../public/pcpt.png"
import nfl from "../../public/nfl2.png"
import ufl from "../../public/ufl.webp"
import smu from "../../public/smu.png"
import tcu from "../../public/tcu.png"
import unt from "../../public/unt.png"
import ncaa from "../../public/ncaa.png"
import { Typography, useTheme, useMediaQuery } from '@mui/material';

const frameworks = [
  { name: 'SMU', icon: <img src={smu} alt="SMU" />, url: 'https://www.smu.edu' },
  { name: 'TCU', icon: <img src={tcu} alt="TCU" />, url: 'https://www.tcu.edu' },
  { name: 'UNT', icon: <img src={unt} alt="UNT" />, url: 'https://www.unt.edu/index.html' },
  { name: 'NCAA', icon: <img src={ncaa} alt="NCAA" />, url: 'https://www.ncaa.com' },
  { name: 'NFL', icon: <img src={nfl} alt="NFL" />, url: 'https://www.nfl.com' },
  { name: 'UFL', icon: <img src={ufl} alt="UFL" />, url: 'https://www.theufl.com' },
  // { name: 'HyperIce', icon: <img src={hyperIce} alt="HyperIce" />, url: 'https://hyperice.com/?nbt=nb%3Aadwords%3Ag%3A13234263297%3A121993101330%3A544456856771&nb_adtype=&nb_kwd=hyperice&nb_ti=kwd-299181057308&nb_mi=&nb_pc=&nb_pi=&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=b&gad_source=1&gbraid=0AAAAADuMRhiV7hjFhV0g-k2N6f2S-f3I5&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTbnEXgvz62ZNJEvqXUsWCCHfHgPFxZPV0MxtymDZZmk0yHqo7W9MhAaAvsfEALw_wcB' },
  { name: 'Pro Skills', icon: <img src={proSkills} alt="Pro Skills" />, url: 'http://nikeproskills.com' },
  { name: 'Solid Core', icon: <img src={solidCore} alt="Solid Core" />, url: 'https://solidcore.co' },
  { name: 'Swin City', icon: <img src={swinCity} alt="Swin City" />, url: 'https://swincityleague.com' },
  { name: 'North Crowley', icon: <img src={northCrowley} alt="North Crowley" />, url: 'https://www.crowleyisdtx.org/nchs' },
  { name: 'Park Cities Personal Training', icon: <img src={pcpt} alt="PCPT Gym" />, url: 'https://www.pcptgym.com' }
];

const repeatFrameworks = [...frameworks, ...frameworks, ...frameworks]; // Repeat to ensure continuous loop

const FrameworkCarousel = () => {
  const [velocity, setVelocity] = useState(20); // Increased velocity for faster movement
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  useEffect(() => {
    const updateVelocity = () => {
      if (window.innerWidth <= 768) {
        setVelocity(8);
      } else {
        setVelocity(20); // Faster speed for larger screens
      }
    };

    updateVelocity();
    window.addEventListener('resize', updateVelocity);

    return () => {
      window.removeEventListener('resize', updateVelocity);
    };
  }, []);

  return (
    <div className="framework-carousel">
      <Typography variant={isMobile ? "h3" : "h2"} sx={{ fontWeight: "bold", mb: 5 }}>
        PARTNERS & CLIENTS
      </Typography>
      <div className="marquee-wrapper">
        <Marquee velocity={velocity} direction="ltr">
          {repeatFrameworks.map((framework, index) => (
            <div
              key={`${framework.name}-${index}`}
              className="framework-card"
              onClick={() => window.open(framework.url, '_blank')}
            >
              <div className="framework-icon">{framework.icon}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FrameworkCarousel;