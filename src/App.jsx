import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StudioLink from "./components/StudioLink/StudioLink";

import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import Blog from "./pages/Blog/Blog";
import BlogPost1 from "./pages/Blog/BlogPost1";


function App() {
  const [activePanel, setActivePanel] = useState(null);

  const navigate = useNavigate();


  /* =========================
     PANELES
  ========================= */

  const openPanel = (panel) => {
    setActivePanel(panel);
  };


  const closePanel = () => {
    setActivePanel(null);
  };


  /* =========================
     NAVEGACIÓN
  ========================= */

  const goHome = () => {
    setActivePanel(null);

    navigate("/");
  };


  const openBlog = () => {
    setActivePanel(null);

    navigate("/blog");
  };


  /* =========================
     PORTFOLIO
  ========================= */

  const Portfolio = () => (
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

          <span>
            DAOVEZ.DEV
          </span>

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
  );


  /* =========================
     APP
  ========================= */

  return (
    <>
      <CustomCursor />

      <Routes>

        {/* PORTFOLIO */}
        <Route
          path="/"
          element={<Portfolio />}
        />


        {/* BLOG */}
        <Route
          path="/blog"
          element={
            <Blog
              onBack={goHome}
            />
          }
        />


        {/* POST 01 */}
        <Route
          path="/blog/post1"
          element={
            <BlogPost1 />
          }
        />

      </Routes>
    </>
  );
}


export default App;