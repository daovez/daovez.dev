import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import javaPost from "../../content/blog/Java.md?raw";

import "./BlogPost.css";


function BlogPost1() {
  const [showTop, setShowTop] = useState(false);
  const [visits] = useState(() => {
    const visitKey =
      "javaDesdeCeroVisits";

    const sessionKey =
      "javaDesdeCeroVisitedThisSession";

    const currentVisits =
      Number(
        localStorage.getItem(
          visitKey
        )
      ) || 0;

    if (
      sessionStorage.getItem(
        sessionKey
      )
    ) {
      return currentVisits;
    }

    const newVisits =
      currentVisits + 1;

    localStorage.setItem(
      visitKey,
      newVisits.toString()
    );

    sessionStorage.setItem(
      sessionKey,
      "true"
    );

    return newVisits;
  });


  /* =========================================
     PREPARAR MARKDOWN
  ========================================= */

  const markdownContent = javaPost
    // Quitar frontmatter
    .replace(
      /^---[\s\S]*?---\s*/,
      ""
    )

    // Quitar el H1 del Markdown
    // porque ya mostramos el título arriba
    .replace(
      /^#\s+.*\n+/,
      ""
    );


  /* =========================================
     MOSTRAR FLECHA AL BAJAR
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(
        window.scrollY > 350
      );
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* =========================================
     VOLVER ARRIBA
  ========================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <main className="article-page">

      <article className="article-container">


        {/* =====================================
            NAVBAR
        ===================================== */}

        <nav className="article-navbar">


          {/* IZQUIERDA */}

          <div className="article-navbar-left">

            <Link
              to="/blog"
              className="article-nav-logo"
              aria-label="Volver al blog"
            >
              <img
                src="/logo.png"
                alt="Portfolio de David López, Daovez"
              />
            </Link>


            <div className="article-nav-info">

              <span>
                ARTÍCULO 01
              </span>


              <span className="article-nav-separator">
                /
              </span>


              <span>
                POR DAOVEZ
              </span>

            </div>

          </div>


          {/* VISITAS */}

          <div className="article-visits">

            <span className="article-visits-number">
              {String(visits).padStart(
                6,
                "0"
              )}
            </span>


            <span className="article-visits-label">
              VISITAS
            </span>

          </div>


          {/* FOTO */}

          <div className="article-profile">

            <img
              src="/foto-daovez.jpg"
              alt="David López, desarrollador Full Stack"
            />

          </div>

        </nav>


        {/* =====================================
            ZONA DE LECTURA
        ===================================== */}

        <div className="article-reading">


          {/* CABECERA */}

          <header className="article-header">

            <span className="article-category">
              PROGRAMACIÓN
            </span>


            <h1>
              ☕ Java desde cero
            </h1>


            <div className="article-meta">

              <span>
                3 de septiembre de 2026
              </span>


              <span className="article-meta-dot">
                ·
              </span>


              <span>
                5 min de lectura
              </span>

            </div>

          </header>


          {/* =====================================
              MARKDOWN
          ===================================== */}

          <div className="article-content">

            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
              ]}
            >
              {markdownContent}
            </ReactMarkdown>

          </div>

        </div>

      </article>


      {/* =====================================
          VOLVER ARRIBA
      ===================================== */}

      {showTop && (
        <button
          type="button"
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}

    </main>
  );
}


export default BlogPost1;
