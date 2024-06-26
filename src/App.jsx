import Gallery from "./components/Gallery";
import Music from "./components/MusicPlayer";
import SideBarleft from "./components/SideBar-left";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
      <SideBarleft />
      <Gallery />
      </div>
      <Music />
    </div>
  );
}

export default App;
