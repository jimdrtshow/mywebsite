import { Button } from "@/components/ui/button";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-screen h-[30vh] flex flex-col  justify-around items-center "
    >
      <div className=" w-screen h-auto flex flex-col">
        <div className="w-full h-[10vh] flex items-center justify-center">
          <ul className="flex flex-row items-center justify-center text-sm text-myGreyText">
            <li className="pr-5 ">Overview</li>
            <li className="pr-5 ">Careers</li>
            <li className="pr-5 ">Contact</li>
            <li className="pr-5 ">Help</li>
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
              ®All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
