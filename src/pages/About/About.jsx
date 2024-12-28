import Heading from "../../components/Heading"

const About = () => {
  return (
    <div className="bg-black text-white p-32 text-center  flex flex-col justify-center">
      <Heading heading="about fusion"/>

      <p className="my-8 text-base md:text-lg leading-relaxed font-ClashDisplay text-center max-w-3xl mx-auto mb-8">
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
        className="mt-8 w-64 h-auto mx-auto block"
      />
    </div>
  );
};

export default About;
