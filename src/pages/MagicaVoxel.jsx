import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MagicaVoxel.css";


const works = [
  {
    id: "01",
    title: "Obra 01",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-01.jpg",
  },

  {
    id: "02",
    title: "Obra 02",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-02.jpg",
  },

  {
    id: "03",
    title: "Obra 03",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-03.jpg",
  },

  {
    id: "04",
    title: "Obra 04",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-04.jpg",
  },

  {
    id: "05",
    title: "Obra 05",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-05.jpg",
  },

  {
    id: "06",
    title: "Obra 06",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-06.jpg",
  },

  {
    id: "07",
    title: "Obra 07",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-07.jpg",
  },

  {
    id: "08",
    title: "Obra 08",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-08.jpg",
  },

  {
    id: "09",
    title: "Obra 09",
    description: "MagicaVoxel",
    image: "/magicavoxel/obra-09.jpg",
  },
];


function MagicaVoxel() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] =
    useState(null);


  const activeWork =
    activeIndex !== null
      ? works[activeIndex]
      : null;


  /* =========================================
     VOLVER
  ========================================= */

  const goBack = () => {
    navigate("/");
  };


  /* =========================================
     ABRIR OBRA
  ========================================= */

  const openWork = (index) => {
    setActiveIndex(index);
  };


  /* =========================================
     CERRAR OBRA
  ========================================= */

  const closeWork = () => {
    setActiveIndex(null);
  };


  /* =========================================
     OBRA ANTERIOR
  ========================================= */

  const previousWork = (event) => {
    event.stopPropagation();

    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (
        current -
        1 +
        works.length
      ) % works.length;
    });
  };


  /* =========================================
     OBRA SIGUIENTE
  ========================================= */

  const nextWork = (event) => {
    event.stopPropagation();

    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }

      return (
        current +
        1
      ) % works.length;
    });
  };


  /* =========================================
     TECLADO
  ========================================= */

  useEffect(() => {
    document.body.style.overflow =
      activeIndex === null
        ? ""
        : "hidden";

    const handleKeyDown = (event) => {
      if (activeIndex === null) {
        return;
      }


      if (event.key === "Escape") {
        setActiveIndex(null);
      }


      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (
          current -
          1 +
          works.length
        ) % works.length);
      }


      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (
          current +
          1
        ) % works.length);
      }
    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [activeIndex]);


  return (
    <main className="voxel-page">

      <div className="voxel-shell">


        {/* =====================================
            HEADER
        ===================================== */}

        <header className="voxel-header">

          <button
            type="button"
            className="voxel-back"
            onClick={goBack}
            aria-label="Volver al portfolio"
          >
            ←
          </button>


          <div className="voxel-brand">

            <span className="voxel-brand-mark" />


            <span className="voxel-brand-title">
              MAGICA VOXEL
            </span>


            <span className="voxel-brand-separator">
              /
            </span>


            <span className="voxel-brand-section">
              GALERÍA
            </span>

          </div>


          <span className="voxel-daovez">
            DAOVEZ
          </span>

        </header>


        {/* =====================================
            GALERÍA
        ===================================== */}

        <section className="voxel-gallery-section">

          <div className="voxel-gallery-header">

            <span className="voxel-gallery-title">
              OBRAS
            </span>


            <span className="voxel-gallery-count">
              {String(works.length).padStart(
                2,
                "0"
              )}
            </span>

          </div>


          <div className="voxel-gallery">

            {works.map(
              (work, index) => (

                <button
                  key={work.id}
                  type="button"
                  className="voxel-work"
                  onClick={() => (
                    openWork(index)
                  )}
                  aria-label={`Abrir ${work.title}`}
                >

                  <img
                    src={work.image}
                    alt={`Arte voxel creado con MagicaVoxel: ${work.title}`}
                  />


                  <div className="voxel-work-overlay">

                    <span>
                      {work.id}
                    </span>


                    <strong>
                      {work.title}
                    </strong>

                  </div>

                </button>

              )
            )}

          </div>

        </section>

      </div>


      {/* =====================================
          LIGHTBOX
      ===================================== */}

      {activeWork && (

        <div
          className="voxel-lightbox"
          onClick={closeWork}
        >

          <div
            className="voxel-lightbox-card"
            onClick={(event) => (
              event.stopPropagation()
            )}
          >

            <button
              type="button"
              className="voxel-lightbox-close"
              onClick={closeWork}
              aria-label="Cerrar"
            >
              ×
            </button>


            <button
              type="button"
              className="voxel-lightbox-arrow voxel-lightbox-arrow-left"
              onClick={previousWork}
              aria-label="Obra anterior"
            >
              ‹
            </button>


            <button
              type="button"
              className="voxel-lightbox-arrow voxel-lightbox-arrow-right"
              onClick={nextWork}
              aria-label="Obra siguiente"
            >
              ›
            </button>


            <div className="voxel-lightbox-image-wrapper">

              <img
                src={activeWork.image}
                alt={`Arte voxel creado con MagicaVoxel: ${activeWork.title}`}
                className="voxel-lightbox-image"
              />

            </div>


            <div className="voxel-lightbox-info">

              <h2>
                {activeWork.title}
              </h2>


              <p>
                {activeWork.description}
              </p>


              <span>
                {activeWork.id}

                {" / "}

                {String(
                  works.length
                ).padStart(
                  2,
                  "0"
                )}
              </span>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


export default MagicaVoxel;
