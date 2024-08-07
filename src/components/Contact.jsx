import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Contact() {
  const handleScrollToHome = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div id="Contact" className="ContactStyles">
      <div className="Arrow-containerContact">
        <a href="#About" onClick={handleScrollToHome}>
          <img src="/arroiwUP.png" alt="arrow" />
        </a>
      </div>
      <div>
        <div className="ContactLinks">
          <div className="LinksContactImgContainer">
            <a
              href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen4">
                <img src="/linkedin.png" alt="linkedin" />
              </div>
            </a>
          </div>
          <div className="LinksContactImgContainer">
            <a
              href="https://github.com/AlvaroSapata"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen4">
                <img src="/github.png" alt="linkedin" />
              </div>
            </a>
          </div>
          <div className="LinksContactImgContainer">
            <a
              href="mailto:alvaromfdv@gmail.com"
              target="blank"
              rel="noreferrer"
            >
              <div className="contenedor-imagen4">
                <img src="/email.png" alt="email" />
              </div>
            </a>
          </div>
          <div className="LinksContactImgContainer">
            <a href="/Alvaro Martinez CV.pdf" download="Alvaro Martinez CV.pdf">
              <div className="contenedor-imagen4">
                <img src="/CVOk.png" alt="CV" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
