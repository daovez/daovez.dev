import "./About.css";

import Panel from "../../components/Panel/Panel";

function About({
  open,
  onClose,
}) {
  return (
    <Panel
      open={open}
      onClose={onClose}
      className="about-card"
    >

      <div className="about-info">

        <span className="about-number">
          01
        </span>

        <p className="about-label">
          SOBRE MÍ
        </p>

        <h2>
          Desarrollo ideas
          <br />
          para la web.
        </h2>

        <p className="about-text">
          Soy desarrollador Full Stack
          enfocado en crear experiencias
          digitales modernas, funcionales
          y visualmente cuidadas.
        </p>

        <p className="about-text">
          Desarrollo proyectos combinando
          frontend y backend mientras
          continúo ampliando mis
          conocimientos en desarrollo
          de software.
        </p>

        <div className="about-location">
          ANTEQUERA · MÁLAGA · ESPAÑA
        </div>

      </div>


      <div className="skills">

        <div className="skills-header">

          <p>
            SKILLS
          </p>

          <span>
            STACK / 2026
          </span>

        </div>


        <table className="skills-table">

          <tbody>

            <tr>
              <td>01</td>
              <td>Java</td>
              <td>Backend / POO</td>
            </tr>

            <tr>
              <td>02</td>
              <td>JavaScript</td>
              <td>Frontend</td>
            </tr>

            <tr>
              <td>03</td>
              <td>React</td>
              <td>Frontend</td>
            </tr>

            <tr>
              <td>04</td>
              <td>HTML / CSS</td>
              <td>Web</td>
            </tr>

            <tr>
              <td>05</td>
              <td>SQL</td>
              <td>Database</td>
            </tr>

            <tr>
              <td>06</td>
              <td>Git / GitHub</td>
              <td>Version Control</td>
            </tr>

          </tbody>

        </table>

      </div>

    </Panel>
  );
}

export default About;