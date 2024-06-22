import GalleryItem from "./GalleryItem";
import Music from "./MusicPlayer";
import NavBar from "./NavBar";

const HomeGallery = () => {
  return (
    <div className="w-[100% overflow-auto">
      <NavBar />
      <GalleryItem />
      <Music />
    </div>
  );
};

export default HomeGallery;
