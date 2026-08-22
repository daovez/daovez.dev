import "./Navbar.css";
import logo from "../../assets/logo.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


function Navbar({
  onHome,
  onAbout,
  onProjects,
  onBlog,
  onGenerativeArt,
}) {
  return (
    <nav className="navbar">

      {/* =========================================
          IZQUIERDA
      ========================================= */}

      <div className="brand">

        <button
          className="logo"
          onClick={onHome}
          aria-label="Volver al inicio"
          type="button"
        >
          <img
            src={logo}
            alt="Daovez"
          />
        </button>


        <span className="brand-text">
          portafolio daovez
        </span>

      </div>


      {/* =========================================
          DERECHA
      ========================================= */}

      <div className="navbar-right">

        {/* MENÚ */}

        <div className="nav-links">

          <button
            type="button"
            onClick={onAbout}
          >
            SOBRE MÍ
          </button>


          <button
            type="button"
            onClick={onProjects}
          >
            PROYECTOS
          </button>


          <button
            type="button"
            onClick={onBlog}
          >
            BLOG
          </button>


          <button
            type="button"
            onClick={onGenerativeArt}
          >
            ARTE GENERATIVO
          </button>

        </div>


        {/* =========================================
            REDES
        ========================================= */}

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
            href="#"
            aria-label="X"
          >
            <FaXTwitter />
          </a>


          <a
            href="#"
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