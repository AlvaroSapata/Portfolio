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
    <div id="Home">
      <h1>Alvaro Martinez</h1>
      <p>Full Stack Web Developer</p>
      <p>Passionate about programming and web application development.</p>
      <p>
        {" "}
        Seeking to keep growing professionally, both in the technical and
        creative realms, and create projects that amaze users.
      </p>
      <div className="HomeLinks">
        <a href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/">
          <img src="/linkedin.png" alt="linkedin" width={"50px"}/>
        </a>
        <a href="https://github.com/AlvaroSapata">
          <img src="/github.png" alt="linkedin" width={"45px"}/>
        </a>
        <a href="">
          <img src="/email.png" alt="email" width={"32px"}/>
        </a>
      </div>
      <button>
        <a href="#About" onClick={handleScrollToAbout}>
          About
        </a>
      </button>
      <hr />
    </div>
  );
}

export default Home;