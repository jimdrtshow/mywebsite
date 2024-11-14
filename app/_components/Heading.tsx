// pages/index.tsx
// pages/index.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Heading() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex justify-center items-center -z-50">
      <div
        className={`${prompt.className} antialiased absolute whitespace-nowrap animate-scroll text-[320px] text-orange-500 opacity-20 uppercase`}
      >
        ウェブ＆デザイン事務所 - Jim studio®
      </div>
      <div className=" absolute h-screen w-screen flex justify-center items-center z-50">
        <Image
          src="/images/homepage.png"
          alt="#"
          width={700}
          height={700}
          className="rounded-xl "
        />
      </div>
    </div>
  );
}
