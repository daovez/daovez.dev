"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Desarrollador Java Full Stack",
    "Backend Developer",
    "Frontend Developer",
    "Founder of Daovez",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));

          if (text.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));

          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="intro">Hola, soy</p>

        <h2 className="name">David López Velasco</h2>

        <p className="creator">
          <span className="role-text">{text}</span>
          <span className="typing-cursor">|</span>
        </p>

        <h1 className="hero-title">
          DISEÑO.
          <br />
          DESARROLLO.
          <br />
          SOFTWARE.
        </h1>
      </div>

      <div className="hero-image">
        <Image
          src="/images/david.png"
          alt="David López Velasco"
          fill
          priority
          className="hero-photo"
        />
      </div>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/daovez/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>

        <span className="social-separator"></span>

        <a
          href="https://github.com/daovez"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          gh
        </a>
      </div>
    </section>
  );
}