import { useState } from "react";

import "./Projects.css";

import Panel from "../../components/Panel/Panel";


function Projects({ open, onClose }) {
  const [previewProject, setPreviewProject] = useState(null);


  const projects = [
    {
      id: "01",
      name: "daovez.dev",
      description: "Portfolio personal",
      stack: "REACT / VITE",
      url: "https://daovez.dev",
      previewUrl: "https://daovez.dev",
      active: true,
    },

    {
      id: "02",
      name: "Próximo proyecto",
      description: "Digital Experience",
      stack: "COMING SOON",
      url: "",
      previewUrl: "",
      active: false,
    },

    {
      id: "03",
      name: "Próximo proyecto",
      description: "Nuevo proyecto",
      stack: "COMING SOON",
      url: "",
      previewUrl: "",
      active: false,
    },

    {
      id: "04",
      name: "Próximo proyecto",
      description: "Nuevo proyecto",
      stack: "COMING SOON",
      url: "",
      previewUrl: "",
      active: false,
    },
  ];


  const showPreview = (project) => {
    setPreviewProject(project);
  };


  const hidePreview = () => {
    setPreviewProject(null);
  };


  return (
    <Panel
      open={open}
      onClose={() => {
        hidePreview();
        onClose();
      }}
      className="projects-card"
    >
      <div className="projects-wrapper">

        {/* =====================================
            CABECERA
        ===================================== */}

        <header className="projects-header">

          <span className="projects-number">
            02
          </span>

          <span className="projects-title">
            PROYECTOS
          </span>

        </header>


        {/* =====================================
            LISTA
        ===================================== */}

        <div className="projects-list">

          {projects.map((project) => (

            <div
              key={project.id}
              className="project-item"
            >

              {/* =================================
                  PREVIEW
              ================================= */}

              <div
                className={`project-preview ${
                  previewProject?.id === project.id
                    ? "project-preview-visible"
                    : ""
                }`}
                aria-hidden="true"
              >

                {project.previewUrl ? (

                  <div className="project-preview-browser">

                    <div className="preview-browser-bar">

                      <div className="preview-browser-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <span className="preview-browser-url">
                        {project.name}
                      </span>

                    </div>


                    <div className="preview-browser-content">

                      <iframe
                        src={project.previewUrl}
                        title={`Preview ${project.name}`}
                        loading="lazy"
                        tabIndex="-1"
                      />

                    </div>

                  </div>

                ) : (

                  <div className="project-preview-empty">

                    <span className="preview-coming">
                      PRÓXIMAMENTE
                    </span>

                    <strong>
                      {project.name}
                    </strong>

                    <small>
                      Preview pendiente
                    </small>

                  </div>

                )}

              </div>


              {/* =================================
                  PROYECTO ACTIVO
              ================================= */}

              {project.active && project.url ? (

                <a
                  className="project-row project-row-active"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => showPreview(project)}
                  onMouseLeave={hidePreview}
                  onFocus={() => showPreview(project)}
                  onBlur={hidePreview}
                >

                  <span className="project-number">
                    {project.id}
                  </span>


                  <div className="project-info">

                    <h2>
                      {project.name}
                    </h2>

                    <p>
                      {project.description}
                    </p>

                  </div>


                  <span className="project-stack">
                    {project.stack}
                  </span>


                  <span className="project-arrow">
                    ↗
                  </span>

                </a>

              ) : (

                /* =================================
                    PROYECTO DESACTIVADO
                ================================= */

                <button
                  type="button"
                  className="project-row project-row-disabled"
                  onMouseEnter={() => showPreview(project)}
                  onMouseLeave={hidePreview}
                  onFocus={() => showPreview(project)}
                  onBlur={hidePreview}
                >

                  <span className="project-number">
                    {project.id}
                  </span>


                  <div className="project-info">

                    <h2>
                      {project.name}
                    </h2>

                    <p>
                      {project.description}
                    </p>

                  </div>


                  <span className="project-stack">
                    {project.stack}
                  </span>


                  <span className="project-arrow">
                    →
                  </span>

                </button>

              )}

            </div>

          ))}

        </div>

      </div>
    </Panel>
  );
}


export default Projects;