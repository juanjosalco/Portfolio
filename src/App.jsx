import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
