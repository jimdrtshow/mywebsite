import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function Works() {
  return (
    <section
      id="aboutUs"
      className="h-auto w-screen flex items-center justify-center pt-20"
    >
      <div className="h-full w-11/12 ">
        {/* EMPTY  */}
        <div className="w-full h-[25vh] border-b border-gray-600">
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-sans font-semibold leading-snug  text-black">
            Featured
            <span className="inline lg:hidden">
              <br />
            </span>
            Work
          </h1>
        </div>
        {/* TITLE  */}
        <div className="h-auto w-full  lg:flex flex-row">
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-center mt-5 mb-5 ">
            <h1 className="text-3xl md:text-5xl font-sans font-semibold leading-8 text-gray-800">
              Each project we undertake is a unique opportunity to bring
              innovative ideas to life.
            </h1>
          </div>
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-end">
            <p className="text-xl text-gray-600 pt-5 hidden lg:block">
              Projects
            </p>
          </div>
        </div>
        {/* TEXT  */}
        <div className="w-full h-auto flex">
          <div className="w-1/2 h-full "></div>
          <div className="w-1/2 h-full ">
            <div className="w-full h-1/4 p-5">
              <Image src="/images/about.jpg" alt="#" width={500} height={500} />
            </div>
            <div className="w-full h-1/4 p-5">
              <Image src="/images/about.jpg" alt="#" width={500} height={500} />
            </div>
            <div className="w-full h-1/4 p-5">
              <Image src="/images/about.jpg" alt="#" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
