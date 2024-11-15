// pages/index.tsx
// pages/index.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Prompt } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";

export default function Heading() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-myGreyWebsiteBg">
      {/* NAVBAR */}
      <div className="w-full h-[10vh]"></div>

      {/* HOMEPAGE CONTENT */}
      <div className="w-full h-[60vh]  ">
        {/* Homepage Content 1/3 Quote Button*/}
        <div className="w-full h-[15vh] flex justify-center items-end ">
          <Button
            className="rounded-full border-none text-myGreyText bg-myGreyButtonBg"
            variant="outline"
          >
            Get a quote <FaArrowRight />
          </Button>
        </div>
        {/* Homepage Content 2/3 Heading*/}
        <div className="w-full h-[20vh] flex justify-center items-end  ">
          <div className="w-4/5 h-4/5 flex justify-center items-end  ">
            <h1 className="text-4xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
              Web solutions built to elevate.
            </h1>
          </div>
        </div>
        {/* Homepage Content 3/3 Paragraph*/}
        <div className="w-full h-[25vh] flex justify-center items-start">
          <div className="w-4/5 h-4/5 flex justify-center items-center">
            <p className="text-base md:text-xl text-myGreyText text-center">
              Crafting high-performance websites tailored to your needs,
              enhancing user experience, optimizing speed, and driving your
              business forward.
            </p>
          </div>
        </div>
      </div>

      {/* HOMPEPAGE BUTTONS */}
      <div className="w-full h-[30vh] flex items-center justify-center">
        <div className="w-4/5 h-h-[20vh]">
          {/* Contact Us Button */}
          <div className="w-full h-[10vh] flex items-center justify-center ">
            <Button
              className="rounded-full border-none text-black"
              variant="secondary"
            >
              Contact us
              <CiPhone />
            </Button>
          </div>
          {/* See our plans Button */}
          <div className="w-full h-[10vh] flex items-center justify-center">
            <Button
              className=" rounded-full border-none bg-myGreyButtonBg"
              variant="outline"
            >
              View Plans
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
