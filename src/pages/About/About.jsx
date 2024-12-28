import Heading from "../../components/Heading"
import './../../index.css'

const About = () => {
  return (
    <section id="about">
    <div className="bg-black text-white p-8 md:p-32 text-center flex flex-col justify-center relative overflow-hidden">
      <div className="gradient-circle absolute top-10 left-20"></div>
      <div className="gradient-circle absolute top-1/4 right-10"></div>
      <div className="gradient-circle absolute bottom-10 left-1/3"></div>

      <Heading heading="about fusion"/>

      <p className="about my-8 text-base md:text-lg leading-relaxed font-ClashDisplay text-center max-w-xs md:max-w-3xl mx-auto mb-8 px-6 md:px-0">
        FUSION 2025 is an exciting three-day event hosted by IEEE SPS SBC MACE in 
        collaboration with the IEEE SPS Kerala Chapter, taking place on February 21, 
        22, and 23, 2025. Designed to inspire and engage students, FUSION is a 
        vibrant mix of technical sessions, hands-on workshops, a thrilling hackathon, 
        entertaining games, and cultural programs. It's the perfect platform to learn, 
        innovate, and connect with like-minded peers.
      </p>

      <img
        src="/Images/logo.png"
        alt="Fusion Logo"
        className="mt-8 w-64 h-auto mx-auto block"
      />
    </div>
    </section>
  );
};

export default About;