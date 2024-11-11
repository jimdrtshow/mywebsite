import Image from "next/image";
import Heading from "./_components/Heading";
import AboutUs from "./_components/AboutUs";

export default function Home() {
  return (
    <main>
      {/* <Navigation /> */}
      <Heading />
      <AboutUs />
      {/* <Services /> */}
    </main>
  );
}
