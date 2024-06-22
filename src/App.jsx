import Gallery from "./components/Gallery"
import Music from "./components/MusicPlayer"
import SideBarleft from "./components/SideBar-left"


function App() {
  return (
    <div className="bg-gray-900 h-screen text-gray-50">
      <div className="h-[90%] flex">
      <SideBarleft/>
      <Gallery/>
      </div>
      <Music/>
      
    </div>
   
  )
}

export default App
