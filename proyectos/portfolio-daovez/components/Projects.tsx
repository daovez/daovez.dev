import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="proyectos">
      <h2>Proyectos</h2>

      <p>
        Estos son algunos proyectos que estoy construyendo para practicar y
        demostrar mis habilidades como desarrollador.
      </p>

      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <p>Estado: {project.status}</p>

            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}