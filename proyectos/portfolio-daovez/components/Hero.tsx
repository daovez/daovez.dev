"use client";

import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const roles = [
    "<Designer & Developer/>",
    "<Digital Ilustrator/>"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
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
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      if (contentRef.current) {
        contentRef.current.style.transform =
          `translate(${x * 5}px, ${y * 5}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="inicio" className="hero">
      <div ref={contentRef} className="hero-content">
        <p className="intro">Hola, soy</p>

        <h2 className="name">David López Velasco</h2>

        <p className="creator">
          <span className="role-text">{text}</span>
          <span className="typing-cursor">|</span>
        </p>

        <h1 className="hero-title">
          IMAGINA
          <br />
          DESARROLLA
          <br />
          COMPARTE
        </h1>
      </div>

      <div className="hero-image">
        <img
          src="/images/hero-dev.jpg"
          alt="David programando"
          className="hero-photo"
        />
      </div>

      <div className="hero-email">
        <a href="mailto:yo@daovez.com">
          yo@daovez.com
        </a>
      </div>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/daovez/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedinIn />
        </a>

        <span></span>

        <a
          href="https://github.com/daovez"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}