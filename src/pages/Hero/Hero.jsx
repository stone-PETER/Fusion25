import Navbar from '../../components/Navbar';
import RegBtn from '../../components/RegBtn';

const Hero = () => {
  return (
    <div className="relative w-full h-screen md:h-[900px] bg-black overflow-hidden">

      <img
        src="/Images/hero-bg-mobile.png"
        alt="Mobile Background"
        className="absolute w-full h-full object-cover object-center block md:hidden"
      />

      <img
        src="/Images/hero-bg.png"
        alt="Default Background"
        className="absolute w-full h-full object-cover object-center hidden md:block"
      />

      <div className="absolute">
        <Navbar />    
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 text-center px-4 md:px-0">
        <img
          src="/Images/hero-logo.png"
          alt="Fusion Logo"
          className="w-96 md:w-160 mx-auto"
        />
        <p className="text-white text-xl sm:text-3xl md:text-5xl tracking-widest mt-4 md:mt-6 font-ClashDisplay font-thin whitespace-nowrap">
          <span className="mx-2 sm:mx-4 md:mx-6">D E C E M B E R</span>
          <span className="mx-2 sm:mx-4 md:mx-6">2 4</span>
          <span className="mx-2 sm:mx-4 md:mx-6">|</span>
          <span className="mx-2 sm:mx-4 md:mx-6">2 5</span>
        </p>
      </div>

      <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 mt-16 px-4 sm:px-8 md:px-0">
        <RegBtn />

      </div>
    </div>
  );
};

export default Hero;