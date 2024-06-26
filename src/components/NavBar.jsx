import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import GalleryItem from "./GalleryItem";

const NavBar = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-3 py-1 w-full bg-blue-500">
      <section className="flex justify-between px-5">
        <div className="flex gap-3 items-center">
          <span>
            <IoIosArrowBack />
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button>Install App</button>
          <p className="bg-blue-900 grid place-items-center size-7 rounded-full">
            K
          </p>
        </div>
      </section>

      {/* Category selection section */}
      <section className="flex justify-between items-center sm:justify-start text-black">
        <button className="px-6 rounded-full bg-white focus:bg-white hover:bg-white/50 outline-none">
          All
        </button>

        <button className="px-6 rounded-full focus:bg-white hover:bg-white/50 outline-none">
          Podcasts
        </button>

        <button className="px-6 rounded-full focus:bg-white hover:bg-white/50 outline-none">
          Music
        </button>
      </section>
    </div>
  );
};

export default NavBar;
