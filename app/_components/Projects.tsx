import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="h-auto w-screen">
      {/* PROJECTS TITLE */}
      <div className="h-[20vh] w-full flex items-center justify-center ">
        <div className="h-5/6 w-5/6 flex items-center justify-center">
          <h1 className="text-6xl lg:text-6xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
            Projects
          </h1>
        </div>
      </div>
      {/* PROJECTS DESCRIPTION */}
      <div className="w-screen h-[40vh] flex justify-center items-start">
        <div className="w-5/6 h-5/6 flex justify-center items-center ">
          <p className="text-base md:text-xl text-myGreyText tracking-wider ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus consequatur aut incidunt voluptas praesentium in
            aperiam nam delectus atque, nisi ipsum, provident voluptates iusto
            itaque magni dolore. Error ducimus nostrum commodi libero neque
            officiis quae voluptas dolores rerum modi fuga voluptatum inventore
            aperiam at eaque fugiat, dolorum nihil tempore porro?
          </p>
        </div>
        {/* IMAGES ANIMATION */}
      </div>
      <div className="md:flex justify-around items-center">
        <div className="h-[40vh] w-full md:w-1/3  flex items-center justify-center">
          <div className="h-5/6 w-5/6 flex items-center justify-center relative">
            <Image
              src="/images/project1.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="h-[40vh] w-full md:w-1/3  flex items-center justify-center">
          <div className="h-5/6 w-5/6 flex items-center justify-center relative">
            <Image
              src="/images/project3.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="h-[40vh] w-full md:w-1/3  flex items-center justify-center">
          <div className="h-5/6 w-5/6 flex items-center justify-center relative">
            <Image
              src="/images/project4.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="h-[10vh] w-full flex items-center justify-center">
        <div className="w-full h-[10vh] flex items-center justify-center ">
          <Button
            className="rounded-full border-none text-black"
            variant="secondary"
          >
            View all projects
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
