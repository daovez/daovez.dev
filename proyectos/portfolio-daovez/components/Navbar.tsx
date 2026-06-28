"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY < 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `
      translate(${x * 0.35}px, ${y * 0.35}px)
    `;
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  return (
    <header className="navbar">
      <a
        href="#inicio"
        className={`logo ${showLogo ? "show" : "hide"}`}
      >
        <img
          src="/images/logo.png"
          alt="Daovez"
        />
      </a>

      <nav className="nav-links">
        <a
          href="#sobre-mi"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Sobre mí
        </a>

        <a
          href="#tecnologias"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Tecnologías
        </a>

        <a
          href="#proyectos"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Proyectos
        </a>
      </nav>
    </header>
  );
}