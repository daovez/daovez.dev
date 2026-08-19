import "./Navbar.css";
import logo from "../../assets/logo.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Navbar({
  onHome,
  onAbout,
  onProjects,
  onBlog,
}) {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <button
        className="logo"
        onClick={onHome}
        aria-label="Volver al inicio"
      >
        <img
          src={logo}
          alt="Daovez"
        />
      </button>

      {/* DERECHA */}
      <div className="navbar-right">
        <div className="nav-links">
          <button onClick={onAbout}>
            SOBRE MÍ
          </button>

          <button onClick={onProjects}>
            PROYECTOS
          </button>

          <button onClick={onBlog}>
            BLOG
          </button>
        </div>

        {/* REDES */}
        <div className="nav-socials">
          <a
            href="https://github.com/daovez"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/daovez/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/daovez"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/daovez/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;