export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Daovez</p>

      <p>
        Construido con Next.js, React y TypeScript.
      </p>

      <p>
        © {currentYear} Daovez. Todos los derechos reservados.
      </p>
    </footer>
  );
}