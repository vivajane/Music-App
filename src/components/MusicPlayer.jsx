import { RxTrackPrevious } from "react-icons/rx";
<RxTrackPrevious />;
import { CgPlayTrackNextO } from "react-icons/cg";
import logo from "../images/passport.png";
import { ImPrevious } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import { MdOutlineLoop } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import { GiSpeakerOff } from "react-icons/gi";
<GiSpeakerOff />;
import { FaVolumeHigh } from "react-icons/fa6";
import { MdOutlineZoomIn } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";
import { FaVolumeMute } from "react-icons/fa";
import { Albums } from "../assets/asset";

const Music = () => {
  return (
    <div className="h-full h-  w-full bg-gray-900 flex items-center justify-between px-5 text-gray-50">
      {/* left section */}
      <section className="flex items-center gap-4">
        <img
          src={logo}
          alt="song"
          className=" h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
        />

        <div className="text-[8px] md:text-sm">
          <p className=" text-center">{Albums[0].name}</p>
          <p className="">{Albums[0].desc.slice(0, 10)}</p>
        </div>
      </section>

      {/* middle section */}
      <section className="flex flex-col gap-1 text-[6px] sm:text-xs">
        {/* controls icons sub-section */}
        <div className="flex justify-center gap-3 pl-1">
          <span>
            <FaVolumeMute />
          </span>
          <span>
            <ImPrevious />
          </span>
          <span>
            <FaPlay />
          </span>
          <span>
            <CgPlayTrackNextO />
          </span>
          <span>
            <MdOutlineLoop />
          </span>
        </div>

        {/* progress bar sub-section*/}
        <div className="flex justify-center items-center gap-3">
          <span>0:00</span>
          <div className="w-[55vw] max-w-[500px] bg-grey-300 rounded-full cursor-pointer">
            <hr className="bg-green-500 rounded-full h-0.5" />
          </div>
          <span>2:02</span>
        </div>
      </section>

      {/* right section */}
      <section className="hidden lg:flex items-center opacity-65 gap-1">
        <span>
          <FaPlay />
        </span>
        <span>
          <FaMicrophone />
        </span>
        <span>
          <GiSpeaker />
        </span>
        <span>
          <FaVolumeHigh />
        </span>

        <div className="w-20 bg-slate-50"></div>
        <span>
          <CgMiniPlayer />
        </span>
        <span>
          <MdOutlineZoomIn />
        </span>
      </section>
    </div>
  );
};

export default Music;
