export default function Projects() {
  const projects = [
    {
      title: "Portfolio Daovez",
      description: "Portfolio profesional desarrollado con Next.js y Tailwind CSS.",
    },
    {
      title: "Task Manager",
      description: "Aplicación para gestionar tareas y productividad.",
    },
    {
      title: "E-commerce Demo",
      description: "Tienda online moderna con carrito de compra.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Proyectos
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-400">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}