import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StudioLink from "./components/StudioLink/StudioLink";

import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import Blog from "./pages/Blog/Blog";

function App() {
  const [activePanel, setActivePanel] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const openPanel = (panel) => {
    setActivePanel(panel);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const goHome = () => {
    setActivePanel(null);
    setCurrentPage("home");
  };

  const openBlog = () => {
    setActivePanel(null);
    setCurrentPage("blog");
  };

  /* =========================
     BLOG
  ========================= */

  if (currentPage === "blog") {
    return (
      <>
        <CustomCursor />

        <Blog onBack={goHome} />
      </>
    );
  }

  /* =========================
     PORTFOLIO
  ========================= */

  return (
    <>
      <CustomCursor />

      <main className="page">
        <section className="portfolio-card">

          <Navbar
            onHome={goHome}
            onAbout={() => openPanel("about")}
            onProjects={() => openPanel("projects")}
            onBlog={openBlog}
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