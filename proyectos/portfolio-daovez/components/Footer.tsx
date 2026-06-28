export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
    <a href="#inicio" className="footer-logo">
  <img src="/images/logo.png" alt="Daovez" />
</a>
      <p>
        Construido con Next.js, React y TypeScript.
      </p>

      <p>
        © {currentYear} Daovez. Todos los derechos reservados.
      </p>
    </footer>
  );
}