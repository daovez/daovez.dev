import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StudioLink from "./components/StudioLink/StudioLink";

import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

import Blog from "./pages/Blog/Blog";
import BlogPost1 from "./pages/Blog/BlogPost1";


function App() {
  const [activePanel, setActivePanel] = useState(null);

  const navigate = useNavigate();


  /* =========================================
     ABRIR PANEL
  ========================================= */

  const openPanel = (panel) => {
    setActivePanel(panel);
  };


  /* =========================================
     CERRAR PANEL
  ========================================= */

  const closePanel = () => {
    setActivePanel(null);
  };


  /* =========================================
     INICIO
  ========================================= */

  const goHome = () => {
    setActivePanel(null);

    navigate("/");
  };


  /* =========================================
     BLOG
  ========================================= */

  const openBlog = () => {
    setActivePanel(null);

    navigate("/blog");
  };


  /* =========================================
     PORTFOLIO
  ========================================= */

  const Portfolio = () => {
    return (
      <main className="page">

        {/* =====================================
            VÍDEO DE FONDO
        ===================================== */}

        <video
          className="page-background-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="/background.mp4"
            type="video/mp4"
          />
        </video>


        {/* =====================================
            CAPA SOBRE EL VÍDEO
        ===================================== */}

        <div className="page-background-overlay" />


        {/* =====================================
            TARJETA PRINCIPAL
        ===================================== */}

        <section className="portfolio-card">

          {/* NAVBAR */}

          <Navbar
            onHome={goHome}
            onAbout={() => openPanel("about")}
            onProjects={() => openPanel("projects")}
            onBlog={openBlog}
          />


          {/* HERO */}

          <Hero />


          {/* STUDIO */}

          <footer className="card-footer">
            <StudioLink />
          </footer>


          {/* =====================================
              SOBRE MÍ
          ===================================== */}

          <About
            open={activePanel === "about"}
            onClose={closePanel}
          />


          {/* =====================================
              PROYECTOS
          ===================================== */}

          <Projects
            open={activePanel === "projects"}
            onClose={closePanel}
          />

        </section>

      </main>
    );
  };


  /* =========================================
     RUTAS
  ========================================= */

  return (
    <>
      <CustomCursor />

      <Routes>

        <Route
          path="/"
          element={<Portfolio />}
        />


        <Route
          path="/blog"
          element={
            <Blog
              onBack={goHome}
            />
          }
        />


        <Route
          path="/blog/post1"
          element={<BlogPost1 />}
        />

      </Routes>
    </>
  );
}


export default App;