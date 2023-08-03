import React from "react";

function Contact() {
  const handleScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          <div className="LinksImgContainer">
            <a
              href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/"
              target="blank"
            >
              <div className="contenedor-imagen3">
                <img src="/linkedin.png" alt="linkedin" />
              </div>
            </a>
          </div>
          <div className="LinksImgContainer">
            <a href="https://github.com/AlvaroSapata" target="blank">
              <div className="contenedor-imagen3">
                <img src="/github.png" alt="linkedin" />
              </div>
            </a>
          </div>
          <div className="LinksImgContainer">
            <a href="mailto:alvaromfdv@gmail.com" target="blank">
              <div className="contenedor-imagen3">
                <img src="/email.png" alt="email" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
