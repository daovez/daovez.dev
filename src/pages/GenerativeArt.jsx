import { Link } from "react-router-dom";

import "./GenerativeArt.css";


function GenerativeArt() {
  const works = [
    {
      id: "001",
      title: "Untitled 001",
      type: "P5.JS",
    },

    {
      id: "002",
      title: "Untitled 002",
      type: "GENERATIVE",
    },

    {
      id: "003",
      title: "Untitled 003",
      type: "PROCESSING",
    },

    {
      id: "004",
      title: "Untitled 004",
      type: "P5.JS",
    },

    {
      id: "005",
      title: "Untitled 005",
      type: "GENERATIVE",
    },

    {
      id: "006",
      title: "Untitled 006",
      type: "PROCESSING",
    },

    {
      id: "007",
      title: "Untitled 007",
      type: "P5.JS",
    },

    {
      id: "008",
      title: "Untitled 008",
      type: "GENERATIVE",
    },

    {
      id: "009",
      title: "Untitled 009",
      type: "PROCESSING",
    },
  ];


  return (
    <main className="generative-page">

      <section className="generative-shell">

        {/* =====================================
            HEADER
        ===================================== */}

        <header className="generative-header">

          <Link
            to="/"
            className="generative-back"
            aria-label="Volver al portfolio"
          >
            ←
          </Link>


          <div className="generative-brand">

            <span className="generative-yellow-mark" />

            <span>
              GENERATIVE ART
            </span>

          </div>


          <span className="generative-user">
            DAOVEZ
          </span>

        </header>


        {/* =====================================
            PERFIL
        ===================================== */}

        <section className="generative-profile">

          <div className="generative-avatar">
            <span />
          </div>


          <div className="generative-profile-info">

            <h1>
              daovez
            </h1>


            <p className="generative-handle">
              @generative.art
            </p>


            <p className="generative-bio">
              Arte generativo, experimentos visuales,
              Processing y p5.js.
            </p>


            <div className="generative-stats">

              <span>
                <strong>
                  09
                </strong>

                obras
              </span>


              <span>
                <strong>
                  P5
                </strong>

                javascript
              </span>


              <span>
                <strong>
                  2026
                </strong>

                archive
              </span>

            </div>

          </div>

        </section>


        {/* =====================================
            SEPARADOR
        ===================================== */}

        <div className="generative-divider">

          <span>
            ARCHIVE
          </span>

          <span>
            001 — 009
          </span>

        </div>


        {/* =====================================
            GRID
        ===================================== */}

        <section className="generative-grid">

          {works.map((work, index) => (

            <article
              key={work.id}
              className={`generative-work generative-work-${index + 1}`}
            >

              {/* =================================
                  OBRA
              ================================= */}

              <div className="generative-work-art">

                <span
                  className="
                    generative-art-shape
                    generative-art-shape-a
                  "
                />

                <span
                  className="
                    generative-art-shape
                    generative-art-shape-b
                  "
                />

                <span
                  className="
                    generative-art-shape
                    generative-art-shape-c
                  "
                />

              </div>


              {/* =================================
                  HOVER
              ================================= */}

              <div className="generative-work-overlay">

                <span>
                  {work.id}
                </span>


                <div>

                  <strong>
                    {work.title}
                  </strong>

                  <small>
                    {work.type}
                  </small>

                </div>

              </div>

            </article>

          ))}

        </section>

      </section>

    </main>
  );
}


export default GenerativeArt;