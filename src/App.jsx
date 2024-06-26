import Gallery from "./components/Gallery";
import Music from "./components/MusicPlayer";
import SideBarleft from "./components/SideBar-left";

function App() {
  return (
    <div className="flex h-screen bg-black">
      <section className="w-[25%] sm:w-2/12 bg-green-300">
        <SideBarleft />
      </section>

      <section className="h-full w-[75%] sm:w-10/12 bg-pink-400">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
