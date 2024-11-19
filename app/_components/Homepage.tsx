import MyBadgeComponent from "@/components/ui/myBadgeComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Homepage() {
  return (
    <section id="homePage" className="w-screen h-auto overflow-hidden    ">
      {/* BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        src="/videos/homepage.mp4" // Chemin vers ta vidéo dans le dossier public
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* BADGES */}
      <div className="w-screen h-[30vh] flex items-center justify-center ">
        <div className="w-screen h-4/5 flex items-end justify-center">
          {/* MY BADGE COMPONENT  */}
          <MyBadgeComponent />
        </div>
      </div>
      {/* TITLE */}
      <div className="w-screen h-[15vh] flex items-center justify-center ">
        <div className="w-4/5 h-4/5 flex items-center justify-center">
          <h1 className="text-7xl lg:text-9xl md:text-5xl text-center  font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
            McFly
          </h1>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="w-screen h-[25vh] flex items-start justify-center ">
        <div className="w-4/5 md:w-3/5 md: h-4/5 flex items-center justify-center">
          <h2 className="text-center text-white md:text-xl   tracking-wider ">
            Création de sites web haute performance, sur-mesure, sans CMS, pour
            PME et professions libérales. Des sites fluides, optimisés pour un
            référencement maximal et une expérience client exceptionnelle.
          </h2>
        </div>
      </div>
      {/* PLANS BUTTON */}
      <div className="w-screen md:h-[10vh] h-[10vh]  flex items-center justify-center ">
        <Button
          className=" rounded-full border-none text-black "
          variant="secondary"
        >
          Our plans
        </Button>
      </div>

      {/* IMAGE */}
      <div className="w-screen md:h-[80vh] h-[40vh]  flex items-center justify-center ">
        <div className="w-11/12 h-5/6 flex items-center justify-center">
          <Image
            src="/images/homepage.png"
            alt="Website ex McFly"
            width={700}
            height={700}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
