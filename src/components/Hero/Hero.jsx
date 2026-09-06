import { useEffect, useState } from "react";

import "./Hero.css";


const HERO_TAG = "DESARROLLADOR FULL STACK";

const TYPE_MS = 80;
const DELETE_MS = 75;
const HOLD_MS = 2000;
const PAUSE_MS = 500;


function getReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}


function Hero() {
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion);
  const [text, setText] = useState(
    getReducedMotion() ? HERO_TAG : ""
  );
  const [phase, setPhase] = useState("typing");


  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const apply = () => {
      const reduced = media.matches;

      setReducedMotion(reduced);

      if (reduced) {
        setText(HERO_TAG);
        setPhase("holding");
      }
    };

    apply();

    media.addEventListener("change", apply);

    return () => {
      media.removeEventListener("change", apply);
    };
  }, []);


  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    let timeoutId;

    if (phase === "typing") {
      if (text.length < HERO_TAG.length) {
        timeoutId = window.setTimeout(() => {
          setText(HERO_TAG.slice(0, text.length + 1));
        }, TYPE_MS);
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      timeoutId = window.setTimeout(() => {
        setPhase("deleting");
      }, HOLD_MS);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeoutId = window.setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETE_MS);
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      timeoutId = window.setTimeout(() => {
        setPhase("typing");
      }, PAUSE_MS);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [phase, reducedMotion, text]);


  const showCursor =
    !reducedMotion && phase !== "deleting";


  return (
    <section className="hero">
      <div className="hero-left">
        {reducedMotion ? (
          <p className="hero-tag">
            {HERO_TAG}
          </p>
        ) : (
          <p
            className="hero-tag"
            aria-label={HERO_TAG}
          >
            <span
              className="hero-tag-sizer"
              aria-hidden="true"
            >
              {HERO_TAG}
            </span>

            <span
              className="hero-tag-typed"
              aria-hidden="true"
            >
              {text}

              {showCursor ? (
                <span className="hero-tag-cursor">
                  |
                </span>
              ) : null}
            </span>
          </p>
        )}

        <h1>
          <span>Imagino</span>
          <span>Desarrollo y</span>
          <span>Comparto.</span>
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
