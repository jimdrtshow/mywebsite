import Image from "next/image";
import Heading from "./_components/Heading";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import ScrollingBanner from "./_components/ScrollingBanner";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      {/* <Navigation /> */}
      <Heading />
      <AboutUs />
      <Services />
      <Projects />
      <ScrollingBanner />
      <Footer />
    </main>
  );
}
