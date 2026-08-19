import "./Projects.css";

import Panel from "../../components/Panel/Panel";

function Projects({
  open,
  onClose,
}) {
  return (
    <Panel
      open={open}
      onClose={onClose}
      className="projects-panel"
    >

      <header className="section-header">

        <span>
          02
        </span>

        <p>
          PROYECTOS
        </p>

        <h2>
          Selected
          <br />
          Work.
        </h2>

      </header>


      <div className="project-list">

        <article className="project-item">

          <span className="project-number">
            01
          </span>

          <div>
            <h3>
              daovez.dev
            </h3>

            <p>
              Portfolio personal
            </p>
          </div>

          <span className="project-stack">
            REACT / VITE
          </span>

        </article>


        <article className="project-item">

          <span className="project-number">
            02
          </span>

          <div>
            <h3>
              Próximo proyecto
            </h3>

            <p>
              En desarrollo
            </p>
          </div>

          <span className="project-stack">
            COMING SOON
          </span>

        </article>


        <article className="project-item">

          <span className="project-number">
            03
          </span>

          <div>
            <h3>
              Próximo proyecto
            </h3>

            <p>
              En desarrollo
            </p>
          </div>

          <span className="project-stack">
            COMING SOON
          </span>

        </article>

      </div>

    </Panel>
  );
}

export default Projects;