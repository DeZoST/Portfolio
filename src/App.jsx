import { useState } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About onBack={() => setCurrentSection("home")} />;
      case "projects":
        return <Projects onBack={() => setCurrentSection("home")} />;
      case "skills":
        return <Skills onBack={() => setCurrentSection("home")} />;
      case "contact":
        return <Contact onBack={() => setCurrentSection("home")} />;
      default:
        return <Home setCurrentSection={setCurrentSection} />;
    }
  };

  return <main className="App">{renderSection()}</main>;
}

export default App;
