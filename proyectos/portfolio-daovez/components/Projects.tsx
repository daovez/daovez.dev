"use client";

import { useState } from "react";

const projects = [
  {
    title: "Portfolio",
    status: "Proyecto actual",
    description:
      "Portfolio personal desarrollado con Next.js, React y TypeScript para mostrar mi evolución como desarrollador Full Stack.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    image: "images/foto1.png",
    link: "#",
  },
  {
    title: "Daovez Studio",
    status: "Sitio web",
    description:
      "Estudio digital enfocado en diseño, branding y desarrollo web.",
    tech: ["React", "Design", "SEO"],
    image: "images/foto2.png",
    link: "#",
  },
  {
    title: "Academy",
    status: "Formación",
    description:
      "Academia donde comparto apuntes y proyectos para aprender programación.",
    tech: ["Java", "Spring", "MySQL"],
    image: "images/foto3.png",
    link: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="proyectos" className="projects">

      <p className="section-eyebrow">Proyectos</p>

      <div className="projects-panel">

        <div className="projects-sidebar">

          {projects.map((project, index) => (
            <button
              key={project.title}
              className={`project-item ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <h3>{project.title}</h3>
              <span>{project.status}</span>
            </button>
          ))}

        </div>

        <div className="projects-content">

          <div className="project-info">

            <span className="project-status">
              {projects[active].status}
            </span>

            <h3>{projects[active].title}</h3>

            <p>{projects[active].description}</p>

            <div className="project-tech">
              {projects[active].tech.map((tech) => (
                <small key={tech}>{tech}</small>
              ))}
            </div>

            <a href={projects[active].link}>
              Ver proyecto ↗
            </a>

          </div>

          <div className="project-image">
            <img
              src={projects[active].image}
              alt={projects[active].title}
            />
          </div>

        </div>

      </div>

    </section>
  );
}