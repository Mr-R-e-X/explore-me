import FixedSocialMedia from "@/components/custom/FixedSocialMedia";
import Header from "@/components/custom/Header";
import MouseScrollAnimatiion from "@/components/custom/MouseScrollAnimatiion";
import Name from "@/components/custom/Name";
import "./background.css";
import About from "@/components/custom/About";
import Experience from "@/components/custom/Experience";
import Projects from "@/components/custom/Projects";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-screen light_background ">
          <FixedSocialMedia />
          <Name />
          <MouseScrollAnimatiion />
        </div>

        <About />
        <Experience />
        <Projects />
        <div className="h-[90vh] light_background">
          <Contact />
        </div>
      </main>
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </>
  );
}
