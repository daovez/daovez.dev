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
import Particles from "./components/Particles/Particles";

import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

import Blog from "./pages/Blog/Blog";
import BlogPost1 from "./pages/Blog/BlogPost1";
import GenerativeArt from "./pages/GenerativeArt.jsx";


function App() {
  const [activePanel, setActivePanel] = useState(null);

  const navigate = useNavigate();


  const openPanel = (panel) => {
    setActivePanel(panel);
  };


  const closePanel = () => {
    setActivePanel(null);
  };


  const goHome = () => {
    setActivePanel(null);
    navigate("/");
  };


  const openBlog = () => {
    setActivePanel(null);
    navigate("/blog");
  };


  const openGenerativeArt = () => {
    setActivePanel(null);
    navigate("/generative-art");
  };


  const Portfolio = () => {
    return (
      <main className="page">
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

        <div className="page-background-overlay" />

        <section className="portfolio-card">
          <Particles
            panelOpen={activePanel !== null}
          />

          <Navbar
            onHome={goHome}
            onAbout={() => openPanel("about")}
            onProjects={() => openPanel("projects")}
            onBlog={openBlog}
            onGenerativeArt={openGenerativeArt}
          />

          <Hero />

          <footer className="card-footer">
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
        </section>
      </main>
    );
  };


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

        <Route
          path="/generative-art"
          element={<GenerativeArt />}
        />
      </Routes>
    </>
  );
}


export default App;