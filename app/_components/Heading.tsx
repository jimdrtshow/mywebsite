import { Button } from "@/components/ui/button";

export default function Heading() {
  return (
    <div className="h-screen w-screen">
      <div className=" h-3/4 w-screen   flex lg:items-end items-center justify-center">
        <h1 className="lg:text-9xl md:text-7xl text-5xl lg:leading-tight leading-relaxed mx-10 text-white">
          An alliance <span className="text-spotify">between</span> performance
          and design <span className="text-spotify">.</span>
        </h1>
      </div>
      <div className=" h-1/4 w-screen flex items-center justify-center fixed ">
        <Button
          variant="outline"
          className="rounded-3xl bg-transparent text-white "
        >
          more.
        </Button>
      </div>
    </div>
  );
}
