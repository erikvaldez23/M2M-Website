import React, { useState, useEffect } from 'react';
import Marquee from 'react-marquee-slider';
import './FrameworkCarousel.css';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiMysql, SiKubernetes, SiTypescript, SiJavascript, SiOpenai, SiKotlin, SiSwift, SiApple, SiAndroid } from 'react-icons/si';
import { PiStack } from "react-icons/pi";

const frameworksRow1 = [
  { name: 'React', icon: <FaReact />, url: 'https://reactjs.org/' },
  { name: 'Node.js', icon: <FaNodeJs />, url: 'https://nodejs.org/' },
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Python', icon: <FaPython />, url: 'https://www.python.org/' },
  { name: 'Firebase', icon: <SiFirebase />, url: 'https://firebase.google.com/' },
  { name: 'AWS', icon: <FaAws />, url: 'https://aws.amazon.com/' },
  { name: 'ChatGPT', icon: <SiOpenai />, url: 'https://openai.com/chatgpt' }, // New Entry
  { name: 'AI', icon: <SiOpenai />, url: 'https://openai.com' }, // New Entry
  { name: 'Kotlin', icon: <SiKotlin />, url: 'https://kotlinlang.org' },
  { name: 'SwiftUI', icon: <SiSwift />, url: 'https://www.swift.org/getting-started/swiftui/'},
  { name: 'Swift', icon: <SiSwift />, url: 'https://www.swift.org'},
  { name: 'Combine', icon: <PiStack />, url: 'https://developer.apple.com/documentation/combine' },
];

const frameworksRow2 = [
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
  { name: 'MySQL', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'Docker', icon: <FaDocker />, url: 'https://www.docker.com/' },
  { name: 'Kubernetes', icon: <SiKubernetes />, url: 'https://kubernetes.io/' },
  { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Git', icon: <FaGitAlt />, url: 'https://git-scm.com/' },
  { name: 'iOS', icon: <SiApple />, url: 'https://www.apple.com/ios/ios-18/' },
  { name: 'Android', icon: <SiAndroid />, url: 'https://www.android.com' },
  { name: 'Jetpack Compose', icon: <PiStack />, url: 'https://developer.android.com/compose' },
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
        We consider ourselves to be technology agnostic, choosing the right tool for the job.
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
