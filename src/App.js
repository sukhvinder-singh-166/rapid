import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import video from "./assets/videos/hero.webm";
function App() {
  return (
    <>
      <div className="relative">
        <div className="bg-blue absolute top-0 left-0 w-full h-full z-[1] opacity-90"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
          src={video}
        ></video>
        <div className="relative z-10 h-full min-h-screen flex flex-col">
        <Header />
        <Hero /></div>
      </div>
    </>
  );
}

export default App;
