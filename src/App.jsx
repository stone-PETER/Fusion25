import "./index.css";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About.jsx";
import Session from "./pages/Session/Session";
import Footer from "./pages/Footer/Footer.jsx";
import Tickets from "./pages/Tickets/Tickets.jsx";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Session />
      <Tickets />
      <Footer />
    </div>
  );
};
export default App;
