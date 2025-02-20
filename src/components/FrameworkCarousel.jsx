// FrameworkCarousel.jsx
import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee-slider';
import './FrameworkCarousel.css';
import fullThrottle from '/M2M-Website/full-throttle.png';
import hyperIce from '/M2M-Website/hyperice.png';
import mba from '/M2M-Website/mba.png';
import proSkills from '/M2M-Website/pro-skills.png';
import solidCore from '/M2M-Website/solid-core.png';
import spb from '/M2M-Website/spb.png';
import swinCity from '/M2M-Website/swin-city.png';
import suddenExposure from '/M2M-Website/sudden-exposure.png';
import northCrowley from '/M2M-Website/north-crowley.png';
import { Typography } from '@mui/material';

const frameworks = [
  { name: 'Full Throttle', icon: <img src={fullThrottle} alt="Full Throttle" />, url: 'https://www.fullthrottlebasketball.com' },
  { name: 'HyperIce', icon: <img src={hyperIce} alt="HyperIce" />, url: 'https://hyperice.com/?nbt=nb%3Aadwords%3Ag%3A13234263297%3A121993101330%3A544456856771&nb_adtype=&nb_kwd=hyperice&nb_ti=kwd-299181057308&nb_mi=&nb_pc=&nb_pi=&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=b&gad_source=1&gbraid=0AAAAADuMRhiV7hjFhV0g-k2N6f2S-f3I5&gclid=Cj0KCQiA_NC9BhCkARIsABSnSTbnEXgvz62ZNJEvqXUsWCCHfHgPFxZPV0MxtymDZZmk0yHqo7W9MhAaAvsfEALw_wcB' },
  { name: 'MBA', icon: <img src={mba} alt="MBA" />, url: 'https://www.mymbaglobal.com' },
  { name: 'Pro Skills', icon: <img src={proSkills} alt="Pro Skills" />, url: 'http://nikeproskills.com' },
  { name: 'Solid Core', icon: <img src={solidCore} alt="Solid Core" />, url: 'https://solidcore.co' },
  { name: 'SPB', icon: <img src={spb} alt="SPB" />, url: 'https://basketball.exposureevents.com/organizations/26123/skillspaybills-events' },
  { name: 'Swin City', icon: <img src={swinCity} alt="Swin City" />, url: 'https://swincityleague.com' },
  { name: 'Sudden Exposure', icon: <img src={suddenExposure} alt="Sudden Exposure" />, url: 'https://suddenexposure.net' },
  { name: 'North Crowley', icon: <img src={northCrowley} alt="North Crowley" />, url: 'https://www.crowleyisdtx.org/nchs' },
];

const repeatFrameworks = [...frameworks, ...frameworks, ...frameworks]; // Repeat to ensure continuous loop

const FrameworkCarousel = () => {
  const [velocity, setVelocity] = useState(30); // Increased velocity for faster movement

  useEffect(() => {
    const updateVelocity = () => {
      if (window.innerWidth <= 768) {
        setVelocity(8); // Faster speed for mobile as well
      } else {
        setVelocity(30); // Faster speed for larger screens
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
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 5 }}>
        CLIENTS & PARTNERS
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