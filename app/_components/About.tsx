import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GiCoffeeCup } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <section id="about" className="w-screen h-auto overflow-hidden ">
      {/* COVER */}
      <div className="md:h-[70vh] h-[50vh] w-screen relative flex justify-center items-center">
        <Image
          src="/images/about.jpg"
          alt="Website ex McFly"
          layout="fill"
          objectFit="cover"
          className="-z-20"
        />
        <div className="w-4/5 h-4/5 flex justify-start items-start ">
          <div className="w-3/5 h-3/5 flex justify-start items-start">
            <h1 className="text-3xl lg:text-7xl md:text-5xl  font-bold tracking-wider">
              Écoute. Excellence. Impact.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-screen  h-auto ">
        <div className=" w-screen h-[20vh]  ">
          <div className="w-11/12 h-4/5 flex justify-end items-center pt-5">
            <h1 className="text-3xl lg:text-7xl md:text-5xl text-center  font-bold tracking-wider bg-sub-title bg-clip-text text-transparent">
              about McFly®
            </h1>
          </div>
        </div>

        {/* BLOCKS ABOUT */}
        <div className="w-screen h-auto lg:h-[80vh] flex flex-wrap">
          {/* LEFT IN PC/ TOP IN PHONE */}
          <div className="  w-screen lg:w-1/3 h-auto lg:h-[80vh] flex justify-center items-center">
            <div className=" w-10/12  h-[50vh] ">
              <div className=" w-full h-[10vh] flex justify-start items-center ">
                <Button
                  className=" rounded-full  text-white bg-transparent border border-myBlue "
                  variant="secondary"
                >
                  Our plans
                </Button>
              </div>
              <div className=" w-full h-[10vh] flex justify-start items-center ">
                <h1 className="text-5xl  lg:text-5xl text-center  font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
                  Le plan.
                </h1>
              </div>
              <div className=" w-full h-[30vh] flex justify-start items-start pt-4 ">
                <h2 className=" text-white lg:text-[1rem]   tracking-wider ">
                  Notre plan est découpé en quatre parties bien distinctes, afin
                  de vous proposer un service de qualité optimum. Vous aurez
                  ainsi la possibilité de valider notre travail étape par étape.
                </h2>
              </div>
            </div>
          </div>
          {/* END*/}

          {/* RIGHT IN PC/ BOTTOM IN PHONE */}
          <div className="w-screen lg:w-2/3 h-[120vh] lg:h-[80vh] flex justify-center lg:justify-start items-center">
            <div className="  w-11/12 h-auto lg:h-[60vh] flex flex-wrap gap-6 ">
              {/* CARD1 */}
              <div className="w-full lg:w-5/12 h-[20vh] lg:h-[25vh] bg-myGreyButtonBg border border-stone-800 rounded-xl flex justify-center items-center">
                {" "}
                <div className="w-11/12 h-full ">
                  {/* TITLE + ICONS */}
                  <div className="w-full h-1/3  flex justify-start items-center">
                    <p
                      className={`${poppins.className} flex items-center text-xl font-bold tracking-tighter`}
                    >
                      <GiCoffeeCup className="mr-4 text-2xl text-myBlue" />
                      First stage
                    </p>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="w-full h-1/3 flex justify-start items-center">
                    <p>
                      Parlez-nous de votre projet, afin de rédiger un cahier des
                      charges
                    </p>
                  </div>
                  {/* BUTTON */}
                  <div className="w-full h-1/3  flex justify-end items-center">
                    <Button
                      className=" rounded-full border-none bg-transparent text-white"
                      variant="secondary"
                    >
                      En savoir plus <FaArrowRight className="text-myCyan" />
                    </Button>
                  </div>
                </div>
              </div>
              {/* END CARD 1 */}
              {/* CARD2 */}
              <div className="w-full lg:w-5/12 h-[20vh] lg:h-[25vh] bg-myGreyButtonBg border border-stone-800 rounded-xl flex justify-center items-center">
                {" "}
                <div className="w-11/12 h-full ">
                  {/* TITLE + ICONS */}
                  <div className="w-full h-1/3  flex justify-start items-center">
                    <p
                      className={`${poppins.className} flex items-center text-xl font-bold tracking-tighter`}
                    >
                      <MdDesignServices className="mr-4 text-2xl text-myBlue" />
                      Second Stage
                    </p>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="w-full h-1/3 flex justify-start items-center">
                    <p>
                      Nous vous proposons un premier design via nos outils de
                      design
                    </p>
                  </div>
                  {/* BUTTON */}
                  <div className="w-full h-1/3  flex justify-end items-center">
                    <Button
                      className=" rounded-full border-none bg-transparent text-white"
                      variant="secondary"
                    >
                      En savoir plus <FaArrowRight className="text-myCyan" />
                    </Button>
                  </div>
                </div>
              </div>
              {/* END CARD 2 */}
              {/* CARD3 */}
              <div className="w-full lg:w-5/12 h-[20vh] lg:h-[25vh] bg-myGreyButtonBg border border-stone-800 rounded-xl flex justify-center items-center">
                {" "}
                <div className="w-11/12 h-full ">
                  {/* TITLE + ICONS */}
                  <div className="w-full h-1/3  flex justify-start items-center">
                    <p
                      className={`${poppins.className} flex items-center text-xl font-bold tracking-tighter`}
                    >
                      <FaCode className="mr-4 text-2xl text-myBlue" />
                      Third stage
                    </p>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="w-full h-1/3 flex justify-start items-center">
                    <p>
                      Nous vous codons votre site via des technologies
                      ultra-performantes comme Next.JS
                    </p>
                  </div>
                  {/* BUTTON */}
                  <div className="w-full h-1/3  flex justify-end items-center">
                    <Button
                      className=" rounded-full border-none bg-transparent text-white"
                      variant="secondary"
                    >
                      En savoir plus <FaArrowRight className="text-myCyan" />
                    </Button>
                  </div>
                </div>
              </div>
              {/* END CARD 3 */}
              {/* CARD4 */}
              <div className="w-full lg:w-5/12 h-[20vh] lg:h-[25vh] bg-myGreyButtonBg border border-stone-800 rounded-xl flex justify-center items-center">
                {" "}
                <div className="w-11/12 h-full ">
                  {/* TITLE + ICONS */}
                  <div className="w-full h-1/3  flex justify-start items-center">
                    <p
                      className={`${poppins.className} flex items-center text-xl font-bold tracking-tighter`}
                    >
                      <FaGoogle className="mr-4 text-2xl text-myBlue" />
                      Last stage
                    </p>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="w-full h-1/3 flex justify-start items-center">
                    <p>
                      Votre site est prêt à être réfénrencé par Google, nous
                      nous occupons de tout
                    </p>
                  </div>
                  {/* BUTTON */}
                  <div className="w-full h-1/3  flex justify-end items-center">
                    <Button
                      className=" rounded-full border-none bg-transparent text-white"
                      variant="secondary"
                    >
                      En savoir plus <FaArrowRight className="text-myCyan" />
                    </Button>
                  </div>
                </div>
              </div>
              {/* END CARD 4 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
