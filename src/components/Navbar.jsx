import React from "react";

function Navbar() {
  const handleScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <a href="#Home" onClick={handleScrollToHome}>
        Home
      </a>

      <a href="#About" onClick={handleScrollToAbout}>
        About
      </a>

      <a href="#Projects" onClick={handleScrollToProjects}>
        Projects
      </a>
      <a href="#Contact" onClick={handleScrollToContact}>
        Contact
      </a>
    </div>
  );
}

export default Navbar;
