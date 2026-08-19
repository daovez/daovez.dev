import { useState } from "react";

import "./StudioLink.css";

function StudioLink() {
  const [leaving, setLeaving] = useState(false);

  const handleStudioClick = (event) => {
    event.preventDefault();

    setLeaving(true);

    setTimeout(() => {
      window.location.href = "https://daovezstudio.com";
    }, 1100);
  };

  return (
    <>
      <a
        href="https://daovezstudio.com"
        className="studio-link"
        onClick={handleStudioClick}
        aria-label="Ir a Daovez Studio"
      >
        <span className="studio-content">

          {/* TEXTO + FLECHA */}
          <span className="studio-main">
            <span>
              DAOVEZ STUDIO
            </span>

            <span className="studio-arrow-line" />
          </span>

        </span>
      </a>


      {/* TRANSICIÓN AL STUDIO */}
      {leaving && (
        <div className="studio-transition">

          <div className="studio-transition-content">

            <span className="transition-small">
              ENTERING
            </span>

            <span className="transition-title">
              DAOVEZ
            </span>

            <span className="transition-title">
              STUDIO
            </span>

          </div>

        </div>
      )}
    </>
  );
}

export default StudioLink;