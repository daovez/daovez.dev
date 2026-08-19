import "./Contact.css";

import Panel from "../../components/Panel/Panel";

function Contact({
  open,
  onClose,
}) {
  return (
    <Panel
      open={open}
      onClose={onClose}
      className="contact-panel"
    >

      <div className="contact-content">

        <span className="contact-number">
          04
        </span>

        <p className="contact-label">
          CONTACTO
        </p>

        <h2>
          Let's build
          <br />
          something.
        </h2>

        <p className="contact-description">
          Si quieres hablar sobre una
          oportunidad, colaboración o
          proyecto, puedes encontrarme aquí.
        </p>

      </div>


      <div className="contact-links">

        <a
          href="https://github.com/daovez"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            GITHUB
          </span>

          <span>
            ↗
          </span>
        </a>


        <a
          href="mailto:yo@daovez.com"
        >
          <span>
            EMAIL
          </span>

          <span>
            ↗
          </span>
        </a>


        <a
          href="https://www.linkedin.com/in/daovez/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            LINKEDIN
          </span>

          <span>
            ↗
          </span>
        </a>

      </div>

    </Panel>
  );
}

export default Contact;