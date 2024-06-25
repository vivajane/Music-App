import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import GalleryItem from "./GalleryItem";

const NavBar = () => {
  return (
    <div className="flex flex-col justify-center mt-3">
      <section className="flex justify-between h-full bg-yellow-30 overflow-hiddenn px-5">
        <div className="flex gap-3">
          <span>
            <IoIosArrowBack />
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div className="flex gap-2">
          <button>Install App</button>
          <p className="bg-blue-900  grid place-items-center size-7 rounded-full">
            K
          </p>
        </div>
      </section>

      {/* Category selection section */}
      <section className="flex justify-between sm:justify-start text-black mt-3">
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
