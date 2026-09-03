import { useEffect } from "react";

import "./Panel.css";

function Panel({
  open,
  onClose,
  children,
  className = "",
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="panel-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <section
        className={`panel-card ${className}`}
        role="dialog"
        aria-modal="true"
      >

        <button
          type="button"
          className="panel-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {children}

      </section>

    </div>
  );
}

export default Panel;