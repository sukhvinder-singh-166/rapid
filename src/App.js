import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import video from "./assets/videos/hero.webm";
import Services from "./components/Home/Services";
import Potential from "./components/Home/Potential";
import Clients from "./components/Home/Clients";
import Success from "./components/Home/Success";
function App() {
  return (
    <>
      <div className="relative">
        <div className="bg-blue absolute top-0 left-0 w-full md:h-screen h-[70vh] min-h-[600px] z-[1] opacity-90 pointer-events-none"></div>
        <video
          className="absolute top-0 left-0 w-full h-screen object-cover z-[-1]"
          autoPlay
          muted
          loop
          src={video}
        ></video>
        <div className="relative z-10 h-full md:min-h-screen flex flex-col">
          <Header />
          <Hero />
        </div>
        <Services />
        <Clients />
        <Potential />
        <Success />
      </div>
    </>
  );
}

export default App;
