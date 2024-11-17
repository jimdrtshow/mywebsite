// pages/index.tsx
// pages/index.tsx
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";

export default function ScrollingBanner() {
  return (
    <div className="w-screen h-[40vh] flex justify-center items-center overflow-y-hidden ">
      <div className="flex flex-raw justify-around items-center">
        <div className="h-[20vh] w-[20vw] flex items-center justify-center">
          <RiNextjsLine className="text-white text-3xl " />
        </div>
        <div className="h-[20vh] w-[20vw] flex items-center justify-center">
          <FaReact className="text-white text-3xl " />
        </div>
        <div className="h-[20vh] w-[20vw] flex items-center justify-center">
          <RiTailwindCssFill className="text-white text-3xl " />
        </div>
        <div className="h-[20vh] w-[20vw] flex items-center justify-center">
          <SiTypescript className="text-white text-3xl " />
        </div>
        <div className="h-[20vh] w-[20vw] flex items-center justify-center">
          <SiVisualstudiocode className="text-white text-3xl " />
        </div>
      </div>
    </div>
  );
}
