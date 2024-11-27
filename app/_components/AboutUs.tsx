import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="h-auto w-screen flex items-center justify-center"
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
              Welcome
            </p>
          </div>
        </div>
        {/* INNOVATION */}
        <div className="h-auto w-full  lg:flex flex-row border-b border-gray-400">
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-start  mt-20  ">
            <p className="text-2xl md:text-4xl font-sans font-semibold leading-5 text-gray-800 pt-5 ">
              Innovatation
            </p>
          </div>
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-center mt-20 mb-20 lg:m-20 ">
            <h1 className="text-xl font-sans font-semibold leading-5 text-gray-600">
              <span className=" text-gray-800 font-bold text-2xl">
                Great Experiences Start with Bold Ideas
              </span>
              <br /> <br /> Our team blends creativity with technical expertise
              to deliver innovative solutions that help your brand stand out.
              From strategy to execution, we create digital products that not
              only meet your goals but exceed expectations, driving growth and
              engagement.
            </h1>
          </div>
        </div>
        {/* IMPACT */}
        <div className="h-auto w-full  lg:flex flex-row ">
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-start  mt-20  ">
            <p className="text-2xl md:text-4xl font-sans font-semibold leading-5 text-gray-800 pt-5 ">
              Impact
            </p>
          </div>
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-center mt-20 mb-20 lg:m-20  ">
            <h1 className="text-xl font-sans font-semibold leading-5 text-gray-600">
              <span className=" text-gray-800 font-bold text-2xl">
                Building for the Future, Not Just Today
              </span>
              <br /> <br /> We focus on delivering results that have a lasting
              impact, creating digital solutions that grow with your business.
              Whether it's a new website, a rebranding effort, or a digital
              campaign, we ensure that our work continues to add value long
              after launch, helping your brand stay relevant and competitive.
            </h1>
          </div>
        </div>

        {/* IMAGES */}
        <div className="h-screen lg:h-[50vh] w-full  flex items-center justify-center pt-5  ">
          <div className="h-full w-11/12 block lg:flex justify-between">
            <div className=" h-1/3 lg:h-full w-full lg:w-4/12 relative top-10 lg:top-0">
              <Image
                src="/images/aboutus1.webp"
                alt="#"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className=" h-1/3 lg:h-full w-full lg:w-6/12 relative top-20 lg:top-0">
              <Image
                src="/images/aboutus2.webp"
                alt="#"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* EMPTY  */}
        <div className="w-full h-[10vh]"></div>
        {/* TITLE  */}
        <div className="h-auto w-full  lg:flex flex-row">
          <div className="h-[20h] w-full lg:w-2/3  flex items-start justify-start mt-5 mb-5  ">
            <Button
              className=" w-auto h-[50px] bg-transparent text-black flex items-center justify-between -tracking-tight text-3xl  overflow-hidden"
              variant="secondary"
            >
              <FaArrowRight className="text-black -rotate-45" />
              Read more about us
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
