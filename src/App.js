import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "animate.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import OurStandards from "./components/OurStandards";
import OurProducts from "./components/OurProducts";
import InstantConnectivity from "./components/InstantConnectivity";
import Game__logo2 from "./assets/img/svg/logoGame.svg";
import TakeControl from "./components/TakeControl";
import Features from "./components/Features";
import GloableLot from "./components/GloableLot";
import HowItWorks from "./components/HowItWorks";
import WhereYouGO from "./components/WhereYouGO";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Protecutro from "./components/Protecutro";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="min_vh_100 d-flex flex-column position-relative z_index0">
          <img
            src={Game__logo2}
            alt="Err"
            className="position-absolute top-0 start-0"></img>
          <div className="z_index4 position-relative">
            <NavBar />
          </div>
          <div className="d-flex flex-grow-1 flex-column position-relative z_index1">
            <Hero />
            <TakeControl />
            <OurStandards />
            <InstantConnectivity />
            <OurProducts />
            <Protecutro />
            <HowItWorks />
            <Features />
            <WhereYouGO />
            <Faq />
            <GloableLot />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
