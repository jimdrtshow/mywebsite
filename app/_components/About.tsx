import Image from "next/image";

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
        <div className="w-4/5 h-4/5 flex justify-start items-end ">
          <div className="w-3/5 h-3/5 flex justify-start items-end">
            <h1 className="text-3xl lg:text-7xl md:text-5xl  font-bold tracking-wider">
              Écoute. Excellence. Impact.
            </h1>
          </div>
        </div>
      </div>
      {/* PHONE DESCRIPTION */}
      <div className=" h-auto w-screen pt-20  md:flex  items-center justify-around ">
        {/* NUMBER 1 */}
        {/* 1 */}
        <div className="h-[70vh] w-full  flex items-center justify-center">
          <div className="h-[60vh] w-[350px] bg-myGreyButtonBg  rounded-2xl">
            {/* STEP */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-3xl font-bold tracking-wider opacity-40 uppercase">
                  Step one
                </h2>
              </div>
            </div>
            {/* TITLE */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-4xl uppercase font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
                  Le Projet.
                </h2>
              </div>
            </div>
            {/* ICONS */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12 flex items-center justify-around">
                <div className="h-[50px] w-[50px]  flex items-center justify-center ">
                  <Image
                    src="/logos/figma.svg"
                    alt="Figma"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="h-[50px] w-[50px]  flex items-center justify-center   ">
                  <Image
                    src="/logos/google-docs.svg"
                    alt="Google Doc"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="h-3/6 w-full b flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <p>
                  Prenons rendez-vous pour établir un cahier des charges, une
                  fois le cahier des charges 📘 terminé nous mettrons celui-ci
                  au propre sur
                  <span className="text-sm text-blue-500 uppercase ">
                    &nbsp;Google document&nbsp;
                  </span>
                  et vous proposerons un design sur
                  <span className="text-sm text-blue-500 uppercase">
                    &nbsp;Figma
                  </span>
                  🎨.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="h-[70vh] w-full  flex items-center justify-center">
          <div className="h-[60vh] w-[350px] bg-myGreyButtonBg  rounded-2xl">
            {/* STEP */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-3xl font-bold tracking-wider opacity-40 uppercase">
                  Step one
                </h2>
              </div>
            </div>
            {/* TITLE */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-4xl uppercase font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
                  Le Projet.
                </h2>
              </div>
            </div>
            {/* ICONS */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12 flex items-center justify-around">
                <div className="h-[50px] w-[50px]  flex items-center justify-center ">
                  <Image
                    src="/logos/figma.svg"
                    alt="Figma"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="h-[50px] w-[50px]  flex items-center justify-center   ">
                  <Image
                    src="/logos/google-docs.svg"
                    alt="Google Doc"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="h-3/6 w-full b flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <p>
                  Prenons rendez-vous pour établir un cahier des charges, une
                  fois le cahier des charges 📘 terminé nous mettrons celui-ci
                  au propre sur
                  <span className="text-sm text-blue-500 uppercase ">
                    &nbsp;Google document&nbsp;
                  </span>
                  et vous proposerons un design sur
                  <span className="text-sm text-blue-500 uppercase">
                    &nbsp;Figma
                  </span>
                  🎨.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="h-[70vh] w-full  flex items-center justify-center">
          <div className="h-[60vh] w-[350px] bg-myGreyButtonBg  rounded-2xl">
            {/* STEP */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-3xl font-bold tracking-wider opacity-40 uppercase">
                  Step one
                </h2>
              </div>
            </div>
            {/* TITLE */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <h2 className="text-4xl uppercase font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
                  Le Projet.
                </h2>
              </div>
            </div>
            {/* ICONS */}
            <div className="h-1/6 w-full  flex items-center justify-center">
              <div className="h-5/6 w-11/12 flex items-center justify-around">
                <div className="h-[50px] w-[50px]  flex items-center justify-center ">
                  <Image
                    src="/logos/figma.svg"
                    alt="Figma"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="h-[50px] w-[50px]  flex items-center justify-center   ">
                  <Image
                    src="/logos/google-docs.svg"
                    alt="Google Doc"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="h-3/6 w-full b flex items-center justify-center">
              <div className="h-5/6 w-11/12  flex items-center justify-start">
                <p>
                  Prenons rendez-vous pour établir un cahier des charges, une
                  fois le cahier des charges 📘 terminé nous mettrons celui-ci
                  au propre sur
                  <span className="text-sm text-blue-500 uppercase ">
                    &nbsp;Google document&nbsp;
                  </span>
                  et vous proposerons un design sur
                  <span className="text-sm text-blue-500 uppercase">
                    &nbsp;Figma
                  </span>
                  🎨.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
