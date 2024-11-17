// pages/index.tsx
// pages/index.tsx

import { Button } from "@/components/ui/button";

import { FaArrowRight } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { ImRenren } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import Link from "next/link";

export default function Heading() {
  return (
    <div id="homePage" className="w-screen h-screen overflow-hidden ">
      {/* NAVBAR */}
      <div className="w-full h-[10vh] flex items-center justify-center fixed z-10">
        <div className="w-[60vw] h-4/6 flex items-center justify-between rounded-3xl bg-myGreyButtonBg ">
          <div className="w-[20%] h-full flex items-center justify-center  md:bg-white bg-transparent rounded-3xl">
            <Link href="#homePage" scroll={true}>
              <ImRenren className="text-black text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#aboutUs" scroll={true}>
              <p className="hidden md:block">About</p>
              <RxAvatar className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#services" scroll={true}>
              <p className="hidden md:block">Price</p>
              <MdOutlineAttachMoney className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#projects" scroll={true}>
              <p className="hidden md:block">Projects</p>
              <FaBook className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#footer" scroll={true}>
              <p className="hidden md:block">Contact</p>
              <CiPhone className="md:hidden text-white text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* HOMEPAGE CONTENT */}
      <div className="w-full h-[70vh]  ">
        {/* Homepage Content 1/3 Quote Button*/}
        <div className="w-full h-[25vh] flex justify-center items-end ">
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
            <h1 className="text-4xl lg:text-6xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
              Web solutions built to elevate.
            </h1>
          </div>
        </div>
        {/* Homepage Content 3/3 Paragraph*/}
        <div className="w-full h-[25vh] flex justify-center items-start">
          <div className="w-4/5 h-4/5 flex justify-center items-center">
            <p className="text-base md:text-xl text-myGreyText text-center tracking-wider ">
              Crafting high-performance websites tailored to your needs,
              enhancing user experience, optimizing speed, and driving your
              business forward.
            </p>
          </div>
        </div>
      </div>

      {/* HOMPEPAGE BUTTONS */}
      <div className="w-full h-[30vh] flex items-start justify-center">
        <div className="w-4/5 h-[20vh]">
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
