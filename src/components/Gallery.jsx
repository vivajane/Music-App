import { Routes, Route } from "react-router-dom";
import HomeGallery from "./HomeGallery";
import Album from "./Album";
import Music from "./MusicPlayer";

const Gallery = () => {
  return (
    <div className="flex flex-col bg-blue-500 w-full overflow-auto h-full">
      <section className="h-[90%]">
        <Routes>
          <Route path="/" element={<HomeGallery />} />
          <Route path="/album/:id" element={<Album />} />
        </Routes>
      </section>

      <section className="h-[10%]">
        <Music />
      </section>
    </div>
  );
};

export default Gallery;
