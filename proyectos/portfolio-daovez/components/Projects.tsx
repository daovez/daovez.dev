import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>

      <p>
        Una selección de proyectos que estoy desarrollando para aprender,
        experimentar y construir productos digitales reales.
      </p>

      {projects.map((project) => (
        <article key={project.title}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <strong>Estado:</strong> {project.status}
          </p>

          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}