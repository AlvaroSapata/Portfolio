import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="NavBar">
      <Link
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>

      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>

      <Link
        activeClass="active"
        to="Background"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Background
      </Link>

      <Link
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>

      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
