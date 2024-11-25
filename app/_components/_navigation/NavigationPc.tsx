import menuItems from "@/data/menuItems";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function NavigationPcTab() {
  return (
    <div className="w-screen h-[20vh] hidden  lg:flex items-center justify-center">
      <div className="w-11/12 h-full  flex items-center justify-between border-b border-white">
        {/* LOGO */}
        <div className="w-1/6 h-full flex items-center justify-center ">
          <Image src="/logos/firs.svg" alt="#" width={100} height={100} />
        </div>
        {/* MENU ITEMS */}
        <div className="w-4/6 h-full flex items-center justify-center">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-gray-400 transition p-6 flex items-start justify-between text-xl"
            >
              <span className="text-gray-400 text-sm font-bold pr-3 font-sans ">
                0{index + 1}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
        {/* CONTACT BUTTON */}
        <div className="w-1/6 h-full flex items-center justify-center ">
          <Button
            className=" w-[10vw] border border-gray-300 bg-transparent text-white flex items-center justify-between -tracking-tight "
            variant="secondary"
          >
            <FaArrowRight className="text-white -rotate-45" />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
