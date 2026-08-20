import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  return (
    <main className="blog-page">

      <section className="blog-card">

        {/* =========================
            CABECERA
        ========================= */}

        <header className="blog-header">

          <Link to="/" className="blog-back">
            ← Volver
          </Link>

          <div className="blog-heading">

            <span className="blog-label">
              BLOG PERSONAL
              <span>/</span>
              DAOVEZ
            </span>

            <h1>
              Notas, código
              <br />
              y aprendizaje.
            </h1>

            <p>
              Programación, desarrollo web,
              inteligencia artificial y proyectos.
            </p>

          </div>

        </header>


        {/* =========================
            ARTÍCULOS
        ========================= */}

        <section className="blog-list">

          {/* POST 01 */}

          <Link
            to="/blog/post1"
            className="blog-row blog-row-active"
          >
            <span className="blog-number">
              01
            </span>

            <div className="blog-row-main">

              <span className="blog-category">
                PROGRAMACIÓN
              </span>

              <h2>
                Título del primer artículo
              </h2>

            </div>

            <span className="blog-date">
              20.08.2026
            </span>

            <span className="blog-arrow">
              →
            </span>

          </Link>


          {/* POST 02 */}

          <div className="blog-row blog-row-empty">

            <span className="blog-number">
              02
            </span>

            <div className="blog-row-main">

              <span className="blog-category">
                PRÓXIMAMENTE
              </span>

              <h2>
                Nuevo artículo
              </h2>

            </div>

            <span className="blog-date">
              —
            </span>

            <span className="blog-arrow">
              →
            </span>

          </div>


          {/* POST 03 */}

          <div className="blog-row blog-row-empty">

            <span className="blog-number">
              03
            </span>

            <div className="blog-row-main">

              <span className="blog-category">
                PRÓXIMAMENTE
              </span>

              <h2>
                Nuevo artículo
              </h2>

            </div>

            <span className="blog-date">
              —
            </span>

            <span className="blog-arrow">
              →
            </span>

          </div>


          {/* POST 04 */}

          <div className="blog-row blog-row-empty">

            <span className="blog-number">
              04
            </span>

            <div className="blog-row-main">

              <span className="blog-category">
                PRÓXIMAMENTE
              </span>

              <h2>
                Nuevo artículo
              </h2>

            </div>

            <span className="blog-date">
              —
            </span>

            <span className="blog-arrow">
              →
            </span>

          </div>

        </section>


        {/* =========================
            FOOTER
        ========================= */}

        <footer className="blog-footer">

          <span>
            DAOVEZ.DEV
          </span>

          <span>
            BLOG PERSONAL
          </span>

        </footer>

      </section>

    </main>
  );
}

export default Blog;