import { technologies } from "@/lib/data";

export default function Technologies() {
  return (
    <section id="tecnologias" className="technologies">
      <div className="technologies-header">
        <p className="section-eyebrow">Tecnologías</p>

        <h2>
          Las herramientas con las que construyo productos digitales modernos.
        </h2>
      </div>

      <div className="technologies-grid">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="technology-item"
          >
            {technology.name}
          </div>
        ))}
      </div>
    </section>
  );
}