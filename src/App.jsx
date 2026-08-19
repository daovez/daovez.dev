import "./App.css";
import logo from "./assets/logo.png";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />

      <main className="page">
        <section className="portfolio-card">

          {/* NAVBAR */}
          <nav className="navbar">

            <a
              href="#inicio"
              className="logo"
            >
              <img
                src={logo}
                alt="Logo de Daovez"
              />
            </a>

            <div className="nav-links">

              <a href="#inicio">
                SOBRE MÍ
              </a>

              <a href="#proyectos">
                PROYECTOS
              </a>

              <a href="#sobre-mi">
                RECURSOS
              </a>

              <a href="#contacto">
                CONTACTO
              </a>

            </div>

          </nav>


          {/* HERO */}
          <section
            className="hero"
            id="inicio"
          >

            {/* IZQUIERDA */}
            <div className="hero-left">

              <p className="hero-tag">
                DESARROLLADOR FULL STACK
              </p>

              <h1>
                Diseño.
                <br />
                Código.
                <br />
                Creatividad.
              </h1>

              <p className="hero-description">
                Desarrollo experiencias digitales,
                aplicaciones web y proyectos creativos.
              </p>

            </div>


            {/* CENTRO */}
            <div className="hero-center">

              <div className="visual">
                DV
              </div>

            </div>


            {/* DERECHA */}
            <div className="hero-right">

              <span>
                01
              </span>

              <p>
                PORTFOLIO
                <br />
                2026
              </p>

            </div>

          </section>


          {/* FOOTER */}
          <footer className="card-footer">

            <span>
              DAOVEZ.DEV
            </span>

            <a
              href="#proyectos"
              className="scroll"
              aria-label="Ir a proyectos"
            >
              ↓
            </a>

          </footer>

        </section>
      </main>
    </>
  );
}

export default App;