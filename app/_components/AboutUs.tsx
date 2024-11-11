export default function AboutUs() {
  return (
    <div className="h-screen w-screen">
      <div className="h-1/4 w-screen  flex justify-start items-center mx-10">
        <p className="text-white text-5xl tracking-widest">
          About <span className="text-spotify">us</span>.
        </p>
      </div>
      <div className="h-2/4 w-screen flex justify-center items-center">
        <h2 className="text-center lg:text-6xl md:text-4xl text-2xl lg:leading-tight leading-relaxed mx-10 text-white">
          Monthly Token Distribution begins with the launch of Shaga Edge.
          Tokens are redeemable for Game Streaming time!
        </h2>
      </div>
    </div>
  );
}
