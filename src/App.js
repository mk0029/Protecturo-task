import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./pk.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TakeControl from "./components/TakeControl";
import OurStandards from "./components/OurStandards";
import OurProducts from "./components/OurProducts";
import InstantConnectivity from "./components/InstantConnectivity";
import Game__logo2 from "./assets/img/svg/logoGame.svg";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="min_vh_100 d-flex flex-column position-relative z_index0">
          <img
            src={Game__logo2}
            alt=""
            className=" position-absolute top-0 start-0"
          ></img>
          <div className=" z_index1 position-relative">
            {" "}
            <NavBar />
          </div>
          <div className=" d-flex flex-grow-1 flex-column position-relative z_index1">
            {/* <Hero /> */}
            {/* <TakeControl /> */}
            {/* <OurStandards /> */}
            {/* <InstantConnectivity /> */}
            {/* <OurProducts /> */}
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
