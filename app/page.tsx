import About from "./_components/About";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import Homepage from "./_components/Homepage";
// import Test from "./_components/Test";

export default function Home() {
  return (
    <main>
      {/* <Test /> */}
      <Navigation />
      <Homepage />
      <About />
      {/* <Services />
      <Projects />
      <ScrollingBanner />*/}
      <Footer />
    </main>
  );
}
