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
import { Typography } from '@mui/material';

const frameworks = [
  { name: 'Full Throttle', icon: <img src={fullThrottle} alt="Full Throttle" /> },
  { name: 'HyperIce', icon: <img src={hyperIce} alt="HyperIce" /> },
  { name: 'MBA', icon: <img src={mba} alt="MBA" /> },
  { name: 'Pro Skills', icon: <img src={proSkills} alt="Pro Skills" /> },
  { name: 'Solid Core', icon: <img src={solidCore} alt="Solid Core" /> },
  { name: 'SPB', icon: <img src={spb} alt="SPB" /> },
  { name: 'Swin City', icon: <img src={swinCity} alt="Swin City" /> },
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
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Our Clients
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