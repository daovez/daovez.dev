import "./Resources.css";

import Panel from "../../components/Panel/Panel";

function Resources({
  open,
  onClose,
}) {
  const resources = [
    "Java",
    "JavaScript",
    "React",
    "HTML / CSS",
    "SQL",
    "Git / GitHub",
  ];

  return (
    <Panel
      open={open}
      onClose={onClose}
      className="resources-panel"
    >

      <header className="resources-header">

        <span>
          03
        </span>

        <p>
          RECURSOS
        </p>

        <h2>
          Learning
          <br />
          in public.
        </h2>

        <p className="resources-description">
          Apuntes, conceptos y recursos
          que voy creando mientras avanzo
          como desarrollador Full Stack.
        </p>

      </header>


      <div className="resources-list">

        {resources.map(
          (resource, index) => (
            <button
              className="resource-item"
              key={resource}
            >

              <span>
                {String(
                  index + 1
                ).padStart(
                  2,
                  "0"
                )}
              </span>

              <strong>
                {resource}
              </strong>

              <span>
                →
              </span>

            </button>
          )
        )}

      </div>

    </Panel>
  );
}

export default Resources;