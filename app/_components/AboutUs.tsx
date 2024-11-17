import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div id="aboutUs" className="h-screen w-screen overflow-hidden">
      {/* About Us Heading */}
      <div className="h-[50vh] w-full ">
        {/* About Us Title */}
        <div className="h-[20vh] w-full flex items-center justify-center ">
          <div className="h-5/6 w-5/6 flex items-center justify-center">
            <h1 className="text-6xl lg:text-6xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
              Our Vision
            </h1>
          </div>
        </div>
        {/* About Us Text */}
        <div className="w-screen h-[30vh] flex justify-center items-start">
          <div className="w-5/6 h-5/6 flex justify-center items-center ">
            <p className="text-base md:text-xl text-myGreyText text-center tracking-wider ">
              Creating high-performance websites designed for your needs,
              enhancing user engagement, optimizing speed and functionality, and
              driving your business forward with lasting impact.
            </p>
          </div>
        </div>
      </div>
      {/* PHONE */}
      <div className="md:hidden">
        {/* About Us Images for phone*/}
        <div className="h-[40vh] w-full flex justify-center items-center">
          <div className="w-5/6 h-4/6 flex justify-end items-center relative">
            <Image
              src="/images/homepage.png"
              alt="#"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* About Us Button More for phone */}
        <div className="h-[10vh] w-full flex justify-center items-center">
          <div className="h-5/6 w-11/12 flex justify-end items-center">
            <Button
              className="rounded-full border-none text-myGreyText bg-myGreyButtonBg"
              variant="outline"
            >
              more <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
      {/* PC & Tablet */}
      <div className="h-[50vh] w-full sm:hidden md:flex lg:flex ">
        {/* LEFT */}
        <div className="h-full w-1/2 left flex justify-center items-center ">
          <div className="h-[45vh] w-[48vw] left flex justify-center items-center relative">
            <Image
              src="/images/aboutus1.png"
              alt="#"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="h-full w-1/2 left flex items-center justify-center">
          <div className="h-[45vh] w-[45vw] flex flex-col justify-center items-center relative">
            <div className="h-[40vh] w-full flex items-center justify-center relative">
              <Image
                src="/images/aboutus2.png"
                alt="#"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="h-[10vh] w-5/6 left  flex items-end justify-end">
              <Button
                className="rounded-full border-none bg-transparent text-white"
                variant="secondary"
              >
                more <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
