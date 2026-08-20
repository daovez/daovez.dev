import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./BlogPost.css";

function BlogPost1() {
  const [showTop, setShowTop] = useState(false);
  const [visits, setVisits] = useState(0);

  /* =========================================
     CONTADOR LOCAL DE VISITAS
  ========================================= */

  useEffect(() => {
    const visitKey = "blogPost1Visits";
    const sessionKey = "blogPost1VisitedThisSession";

    const currentVisits =
      Number(localStorage.getItem(visitKey)) || 0;

    /*
      Evita que React StrictMode sume dos visitas
      mientras trabajamos en localhost.
    */
    if (!sessionStorage.getItem(sessionKey)) {
      const newVisits = currentVisits + 1;

      localStorage.setItem(
        visitKey,
        newVisits.toString()
      );

      sessionStorage.setItem(
        sessionKey,
        "true"
      );

      setVisits(newVisits);
    } else {
      setVisits(currentVisits);
    }
  }, []);


  /* =========================================
     MOSTRAR FLECHA AL BAJAR
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
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

        {/* =========================================
            NAVBAR
        ========================================= */}

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
                alt="Daovez"
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


          {/* CONTADOR CENTRAL */}

          <div className="article-visits">

            <span className="article-visits-number">
              {String(visits).padStart(6, "0")}
            </span>

            <span className="article-visits-label">
              VISITAS
            </span>

          </div>


          {/* FOTO DERECHA */}

          <div className="article-profile">

            <img
              src="/foto-daovez.jpg"
              alt="Daovez"
            />

          </div>

        </nav>


        {/* =========================================
            ZONA DE LECTURA
        ========================================= */}

        <div className="article-reading">

          {/* CABECERA */}

          <header className="article-header">

            <span className="article-category">
              PROGRAMACIÓN
            </span>


            <h1>
              Mi primer artículo
            </h1>


            <div className="article-meta">

              <span>
                20 de agosto de 2026
              </span>

              <span className="article-meta-dot">
                ·
              </span>

              <span>
                5 min de lectura
              </span>

            </div>

          </header>


          {/* =========================================
              CONTENIDO
          ========================================= */}

          <div className="article-content">

            <p className="article-intro">
              Este es mi primer artículo en daovez.dev.
              Aquí iré compartiendo lo que voy aprendiendo
              sobre programación, desarrollo web,
              inteligencia artificial y mis propios proyectos.
            </p>


            <p>
              La idea de este blog es documentar mi aprendizaje
              de una forma sencilla y práctica. No solo quiero
              mostrar resultados, sino también explicar el
              proceso que hay detrás de cada proyecto.
            </p>


            <h2>
              Aprender construyendo
            </h2>


            <p>
              Una de las mejores formas de aprender programación
              es crear proyectos reales. Cada problema obliga a
              investigar, probar, equivocarse y encontrar una
              solución.
            </p>


            <p>
              Este mismo portfolio forma parte de ese proceso.
              Mientras lo desarrollo practico React, JavaScript,
              CSS, diseño responsive y organización de
              componentes.
            </p>


            {/* BLOQUE DE CÓDIGO */}

            <pre>
              <code>
{`function aprender() {
  const estudiar = true;
  const practicar = true;

  if (estudiar && practicar) {
    return "Seguir mejorando";
  }
}

console.log(aprender());`}
              </code>
            </pre>


            <h2>
              Qué encontrarás aquí
            </h2>


            <p>
              En este blog iré publicando contenido relacionado
              con programación, desarrollo web, inteligencia
              artificial y los proyectos que vaya desarrollando.
            </p>


            <p>
              La intención es documentar el proceso completo:
              desde las primeras ideas hasta los problemas que
              aparecen durante el desarrollo y las soluciones
              que voy encontrando.
            </p>


            <h2>
              Seguir aprendiendo
            </h2>


            <p>
              Este espacio irá creciendo con el tiempo. Cada
              artículo será una oportunidad para profundizar en
              un concepto, explicar una tecnología o mostrar
              cómo he construido alguno de mis proyectos.
            </p>


            <p>
              La página no tiene una altura limitada. Puedes
              seguir añadiendo contenido, imágenes, código,
              listas y nuevas secciones y el lector simplemente
              continuará desplazándose hacia abajo.
            </p>

          </div>

        </div>

      </article>


      {/* =========================================
          VOLVER ARRIBA
      ========================================= */}

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