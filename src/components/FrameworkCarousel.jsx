import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee-slider';
import './FrameworkCarousel.css';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiMysql, SiKubernetes, SiTypescript, SiJavascript, SiOpenai, SiKotlin, SiSwift, SiApple, SiAndroid } from 'react-icons/si';
import { PiStack } from "react-icons/pi";
import fullThrottle from '/M2M-Website/full-throttle.png';
import hyperIce from '/M2M-Website/hyperice.png';
import mba from '/M2M-Website/mba.png';
import proSkills from '/M2M-Website/pro-skills.png';
import solidCore from '/M2M-Website/solid-core.png';
import spb from '/M2M-Website/spb.png';
import swinCity from '/M2M-Website/swin-city.png';

const frameworksRow1 = [
  { name: 'Full Throttle', icon: <img src={fullThrottle} alt="Full Throttle" style={{ width: '40px', height: '40px' }} />, url: 'https://reactjs.org/' },
  { name: 'HyperIce', icon: <img src={hyperIce} alt="HyperIce" style={{ width: '40px', height: '40px' }} />, url: 'https://nodejs.org/' },
  { name: 'MBA', icon: <img src={mba} alt="MBA" style={{ width: '40px', height: '40px' }} />, url: 'https://www.java.com/' },
  { name: 'Pro Skills', icon: <img src={proSkills} alt="Pro Skills" style={{ width: '40px', height: '40px' }} />, url: 'https://www.python.org/' },
];


const frameworksRow2 = [
  { name: 'Solid Core', icon: <img src={solidCore} alt="Solid Core" style={{ width: '40px', height: '40px' }} />, url: 'https://firebase.google.com/' },
  { name: 'SPB', icon: <img src={spb} alt="SPB" style={{ width: '40px', height: '40px' }} />, url: 'https://aws.amazon.com/' },
  { name: 'Swin City', icon: <img src={swinCity} alt="Swin City" style={{ width: '40px', height: '40px' }} />, url: 'https://openai.com/chatgpt' },
];

const FrameworkCarousel = () => {
  const [velocity, setVelocity] = useState(15); // Default velocity for desktop

  // Adjust velocity based on screen width
  const updateVelocity = () => {
    if (window.innerWidth <= 768) {
      setVelocity(4); // Slower for mobile devices
    } else {
      setVelocity(15); // Default for larger screens
    }
  };

  // Attach and clean up the resize event listener
  useEffect(() => {
    updateVelocity(); // Set initial velocity
    window.addEventListener('resize', updateVelocity);
    return () => {
      window.removeEventListener('resize', updateVelocity);
    };
  }, []);

  const fillRow = (row) => {
    const MIN_ITEMS = 30; // Minimum number of items to fill a row
    const repeatedRow = [...row];
    while (repeatedRow.length < MIN_ITEMS) {
      repeatedRow.push(...row); // Add duplicates of the array
    }
    return repeatedRow;
  };

  const fullRow1 = fillRow(frameworksRow1);
  const fullRow2 = fillRow(frameworksRow2);

  return (
    <div className="framework-carousel">
      <h2 className="carousel-title">WHO WE WORK WITH</h2>
      <p className="carousel-subtitle">
        Description
      </p>
      <div className="marquee-wrapper">
        {/* First Row */}
        <Marquee velocity={velocity} loop={true} direction="ltr">
          {fullRow1.map((framework, index) => (
            <div
              key={`${framework.name}-${index}`}
              className="framework-card"
              onClick={() => window.open(framework.url, '_blank')}
            >
              <div className="framework-icon">{framework.icon}</div>
              <p className="framework-name">{framework.name}</p>
            </div>
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee velocity={velocity} loop={true} direction="rtl">
          {fullRow2.map((framework, index) => (
            <div
              key={`${framework.name}-${index}`}
              className="framework-card"
              onClick={() => window.open(framework.url, '_blank')}
            >
              <div className="framework-icon">{framework.icon}</div>
              <p className="framework-name">{framework.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FrameworkCarousel;
