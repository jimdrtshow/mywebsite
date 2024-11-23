import About from "./_components/About";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import ScrollingBanner from "./_components/ScrollingBanner";
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";
import Homepage from "./_components/Homepage";
// import Test from "./_components/Test";

export default function Home() {
  return (
    <main>
      {/* <Test /> */}
      <NavBar />
      <Homepage />
      <About />
      {/* <Services />
      <Projects />
      <ScrollingBanner />*/}
      <Footer />
    </main>
  );
}
