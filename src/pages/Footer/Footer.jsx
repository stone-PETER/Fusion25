import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const iconSize = 24;

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/ieeemace/mycompany/" },
    { icon: FaTwitter, href: "https://twitter.com/ieeemace" },
    { icon: FaInstagram, href: "https://www.instagram.com/ieeemace/" },
    { icon: FaFacebook, href: "https://www.facebook.com/ieeemace/" },
  ];

  const contacts = [
    { name: "Naveen", number: "+919188313552" },
    { name: "Ameena", number: "+918138997096" },
  ];

  return (
    <footer className="relative w-full py-8">
      {/* Asymmetric dark gradient background */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 8% 25%, rgb(52, 2, 63) 0%, transparent 35%),
                         radial-gradient(circle at 25% 15%, rgba(155, 8, 172, 0.9) 0%, transparent 45%),
                         radial-gradient(ellipse at 15% 45%, rgb(1, 0, 1) 0%, transparent 40%),
                         radial-gradient(circle at 20% 65%, rgb(155, 6, 182) 0%, transparent 35%),
                         radial-gradient(ellipse at 12% 85%, rgba(181, 8, 197, 0.59) 0%, transparent 45%),
                         radial-gradient(circle at 35% 35%, rgba(127, 1, 134, 0.78) 0%, transparent 30%),
                         radial-gradient(ellipse at 45% 65%, rgba(142, 3, 163, 0.55) 0%, transparent 35%),
                         radial-gradient(circle at 75% 45%, rgb(97, 0, 106) 0%, transparent 30%),
                         radial-gradient(ellipse at 85% 75%, rgb(44, 1, 48) 0%, transparent 40%)`,
          }}
        />
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
                href={`https://wa.me/${contact.number.replace(98787675645342432, "")}`}
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
