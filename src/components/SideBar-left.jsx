// import { allAssets } from "../apiRequest/ApiRequest";
import { AiTwotoneHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { MdLibraryMusic } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { FaRegPauseCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
<FaRegPauseCircle />

const SideBarleft = () => {
  return (
    <div className=" w-1/4 h-[500px] text-xs sm:w-1/3 md:w-1/2 md:text-base xl:h-full">
      <div className="mb-1 h-[80px] bg-blue-900 p-2 ">
        <div>
          <NavLink to={"/"}>
          <div className="flex items-center gap-3">
          <span>
            <AiTwotoneHome />
          </span>
          <div className="py-0.5">
            <h3>Home</h3>
          </div>
        </div>
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <span>
            <IoSearchOutline />
          </span>
          <div>
            <h3 className="py-0.5">Search</h3>
          </div>
        </div>
      </div>
      <div className=" bg-blue-900 h-[84%]">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <div>
              <span>
                <MdLibraryMusic />
              </span>
            </div>
            <div>
              <h3 className="hidden sm:block">Library</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span>
              <GrLinkNext />
            </span>
            <span>
              <IoMdAdd />
            </span>
          </div>
        </div>
        <div className="bg-blue-400 py-2 mt:3 sm:mt-6 h-[100px] p-2 mx-1.5 rounded">
          <p>Create a playlist</p>
         <button className="bg-gray-300 py-2 px-2.5 sm:py-2 sm:px-2.5 mt-2 rounded-xl hover:bg-black text-[8px]">CREATE</button>
        </div>
        <div className="bg-blue-400 py-2 mt-3 sm:mt-6  sm:h-[100px] p-2 mx-1.5 rounded">
          <p>Find some podcasts to follow</p>
         <button className="bg-gray-300 text-[8px] py-2 px-2.5 mt-2 rounded-xl hover:bg-black">Search Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default SideBarleft;
