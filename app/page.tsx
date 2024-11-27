import AboutUs from "./_components/AboutUs";
import Works from "./_components/Works";

import Navigation from "./_components/Navigation";
import Homepage from "./_components/Homepage";
// import Test from "./_components/Test";

export default function Home() {
  return (
    <main>
      {/* <Test /> */}
      <Navigation />
      <Homepage />
      <AboutUs />
      <Works />
      {/*
      <Projects />
      <ScrollingBanner />*/}
    </main>
  );
}
