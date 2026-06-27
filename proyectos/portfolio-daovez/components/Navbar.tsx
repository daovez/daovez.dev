import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="logo">
        <Image
          src="/images/logo.png"
          alt="Daovez"
          width={220}
          height={60}
          priority
        />
      </a>

      <nav className="nav-links">

      

        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#proyectos">Proyectos</a>


      </nav>
    </header>
  );
}