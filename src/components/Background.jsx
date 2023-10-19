import React from "react";

function background() {
  return (
    <div id="background" className="BackgroundStructure">
      <div className="backgroundText">
        <h3>Background</h3>
        <div className="backgroundSection">
          <div>
            {" "}
            <h4 className="underlined">Full-Stack Web Development</h4>
          </div>
          <div className="backgroundSectionImage no-hover">
            {" "}
            <img src="/ironhack2.png" alt="profile" className="profileImg" />
            <p>Ironhack</p>
            <p>
              "In the Ironhack Full Stack Web Development training program, I
              gained a comprehensive understanding of the core technologies
              employed in web development. <br /> Throughout the course, I had
              the opportunity to sharpen my skills by working on practical,
              real-world corporate applications. <br /> This program not only
              expanded my technical knowledge but also provided me with a
              firsthand experience of the impact of web solutions in the
              corporate world, enhancing my readiness to tackle the challenges
              and opportunities that arise in the business landscape."{" "}
            </p>
          </div>
        </div>

        <div className="backgroundSection">
          <div>
            {" "}
            <h4 className="underlined">
              Industrial Electronics and Automation Engenieering
            </h4>
          </div>
          <div className="backgroundSectionImage">
            {" "}
            <a href="https://www.ubu.es/" target="_blank" rel="noreferrer" >
              <img src="/ubu.png" alt="profile" className="profileImg" />
            </a>
            <p>Burgos University - Spain</p>
            <p>
              "Upon completing my degree in Industrial Electronics and
              Automation Engineering at the University of Burgos, I developed a
              profound understanding of automation technology and electronic
              systems. <br /> With a multidisciplinary approach that combines
              technical engineering knowledge with programming skills, I am able
              to create innovative and efficient solutions."{" "}
            </p>
          </div>
          <div className="backgroundSectionImage">
            {" "}
            <a href="https://portal3.ipb.pt/index.php/pt/ipb" target="_blank" rel="noreferrer">
              <img src="/IPB.jpg" alt="profile" className="profileImg" />
            </a>
            <p>Instituto Politecnico de Bragança - Portugal</p>
            <p>
              "One year mobility program in Bragança, a picturesque northern
              city in Portugal. <br /> Throughout my studies, I had the
              opportunity to significantly enhance my teamwork and collaboration
              through practical projects focused on real industrial
              applications."{" "}
            </p>
          </div>
          <div className="backgroundSectionImage">
            {" "}
            <a href="https://english.kookmin.ac.kr/" target="_blank" rel="noreferrer">
              <img src="/kookmin.png" alt="profile" className="profileImg" />
            </a>
            <p>Kookmin University 국민대학교 - South Korea</p>
            <p>
              "One year mobility program in Seoul, the dynamic capital city of
              South Korea. <br />
              This immersive experience allowed me to deeply engage with the
              vibrant culture and technology-driven environment of one of Asia's
              most innovative metropolises."{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default background;
