import React from 'react';

const About = () => {
  return (
    <div className="about-bg text-white p-8 text-center  flex flex-col justify-center">
      <h2 className="font-RoverExplore text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase mt -8 mb-6">
        ABOUT FUSION
      </h2>

      <p className="mt-10 text-base leading-relaxed font-ClashDisplay text-center max-w-3xl mx-auto mb-8">
        "FUSION 2025 is an exciting three-day event hosted by IEEE SPS SBC MACE in collaboration with the IEEE SPS Kerala Chapter, taking place on February 21, 22, and 23, 2025. Designed to inspire and engage
        students, FUSION is a vibrant mix of
        technical sessions, hands-on workshops,
        a thrilling hackathon, entertaining
        games, and cultural programs. It's
        the perfect platform to learn, innovate,
        and connect with like-minded peers."
      </p>

      <img
        src="src/assets/logo.png"
        alt="Fusion Logo"
        className="mt-8 w-[250px] h-auto mx-auto block"
      />
    </div>
  );
};

export default About;
