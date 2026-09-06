import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StudioLink from "./components/StudioLink/StudioLink";
import Particles from "./components/Particles/Particles";

import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

import CodeDojo from "./pages/Blog/Blog";
import CodeDojoPost1 from "./pages/Blog/BlogPost1";
import "./theme.css";


const SEO_BY_PATH = {
  "/": {
    title: "David López | Desarrollador Full Stack, Java, Python e Inteligencia Artificial",
    description: "Portfolio de David López (Daovez), desarrollador Full Stack especializado en Java, Python, React, desarrollo web e Inteligencia Artificial.",
  },
  "/blog": {
    title: "Code Dojo | Programación, Java e Inteligencia Artificial | Daovez",
    description: "Artículos de David López sobre programación, Java, desarrollo web, software e Inteligencia Artificial en Code Dojo de Daovez.",
  },
  "/blog/post1": {
    title: "Java desde cero | Programación Java | Daovez",
    description: "Introducción práctica a la programación Java desde cero: fundamentos del lenguaje, JVM y primeros pasos para aprender desarrollo con Java.",
  },
};


function App() {
  const [activePanel, setActivePanel] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const seo =
      SEO_BY_PATH[location.pathname] ||
      SEO_BY_PATH["/"];

    const canonicalUrl =
      `https://daovez.dev${
        location.pathname === "/"
          ? "/"
          : location.pathname
      }`;

    document.title = seo.title;

    const selectors = {
      'meta[name="description"]': seo.description,
      'meta[property="og:title"]': seo.title,
      'meta[property="og:description"]': seo.description,
      'meta[property="og:url"]': canonicalUrl,
      'meta[name="twitter:title"]': seo.title,
      'meta[name="twitter:description"]': seo.description,
    };

    Object.entries(selectors).forEach(
      ([selector, content]) => {
        document
          .querySelector(selector)
          ?.setAttribute("content", content);
      }
    );

    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", canonicalUrl);
  }, [location.pathname]);


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
     CODE DOJO
  ========================================= */

  const openCodeDojo = () => {
    setActivePanel(null);

    navigate("/blog");
  };


  /* =========================================
     PORTFOLIO
  ========================================= */

  const renderPortfolio = () => {
    return (
      <main className="page">

        <section className="portfolio-card">

          <Particles
            panelOpen={activePanel !== null}
          />


          <Navbar
            onHome={goHome}
            onAbout={() => openPanel("about")}
            onProjects={() => openPanel("projects")}
            onBlog={openCodeDojo}
          />


          <Hero />


          {/* =====================================
              STUDIO
          ===================================== */}

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
          element={renderPortfolio()}
        />


        {/* =====================================
            CODE DOJO
        ===================================== */}

        <Route
          path="/blog"
          element={<CodeDojo />}
        />


        <Route
          path="/blog/post1"
          element={<CodeDojoPost1 />}
        />

      </Routes>

    </>
  );
}


export default App;
