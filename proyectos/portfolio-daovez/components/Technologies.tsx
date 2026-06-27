import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiMysql,
  SiSpring,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export default function Technologies() {
  return (
    <section id="tecnologias" className="technologies">
      <p className="section-eyebrow">Tecnologías:</p>

      <div className="tech-logos">
        <FaJava />

        <SiHtml5 />
        <SiCss />
        <SiJavascript />

        <SiReact />
        <SiNextdotjs />
        <SiTypescript />

        <SiSpring />
        <SiMysql />

        <SiGit />
        <SiGithub />
      </div>
    </section>
  );
}