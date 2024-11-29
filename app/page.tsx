import AboutUs from "./_components/AboutUs";
import Works from "./_components/Works";

import Navigation from "./_components/Navigation";
import Services from "./_components/Services";
import Homepage from "./_components/Homepage";
import Collaboration from "./_components/Collaboration";
import Footer from "./_components/Footer";

// import Test from "./_components/Test";

export default function Home() {
  return (
    <main>
      {/* <Test /> */}
      <Navigation />
      <Homepage />
      <AboutUs />
      <Works />
      <Services />
      <Collaboration />
      <Footer />
      {/*
      <Projects />
      <ScrollingBanner />*/}
    </main>
  );
}
