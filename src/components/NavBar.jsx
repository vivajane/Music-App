
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// import GalleryItem from "./GalleryItem";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="flex gap-3">
          <span>
            <IoIosArrowBack />
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="flex gap-2">
          <div>
            <button>Install App</button>
          </div>
          <p className="bg-blue-900 px-2 rounded-full">
            <span>
              <strong>K</strong>
            </span>
          </p>
        </div>
      </div>
      <div className="flex px-4 gap-8 text-black">
        <p className="bg-white px-6 rounded-full">All</p>
        <p>Podcasts</p>
        <p>Music</p>
      </div>
     
    </div>
  );
};

export default NavBar;
