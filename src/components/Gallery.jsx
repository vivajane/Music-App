import { Routes, Route } from "react-router-dom";
import HomeGallery from "./HomeGallery";
import Album from "./Album";

const Gallery = () => {
  return (
    <div className="bg-blue-500 w-full overflow-auto h-full">
      <Routes>
        <Route path="/" element={<HomeGallery />} />
        <Route path="/album/:id" element={<Album/>} />
        
      </Routes>
    </div>
  );
};

export default Gallery;
