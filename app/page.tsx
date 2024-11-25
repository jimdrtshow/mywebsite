import Services from "./_components/Services";
import AboutUs from "./_components/AboutUs";

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
      {/* <Services />
      <Projects />
      <ScrollingBanner />*/}
    </main>
  );
}
