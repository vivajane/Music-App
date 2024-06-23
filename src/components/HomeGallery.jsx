import GalleryItem from "./GalleryItem";
import Music from "./MusicPlayer";
import NavBar from "./NavBar";

const HomeGallery = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <section className="h-[5%]">
        <NavBar />
      </section>

      <section className="h-[85%]">
        <GalleryItem />
      </section>

      <section className="h-[10%]">
        <Music />
      </section>
    </div>
  );
};

export default HomeGallery;
