import About from "../About";
import Certifications from "../Certifications";
import Contact from "../Contact";
import Hero from "../Hero";
import Stack from "../Stack";
import Work from "../Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Certifications />
      <Work />
      <Stack />
      <About />
      <Contact />
    </main>
  );
}
