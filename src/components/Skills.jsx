import React from "react";

function Skills() {
  return (
    <div className="skillStructure">
      <h3>Hard Skills</h3>
      <div className="HardSkills">
        <div class="contenedor-imagen">
          <img src="/react.png" alt="React" />
        </div>

        <div class="contenedor-imagen">
          <img src="/javascript.svg" alt="JavaScript" />
        </div>

        <div class="contenedor-imagen">
          <img src="/html5.svg" alt="HTML5" />
        </div>

        <div class="contenedor-imagen">
          <img src="/css.svg" alt="CSS" />
        </div>

        <div class="contenedor-imagen">
          <img src="/bootstrap.jpg" alt="Bootstrap" />
        </div>

        <div class="contenedor-imagen">
          <img src="/visualstudio.png" alt="Visual Studio Code" />
        </div>

        <div class="contenedor-imagen">
          <img src="/git.png" alt="Git" />
        </div>

        <div class="contenedor-imagen">
          <img src="/github.png" alt="GitHub" />
        </div>

        <div class="contenedor-imagen">
          <img src="/npm.png" alt="npm" />
        </div>

        <div class="contenedor-imagen">
          <img src="/express.png" alt="express" />
        </div>

        <div class="contenedor-imagen">
          <img src="/mongo.png" alt="mongoDB" />
        </div>

        <div class="contenedor-imagen">
          <img src="/node.png" alt="NodeJS" />
        </div>
      </div>
      <h3>Soft Skills</h3>
      <div  className="softSkills">
        <div class="contenedor-imagen2">
          {/* Debes poder explicar tus ideas y escuchar las necesidades y expectativas de los demás de manera efectiva */}
          <img src="/effective.jpg" alt="Effective Communication" />
        </div>
        <div class="contenedor-imagen2">
          {/* Permite analizar problemas, identificar soluciones y tomar decisiones informadas */}
        </div>
        <div class="contenedor-imagen2">
          <img src="/critical.jpg" alt="Critical Thinking" />
          {/* Habilidad para resolver problemas de manera eficiente y encontrar soluciones efectivas es esencial */}
        </div>
        <div class="contenedor-imagen2">
          <img src="/problem.png" alt="Problem Solving" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/teamwork.png" alt="Teamwork" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/adaptability.jpg" alt="Adaptability" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/attention.jpg" alt="Attention to Detail" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/time.png" alt="Time Management" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/creative.jpg" alt="Creative Thinking" />
        </div>
        <div class="contenedor-imagen2">
          <img src="/lifelong.png" alt="Curiosity and Continuous Learning" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Skills;
