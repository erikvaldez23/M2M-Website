import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin } from "react-icons/fa";
import "./Sub-icons.css"

const SubIcons = () => {
  return (
    <div className="subhero-overlay">
      <a href="https://www.instagram.com/m2mdfw/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/people/Made-2-Move/61573160043411/?mibextid=wwXIfr&rdid=Re8U3lVIjzTpcxEi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16HxT7935J%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://www.tiktok.com/@m2mdfw?_t=ZP-8uzhAgxZkru&_r=1" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTiktok />
      </a>
      <a href="https://www.linkedin.com/company/made-2-move-sports-medicine-physical-therapy/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SubIcons;
