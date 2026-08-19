import "./Projects.css";
import Panel from "../../components/Panel/Panel";

function Projects({ open, onClose }) {
  const projects = [
    {
      id: "01",
      name: "daovez.dev",
      description: "Portfolio personal",
      stack: "REACT / VITE",
      active: true,
    },
    {
      id: "02",
      name: "Próximo proyecto",
      description: "",
      stack: "COMING SOON",
      active: false,
    },
    {
      id: "03",
      name: "Próximo proyecto",
      description: "",
      stack: "COMING SOON",
      active: false,
    },
  ];

  return (
    <Panel
      open={open}
      onClose={onClose}
      className="projects-card"
    >
      <div className="projects-wrapper">

        {/* HEADER */}

        <header className="projects-header">
          <span className="projects-number">
            02
          </span>

          <span className="projects-title">
            PROYECTOS
          </span>
        </header>


        {/* LISTA */}

        <div className="projects-list">

          {projects.map((project) => (
            <button
              key={project.id}
              className={`project-row ${
                project.active
                  ? "project-row-active"
                  : "project-row-disabled"
              }`}
            >
              <span className="project-number">
                {project.id}
              </span>


              <div className="project-info">

                <h2>
                  {project.name}
                </h2>

                {project.description && (
                  <p>
                    {project.description}
                  </p>
                )}

              </div>


              <span className="project-stack">
                {project.stack}
              </span>


              <span className="project-arrow">
                →
              </span>

            </button>
          ))}

        </div>

      </div>
    </Panel>
  );
}

export default Projects;