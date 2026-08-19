import "./About.css";
import Panel from "../../components/Panel/Panel";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";

function About({ open, onClose }) {
  return (
    <Panel
      open={open}
      onClose={onClose}
      className="about-card"
    >
      {/* COLUMNA IZQUIERDA */}
      <div className="about-info">

        <span className="about-number">
          01
        </span>

        <div className="about-top">
          <p className="about-label">
            SOBRE MÍ
          </p>

          <a
            href="/cv/david-lopez-cv.pdf"
            download
            className="cv-download"
            aria-label="Descargar CV"
          >
            <span className="cv-text">
              CV
            </span>

            <span className="cv-arrow">
              ↓
            </span>
          </a>
        </div>

        <h2>
          Hola,
          < br />  
         soy David López.
      
         
        </h2>

        <p className="about-text">
          DESARROLLADOR FULL STACK
        </p>

        <p className="about-text">
          Desarrollo proyectos mientras amplío mis
          conocimientos y comparto lo que aprendo
          durante el proceso.
        </p>

        <div className="about-location">
         MÁLAGA · ESPAÑA
        </div>

      </div>


      {/* COLUMNA DERECHA */}
      <div className="skills">

        <div className="skills-header">
          <p>
            SKILLS
          </p>

          <span>
            STACK / 2026
          </span>
        </div>

        <div className="skills-logos">

          <div
            className="skill-icon java"
            title="Java"
            aria-label="Java"
          >
            <FaJava />
          </div>

          <div
            className="skill-icon javascript"
            title="JavaScript"
            aria-label="JavaScript"
          >
            <SiJavascript />
          </div>

          <div
            className="skill-icon react"
            title="React"
            aria-label="React"
          >
            <FaReact />
          </div>

          <div
            className="skill-icon html"
            title="HTML"
            aria-label="HTML"
          >
            <FaHtml5 />
          </div>

          <div
            className="skill-icon css"
            title="CSS"
            aria-label="CSS"
          >
            <FaCss3Alt />
          </div>

          <div
            className="skill-icon sql"
            title="SQL"
            aria-label="SQL"
          >
            <FaDatabase />
          </div>

          <div
            className="skill-icon git"
            title="Git"
            aria-label="Git"
          >
            <FaGitAlt />
          </div>

          <div
            className="skill-icon github"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub />
          </div>

        </div>

      </div>

    </Panel>
  );
}

export default About;