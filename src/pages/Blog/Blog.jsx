import { Link } from "react-router-dom";

import "./Blog.css";


function Blog() {
  return (
    <main className="blog-page">

      <section className="blog-card">

        {/* =====================================
            CERRAR
        ===================================== */}

        <Link
          to="/"
          className="blog-close"
          aria-label="Volver al portfolio"
        >
          ×
        </Link>


        {/* =====================================
            HEADER
        ===================================== */}

        <header className="blog-header">

          <div className="blog-heading">

            <span className="blog-label">
              BLOG PERSONAL

              <span>
                /
              </span>

              DAOVEZ
            </span>


            <h1>
              Notas, código y aprendizaje.
            </h1>


            <p>
              Programación, desarrollo web, inteligencia artificial y proyectos.
            </p>

          </div>

        </header>


        {/* =====================================
            LISTA
        ===================================== */}

        <section className="blog-list">

          {/* =================================
              ARTÍCULO 01
          ================================= */}

          <Link
            to="/blog/post1"
            className="blog-row blog-row-active"
          >

            <span className="blog-row-number">
              01
            </span>


            <div className="blog-row-info">

              <span className="blog-row-category">
                PROGRAMACIÓN
              </span>


              <h2>
               ☕ JAVA
              </h2>

            </div>


            <span className="blog-row-date">
              03.09.2026
            </span>


            <span className="blog-row-arrow">
              →
            </span>

          </Link>


          {/* =================================
              ARTÍCULO 02
          ================================= */}

          <div className="blog-row blog-row-empty">

            <span className="blog-row-number">
              02
            </span>


            <div className="blog-row-info">

              <span className="blog-row-category">
                PRÓXIMAMENTE
              </span>


              <h2>
                Nuevo artículo
              </h2>

            </div>


            <span className="blog-row-date">
              —
            </span>


            <span className="blog-row-arrow">
              →
            </span>

          </div>


          {/* =================================
              ARTÍCULO 03
          ================================= */}

          <div className="blog-row blog-row-empty">

            <span className="blog-row-number">
              03
            </span>


            <div className="blog-row-info">

              <span className="blog-row-category">
                PRÓXIMAMENTE
              </span>


              <h2>
                Nuevo artículo
              </h2>

            </div>


            <span className="blog-row-date">
              —
            </span>


            <span className="blog-row-arrow">
              →
            </span>

          </div>


          {/* =================================
              ARTÍCULO 04
          ================================= */}

          <div className="blog-row blog-row-empty">

            <span className="blog-row-number">
              04
            </span>


            <div className="blog-row-info">

              <span className="blog-row-category">
                PRÓXIMAMENTE
              </span>


              <h2>
                Nuevo artículo
              </h2>

            </div>


            <span className="blog-row-date">
              —
            </span>


            <span className="blog-row-arrow">
              →
            </span>

          </div>

        </section>


        {/* =====================================
            FOOTER
        ===================================== */}

        <footer className="blog-footer">

          <span
            style={{
              marginLeft: "auto",
            }}
          >
            BLOG PERSONAL
          </span>

        </footer>

      </section>

    </main>
  );
}


export default Blog;