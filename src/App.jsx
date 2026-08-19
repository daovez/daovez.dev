import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StudioLink from "./components/StudioLink/StudioLink";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Resources from "./sections/Resources/Resources";
import Contact from "./sections/Contact/Contact";

function App() {
  const [activePanel, setActivePanel] = useState(null);

  const openPanel = (panel) => {
    setActivePanel(panel);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const goHome = () => {
    setActivePanel(null);
  };

  return (
    <>
      <CustomCursor />

      <main className="page">
        <section className="portfolio-card">

          <Navbar
            onHome={goHome}
            onAbout={() => openPanel("about")}
            onProjects={() => openPanel("projects")}
            onResources={() => openPanel("resources")}
            onContact={() => openPanel("contact")}
          />

          <Hero />

      <footer className="card-footer">
  <span>DAOVEZ.DEV</span>

  <StudioLink />
</footer>
          <About
            open={activePanel === "about"}
            onClose={closePanel}
          />

          <Projects
            open={activePanel === "projects"}
            onClose={closePanel}
          />

          <Resources
            open={activePanel === "resources"}
            onClose={closePanel}
          />

          <Contact
            open={activePanel === "contact"}
            onClose={closePanel}
          />

        </section>
      </main>
    </>
  );
}

export default App;