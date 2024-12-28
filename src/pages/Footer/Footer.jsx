import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const iconSize = 24; 
  
  const socialLinks = [
    { icon: FaGithub, href: "#" },
    { icon: FaLinkedin, href: "#" },
    { icon: FaEnvelope, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaTelegram, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 py-8 ">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-RoverExplore text-white text-xl mb-6 tracking-wide uppercase">FOLLOW US ON</h3>
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <link.icon size={iconSize} />
              </a>
            ))}
          </div>
          <p className="font-ClashDisplay text-white text-sm">
            Copyright&nbsp;&nbsp;<span className="font-bold">FUSION</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;