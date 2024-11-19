import { ImRenren } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* NAVBAR */}
      <div className="w-screen h-[10vh] flex items-center justify-center fixed z-10">
        <div className="w-[60vw] h-4/6 flex items-center justify-between rounded-3xl bg-myGreyButtonBg ">
          <div className="w-[20%] h-full flex items-center justify-center  md:bg-white bg-transparent rounded-3xl">
            <Link href="#homePage" scroll={true}>
              <ImRenren className="text-black text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#aboutUs" scroll={true}>
              <p className="hidden md:block">About</p>
              <RxAvatar className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#services" scroll={true}>
              <p className="hidden md:block">Price</p>
              <MdOutlineAttachMoney className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#projects" scroll={true}>
              <p className="hidden md:block">Projects</p>
              <FaBook className="md:hidden text-white text-2xl" />
            </Link>
          </div>
          <div className="w-[20%] h-5/6 flex items-center justify-center text-white  ">
            <Link href="#footer" scroll={true}>
              <p className="hidden md:block">Contact</p>
              <CiPhone className="md:hidden text-white text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
