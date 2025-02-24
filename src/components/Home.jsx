import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="Home" className="HomeStyle">
      <h1 className="name-title">Alvaro Martinez</h1>
      <p>Full Stack Web Developer</p>
      <p>Passionate about programming and web application development.</p>
      <p>
        Seeking to keep growing professionally, both in the technical and
        creative realms, and create projects that amaze users.
      </p>
      <div className="HomeLinks">
        <div className="primeros3">
          <div className="LinksImgContainer">
            <a
              href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen3">
                <img src="/linkedin.png" alt="linkedin" />
              </div>
            </a>
          </div>

          <div className="LinksImgContainer">
            <a
              href="https://github.com/AlvaroSapata"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen3">
                <img src="/github.png" alt="github" />
              </div>
            </a>
          </div>

          <div className="LinksImgContainer">
            <a
              href="mailto:alvaromfdv@gmail.com"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen3">
                <img src="/email.png" alt="email" />
              </div>
            </a>
          </div>
        </div>
        <div className="CVcontainer">
          <div className="LinksImgContainer">
            <p>Download my CV!</p>
            <a
              href="/CV Alvaro Martinez (EN).pdf"
              download="Alvaro Martinez CV.pdf"
            >
              <div className="contenedor-imagen3">
                <img src="/CVOk.png" alt="CV" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="Arrow-container">
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src="/arrow-removebg-preview (1).png" alt="arrow" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
