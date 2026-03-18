import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <About />
      <Projects />
      <SystemDesign />
      <Certifications />
      <Contact />
    </>
  );
}
