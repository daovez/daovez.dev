export default function Technologies() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="technologies" className="py-20">
      <h2 className="text-3xl font-bold mb-6">
        Tecnologías
      </h2>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-lg bg-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}