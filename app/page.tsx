import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Path } from "@/components/sections/Path";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <FeaturedProject />
        <About />
        <Skills />
        <Projects />
        <Path />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
