import "./Navbar.css";

import logo from "../../assets/logo.png";

function Navbar({
  onHome,
  onAbout,
  onProjects,
  onResources,
  onContact,
}) {
  return (
    <nav className="navbar">

      <a
        href="#inicio"
        className="logo"
        onClick={onHome}
        aria-label="Volver al inicio"
      >
        <img
          src={logo}
          alt="Daovez"
        />
      </a>


      <div className="nav-links">

        <button onClick={onAbout}>
          SOBRE MÍ
        </button>

        <button onClick={onProjects}>
          PROYECTOS
        </button>

        <button onClick={onResources}>
          RECURSOS
        </button>

        <button onClick={onContact}>
          CONTACTO
        </button>

      </div>

    </nav>
  );
}

export default Navbar;