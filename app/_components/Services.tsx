import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="aboutUs"
      className="h-auto w-screen flex items-center justify-center pt-20"
    >
      <div className="h-full w-11/12 ">
        {/* EMPTY  */}
        <div className="w-full h-[1vh] border-b border-gray-600"></div>
        {/* TITLE  */}
        <div className="h-auto w-full  lg:flex flex-row">
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-center mt-5 mb-5 ">
            <h1 className="text-3xl md:text-5xl font-sans font-semibold leading-8 text-gray-800">
              Where creativity and strategy come together to create digital
              solutions that drive success. We deliver innovative and cutting
              edge digital experiences that make a lasting impact.
            </h1>
          </div>
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-end">
            <p className="text-xl text-gray-600 pt-5 hidden lg:block">
              Services
            </p>
          </div>
        </div>
        {/* INNOVATION */}
        <div className="h-auto w-full  lg:flex flex-row ">
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-start  mt-20  "></div>
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-start mt-20 mb-20 lg:m-20 ">
            <h1 className="text-5xl md:text-6xl font-sans font-semibold leading-5 text-black">
              <span className="text-gray-400 text-sm font-bold pr-3 font-sans  ">
                01
              </span>
              Strategy
            </h1>
          </div>
        </div>
        {/* IMPACT */}
        <div className="h-auto w-full  lg:flex flex-row ">
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-start  mt-20  "></div>
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-start mt-20 mb-20 lg:m-20  ">
            <h1 className="text-5xl md:text-6xl font-sans font-semibold leading-5 text-black">
              <span className="text-gray-400 text-sm font-bold pr-3 font-sans  ">
                02
              </span>
              Digital Design
            </h1>
          </div>
        </div>
        {/* IMPACT */}
        <div className="h-auto w-full  lg:flex flex-row ">
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-start  mt-20  "></div>
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-start mt-20 mb-20 lg:m-20  ">
            <h1 className="text-5xl md:text-6xl font-sans font-semibold leading-5 text-black">
              <span className="text-gray-400 text-sm font-bold pr-3 font-sans  ">
                03
              </span>
              Development{" "}
            </h1>
          </div>
        </div>

        {/* EMPTY  */}
        <div className="w-full h-[10vh]"></div>
        {/* TITLE  */}
        <div className="h-auto w-full  lg:flex flex-row">
          <div className="h-[20h] w-full lg:w-2/3  flex items-start justify-start mt-5 mb-5  ">
            <Button
              className=" w-auto h-[50px] bg-transparent text-black flex items-center justify-between -tracking-tight text-xl  overflow-hidden"
              variant="secondary"
            >
              <FaArrowRight className="text-black -rotate-45" />
              Read more about Services
            </Button>
          </div>
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-end">
            <p className="text-xl text-gray-600 pt-5 hidden lg:block">
              Stil curious?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
