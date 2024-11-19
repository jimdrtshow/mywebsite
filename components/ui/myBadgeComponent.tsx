import Image from "next/image";
import avatar1 from "../../public/images/avatar1.jpg";
import avatar2 from "../../public/images/avatar2.jpg";
import avatar3 from "../../public/images/avatar3.jpg";

export default function MyBadgeComponent() {
  return (
    <div className="w-[250px] h-[6vh] flex  justify-start items-center  rounded-2xl bg-myGreyButtonBg opacity-60  ">
      {/* AVATARS */}
      <div className="w-1/3 h-full   inline-flex justify-center place-items-center relative left-2">
        <div className="w-[30px] h-[30px] relative ">
          <Image
            src={avatar1}
            alt="Avatar1"
            layout="fill"
            objectFit="cover"
            className="rounded-full border border-myGreyText  "
          />
        </div>
        <div className="w-[30px] h-[30px]  rounded-full relative right-2 ">
          <Image
            src={avatar2}
            alt="Avatar2"
            layout="fill"
            objectFit="cover"
            className="rounded-full border border-myGreyText"
          />
        </div>
        <div className="w-[30px] h-[30px]  rounded-full relative right-4 ">
          <Image
            src={avatar3}
            alt="Avatar3"
            layout="fill"
            objectFit="cover"
            className="rounded-full border border-myGreyText"
          />
        </div>
        {/* TEXT */}
      </div>
      <div className="w-2/3 h-full flex justify-start items-center">
        <p className="text-sm text-white">Trusted by 200+ people</p>
      </div>
    </div>
  );
}
