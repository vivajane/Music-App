import GalleryItem from "./GalleryItem";
import Music from "./MusicPlayer";
import NavBar from "./NavBar";

const HomeGallery = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <section className="h-[10%]">
        <NavBar />
      </section>

      <section className="h-[90%]">
        <GalleryItem />
      </section>

      {/* <section className="h-[10%]">
        <Music />
      </section> */}
    </div>
  );
};

export default HomeGallery;
