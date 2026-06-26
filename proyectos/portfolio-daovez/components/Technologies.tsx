import { technologies } from "@/lib/data";

export default function Technologies() {
  return (
    <section id="tecnologias">
      <h2>Tecnologías</h2>

      <p>
        Estas son las tecnologías principales que estoy utilizando para construir
        este portfolio profesional.
      </p>

      <div>
        {technologies.map((technology) => (
          <article key={technology.name}>
            <h3>{technology.name}</h3>
            <p>{technology.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}