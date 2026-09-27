import { About } from "@/components/About";
import { BackgroundParticles } from "@/components/BackgroundParticles";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main className="site-shell">
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
