import React, { useRef } from "react";

function Home() {
  const homeRef = useRef(null);
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="Home" className="HomeStyle">
      <h1>Alvaro Martinez</h1>
      <p>Full Stack Web Developer</p>
      <p>Passionate about programming and web application development.</p>
      <p>
        {" "}
        Seeking to keep growing professionally, both in the technical and
        creative realms, and create projects that amaze users.
      </p>
      <div className="HomeLinks">
        <div>
          <a href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/">
            <div className="contenedor-imagen3">
              <img src="/linkedin.png" alt="linkedin" />
            </div>
          </a>
        </div>
        <div>
          <a href="https://github.com/AlvaroSapata">
            <div className="contenedor-imagen3">
              <img src="/github.png" alt="linkedin" />
            </div>
          </a>
        </div>
        <div>
          <a href="">
            <div className="contenedor-imagen3">
              <img src="/email.png" alt="email" />
            </div>
          </a>
        </div>
      </div>

      <a href="#About" onClick={handleScrollToAbout}>
        <div className="Arrow-container">
          <img src="/arrow-removebg-preview (1).png" alt="arrow" />
        </div>
      </a>
    </div>
  );
}

export default Home;
