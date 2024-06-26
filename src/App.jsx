import Gallery from "./components/Gallery";
import Music from "./components/MusicPlayer";
import SideBarleft from "./components/SideBar-left";

function App() {
  return (
    <div className="flex h-screen bg-black">
      {/* <div className="h-[90%] flex"> */}
      <section className="w-2/12 bg-green-300">
        <SideBarleft />
      </section>

      <section className="h-full w-10/12 bg-red-400">
        <Gallery />
      </section>
      {/* </div> */}
      {/* <Music /> */}
    </div>
  );
}

export default App;
