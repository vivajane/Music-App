import Gallery from "./components/Gallery";
import Music from "./components/MusicPlayer";
import SideBarleft from "./components/SideBar-left";

function App() {
  return (
    <div className="flex bg-gray-900 h-dvh text-gray-50">
      {/* <div className="h-[90%] flex"> */}
      <SideBarleft />
      <Gallery />
      {/* </div> */}
      {/* <Music /> */}
    </div>
  );
}

export default App;
