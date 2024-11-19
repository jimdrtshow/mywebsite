// pages/index.tsx
// pages/index.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Heading() {
  return (
    <section id="homePage" className="w-screen h-screen overflow-hidden  ">
      {/* SPACE FOR NAV */}
      <div className="h-[10vh] w-screen"></div>

      {/* HOMEPAGE CONTENT */}
      <div className="w-full h-[40vh]   ">
        {/* Homepage Content 1/2 Heading*/}
        <div className="w-full h-[15vh] flex justify-center items-end  ">
          <div className="w-4/5 h-4/5 flex justify-start items-center  ">
            <h1 className="text-4xl lg:text-6xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
              McFly®
            </h1>
          </div>
        </div>
        {/* Homepage Content 2/2 Paragraph*/}
        <div className="w-full h-[25vh] flex justify-center items-center">
          <div className="w-4/5 h-4/5 flex justify-start items-center">
            <h2 className="text-base md:text-xl   tracking-wider ">
              Création de sites web haute performance, sur-mesure, sans CMS,
              pour PME et professions libérales. Des sites fluides, optimisés
              pour un référencement maximal et une expérience client
              exceptionnelle.
            </h2>
          </div>
        </div>
      </div>
      {/* HOMPEPAGE BUTTONS */}
      <div className="w-screen h-[5vh] flex items-start justify-center">
        <div className="w-4/5 md:w-2/5 h-[10vh] flex flex-row items-center justify-center">
          {/* Contact Us Button */}
          <div className="w-1/2 h-[5vh] flex items-center justify-center ">
            <Button className=" rounded-full border-none " variant="outline">
              Our plans
            </Button>
          </div>
          {/* See our plans Button */}
          <div className="w-1/2 h-[5vh] flex items-center justify-center">
            <Button className=" rounded-full border-none " variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </div>
      <div className="w-screen h-[50vh] flex items-center justify-center">
        <div className="w-4/5 h-5/5 flex items-center justify-center">
          <Image
            src="/images/homepage.png"
            alt=""
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
