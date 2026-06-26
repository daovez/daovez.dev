export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Contacto
      </h2>

      <p className="text-zinc-400 mb-6">
        Si quieres contactar conmigo, puedes hacerlo a través de:
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="mailto:davi_lv86@hotmail.com"
          className="text-violet-500 hover:text-violet-400"
        >
          📧 Email
        </a>

        <a
          href="https://github.com/daovez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 hover:text-violet-400"
        >
          💻 GitHub
        </a>

        <a
          href="#"
          className="text-violet-500 hover:text-violet-400"
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}