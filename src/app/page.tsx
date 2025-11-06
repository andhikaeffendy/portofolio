import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Project";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import MotionSection from "@/components/shared/MotionSection";

export default function Home() {
  return (
    <>
      <Sidebar />

      <main className="min-h-screen overflow-x-hidden md:pt-0 pl-0 md:pl-64">
        <MotionSection id="hero" delay={0}>
          <Hero />
        </MotionSection>
        <MotionSection id="about" delay={0.1}>
          <About />
        </MotionSection>
        <MotionSection id="skills" delay={0.2}>
          <Skills />
        </MotionSection>
        <MotionSection id="resume" delay={0.3}>
          <Resume />
        </MotionSection>
        <section id="project">
          <Projects />
        </section>
        <MotionSection id="contact" delay={0.5}>
          <Contact />
        </MotionSection>
        <Footer />
      </main>
    </>
  );
}
