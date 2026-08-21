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
      <div className="about-wrapper">

        <header className="about-header">

          <span className="about-number">
            01
          </span>

          <span className="about-title">
            SOBRE MÍ
          </span>

        </header>


        <div className="about-content">

          <div className="about-info">

            <div className="about-heading-row">

              <div>
                <h2>
                  Hola,
                  <br />
                  soy David López.
                </h2>

                <p className="about-role">
                  DESARROLLADOR FULL STACK
                </p>
              </div>


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


            <div className="about-description">

              <p>
                Nací en Gerona, aunque actualmente vivo en Málaga.
                Estudié el{" "}
                <u>
                  Grado Superior en Desarrollo de Aplicaciones
                  Multiplataforma (DAM)
                </u>{" "}
                en DIGITECH y actualmente continúo mi formación
                estudiando{" "}
                <u>
                  Ingeniería en Inteligencia Artificial
                </u>{" "}
                en la UNED.
              </p>


              <p>
                Además de mis estudios, desarrollo proyectos por mi
                cuenta para seguir aprendiendo, experimentar con nuevas
                tecnologías y mejorar mis habilidades como desarrollador.
              </p>


              <p>
                En este portfolio comparto algunos de esos proyectos y
                parte de mi evolución en el mundo del desarrollo de
                software y la inteligencia artificial.
              </p>

            </div>


            <span className="about-location">
              MÁLAGA · ESPAÑA
            </span>

          </div>


          <div className="skills">

            <div className="skills-header">

              <span className="skills-title">
                SKILLS
              </span>

              <span className="skills-year">
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

        </div>

      </div>
    </Panel>
  );
}


export default About;