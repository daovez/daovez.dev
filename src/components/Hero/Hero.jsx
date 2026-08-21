import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">DESARROLLADOR FULL STACK</p>

        <h1>
          Imagino
          <br />
          Desarrollo y
          <br />
          Comparto.
        </h1>
      </div>

      <div className="hero-center">
        <div className="visual">DV</div>
      </div>

      <div className="hero-right hero-right-hidden" />
    </section>
  );
}

export default Hero;