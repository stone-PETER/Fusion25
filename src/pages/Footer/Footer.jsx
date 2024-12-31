import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const iconSize = 24;

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/ieeemace/mycompany/" },
    { icon: FaXTwitter, href: "https://twitter.com/ieeemace" },
    { icon: FaInstagram, href: "https://www.instagram.com/ieeemace/" },
    { icon: FaFacebook, href: "https://www.facebook.com/ieeemace/" },
  ];

  const contacts = [
    { name: "Naveen Prasad", number: "+919188313552" },
    { name: "Ameena R", number: "+918138997096" },
  ];

  return (
    <footer className="relative w-full py-8 bg-black overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md bg-white/10">
        <div className="gradient-circle absolute top-10 left-20"></div>
        <div className="gradient-circle absolute top-1/3 right-10"></div>
        <div className="gradient-circle absolute bottom-10 left-1/3"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Connect Us Section */}
          <h3 className="font-RoverExplore text-white text-xl mb-2 tracking-wide uppercase">
            CONNECT US
          </h3>
          <div className="flex flex-col items-center space-y-2 mb-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={`https://wa.me/${contact.number.replace("+", "")}`}
                className="flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={iconSize} />
                <span className="font-ClashDisplay text-sm font-bold">{`${contact.name}`}</span>
              </a>
            ))}
          </div>

          {/* Follow Us Section */}
          <h3 className="font-RoverExplore text-white text-xl mb-6 tracking-wide uppercase">
            FOLLOW US ON
          </h3>
          
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={iconSize} />
              </a>
            ))}
          </div>
          
          <p className="font-ClashDisplay text-white text-sm">
            2025 &copy;&nbsp;<span className="font-bold">FUSION</span>. All Rights Reserved
            <br /><br />
            Developed By FUSION Web Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;