import Image from "next/image";
import Heading from "./_components/Heading";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";

export default function Home() {
  return (
    <main>
      {/* <Navigation /> */}
      <Heading />
      <AboutUs />
      <Services />
    </main>
  );
}
