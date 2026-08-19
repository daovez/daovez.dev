import "./Blog.css";

function Blog({ onBack }) {
  const posts = [
    {
      id: "01",
      title: "¿Qué es Java?",
      date: "20.08.2026",
    },
    {
      id: "02",
      title: "Creando daovez.dev",
      date: "PRÓXIMAMENTE",
    },
    {
      id: "03",
      title: "Nuevo artículo",
      date: "PRÓXIMAMENTE",
    },
  ];

  return (
    <main className="blog-page">
      {/* VOLVER */}
      <button
        className="blog-back"
        onClick={onBack}
        aria-label="Volver al portfolio"
      >
        ←
      </button>

      <div className="blog-container">
        {/* CABECERA */}
        <header className="blog-header">
          <h1>
            daovez <span>/</span> blog
          </h1>
        </header>

        {/* POSTS */}
        <section className="blog-posts">
          {posts.map((post) => (
            <button
              className="blog-post"
              key={post.id}
            >
              <span className="blog-post-number">
                {post.id}
              </span>

              <h2>
                {post.title}
              </h2>

              <span className="blog-post-date">
                {post.date}
              </span>

              <span className="blog-post-arrow">
                →
              </span>
            </button>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="blog-footer">
          <span>DAOVEZ.DEV</span>
          <span>2026</span>
        </footer>
      </div>
    </main>
  );
}

export default Blog;