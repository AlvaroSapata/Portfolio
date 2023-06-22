import React from "react";

function Skills() {
  return (
    <div>
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
      <div>
        {/* Debes poder explicar tus ideas y escuchar las necesidades y expectativas de los demás de manera efectiva */}
        <img src="" alt="Effective Communication" />
        {/* Permite analizar problemas, identificar soluciones y tomar decisiones informadas */}
        <img src="" alt="Critical Thinking" />
        {/* Habilidad para resolver problemas de manera eficiente y encontrar soluciones efectivas es esencial */}
        <img src="" alt="Problem Solving" />
        <img src="" alt="Teamwork" />
        <img src="" alt="Adaptability" />
        <img src="" alt="Attention to Detail" />
        <img src="" alt="Time Management" />
        <img src="" alt="Creative Thinking" />
        <img src="" alt="Curiosity and Continuous Learning" />
      </div>
      <hr />
    </div>
  );
}

export default Skills;
