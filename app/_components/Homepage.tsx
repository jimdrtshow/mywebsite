import MyBadgeComponent from "@/components/ui/myBadgeComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Homepage() {
  return (
    <section
      id="homePage"
      className="w-screen h-screen overflow-hidden relative bottom-[20vh] -z-10 flex items-center justify-center    "
    >
      {/* BACKGROUND */}
      <Image
        src="/images/homepage.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />

      <div className="h-4/6 w-11/12 flex flex-col lg:flex-row items-center justify-center  relative top-[10vh] z-10">
        <div className="h-1/2 lg:h-full w-full lg:w-1/2  flex flex-col items-center justify-center">
          <div className="h-full md:h-3/4 w-full flex items-start lg:items-end justify-start">
            <p className="text-2xl md:text-4xl lg:text-6xl font-sans font-semibold leading-5">
              An ambitious digital <br /> agency from London
            </p>
          </div>
          <div className="h-0 md:h-1/4 w-full  hidden lg:flex items-center justify-start ">
            <Button
              className=" w-[200px] h-[50px] bg-white text-black hidden lg:flex items-center justify-between -tracking-tight "
              variant="secondary"
            >
              <FaArrowRight className="text-black -rotate-45" />
              See our work
            </Button>
          </div>
        </div>
        <div className="h-1/2 lg:h-full w-full lg:w-1/2  flex items-end justify-center">
          <Image src="/logos/firs.svg" alt="#" width={800} height={800} />
        </div>
      </div>
    </section>
  );
}
