import clientsItems from "@/data/clientsItems";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="h-auto w-screen flex items-center justify-center pt-20"
    >
      <div className="h-full w-11/12 ">
        <div className="h-auto w-full  lg:flex flex-row">
          <div className="h-3/5 lg:h-full w-full lg:w-2/3  flex items-center justify-center mt-5 mb-5 ">
            <h1 className="text-3xl md:text-5xl font-sans font-semibold leading-8 text-gray-800">
              We have partnered with a range of clients, helping them achieve
              their digital goals through tailored solutions. From startups to
              established brands, each collaboration has been built on trust and
              creativity.
            </h1>
          </div>
          <div className="h-2/5 lg:h-full w-full lg:w-1/3 flex items-start justify-end">
            <p className="text-xl text-gray-600 pt-5 hidden lg:block">
              Clients
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex flex-row flex-wrap">
          {/* Images */}
          {clientsItems.map((item, index) => (
            <div className="w-1/2 md:w-1/4 h-[15vh] md:h-[30vh] ">
              <div className="w-auto h-auto absolute p-5">
                <p>0{index + 1}</p>
              </div>
              <div className="w-full h-full flex items-center justify-center ">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={50}
                  height={50}
                  className="md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
