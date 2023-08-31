import React from "react";

function Skills() {
  return (
    <div className="skillStructure">
      <div className="hrSeparator"></div>
      <h3>Hard Skills</h3>
      <div className="HardSkills">
        <div class="contenedor-imagen">
          <img src="/react-removebg-preview.png" alt="React" />
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
          <img src="/bootstrap-removebg-preview.png" alt="Bootstrap" />
        </div>

        <div class="contenedor-imagen">
          <img src="/visualstudio.png" alt="Visual Studio Code" />
        </div>

        <div class="contenedor-imagen">
          <img src="/git-removebg-preview.png" alt="Git" />
        </div>

        <div class="contenedor-imagen">
          <img src="/github.png" alt="GitHub" />
        </div>

        <div class="contenedor-imagen">
          <img src="/npm-removebg-preview.png" alt="npm" />
        </div>

        <div class="contenedor-imagen">
          <img src="/mongodb-svgrepo-com.svg" alt="mongoDB" />
        </div>

        <div class="contenedor-imagen">
          <img src="/node-js-svgrepo-com.svg" alt="NodeJS" />
        </div>
      </div>
      <h3>Soft Skills</h3>
      <div className="softSkills">
        <div class="contenedor-imagen2">
          {/* Debes poder explicar tus ideas y escuchar las necesidades y expectativas de los demás de manera efectiva */}
          <img src="/effective.jpg" alt="Effective Communication" />
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
      <div className="hrSeparator"></div>
    </div>
  );
}

export default Skills;
