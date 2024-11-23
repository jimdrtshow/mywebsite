import { Button } from "@/components/ui/button";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMicrosoftteams } from "react-icons/si";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-screen h-[40vh] flex flex-col  justify-around items-center bg-my-bg "
    >
      <div className=" w-screen h-auto flex flex-col">
        <div className="w-full h-[10vh] flex items-center justify-center">
          <ul className="  flex flex-inline items-center justify-around text-sm text-myGreyText ">
            <li className="p-5 ">Overview</li>
            <li className="p-5 ">Careers</li>
            <li className="p-5 ">Contact</li>
            <li className="p-5 ">Help</li>
          </ul>
        </div>
        <div className="w-full h-[10vh] flex items-center justify-center">
          <ul className="  flex flex-inline items-center justify-around text-sm text-myGreyText ">
            <li className="p-5 text-xl text-white">
              <FaXTwitter />
            </li>
            <li className="p-5 text-xl text-white">
              <FaTelegram />
            </li>
            <li className="p-5 text-xl text-white">
              <FaGithub />
            </li>
            <li className="p-5 text-xl text-white">
              <SiMicrosoftteams />
            </li>
          </ul>
        </div>
        <div className="w-full h-[10vh] flex items-center justify-center">
          <Button
            className="rounded-full border-none text-myGreyText bg-myGreyButtonBg"
            variant="outline"
          >
            contact@zeusagency.com
            <IoMailOutline />
          </Button>
        </div>
        <div className=" w-full h-[10vh] flex items-center justify-center">
          <div className="w-5/6 h-5/6 flex items-end justify-end">
            <p className="text-sm text-myGreyTextGradient">
              ®Powered by McFly®
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
