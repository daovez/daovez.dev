import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
    >

      <div className="hero-left">

        <p className="hero-tag">
          DESARROLLADOR FULL STACK
        </p>

        <h1>
          Imagino
          <br />
          Desarrollo y
          <br />
          Comparto.
        </h1>

      </div>


      <div className="hero-center">

        <div className="visual">
          DV
        </div>

      </div>


      <div className="hero-right">

        <span>
          01
        </span>

        <p>
          PORTFOLIO
          <br />
          2026
        </p>

      </div>

    </section>
  );
}

export default Hero;