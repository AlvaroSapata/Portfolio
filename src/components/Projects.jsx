import React from "react";

function Projects() {
  return (
    <div id="Projects" className="projectStructure">
      <h3>Projects</h3>
      <div className="AllProjects">
        <div className="ProjectContainer">
          <img
            src="/VoltajeBarberStudio.png"
            alt="Voltaje Barber Studio"
            width={"200px"}
          />
          <h4>Voltaje Barber Studio (web)</h4>
          <p>
            Pick Scissors and Razors to keep your Hair and Beard short while
            avoid the bombs!
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/Voltaje-Barber-Studio"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://alvarosapata.github.io/Voltaje-Barber-Studio/"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>
        <div className="ProjectContainer">
          <img src="/NomadVentures.png" alt="NomadVentures" width={"200px"} />
          <h4>NomadVentures</h4>
          <p>
            NomadVentures is an author travel project where guides and users
            interact with each other, creating and signing up for different
            destinations.
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/NomadVentures"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://nomadventures.adaptable.app/"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>
        <div className="ProjectContainer">
          <img src="/ImagenHomeTemple.png" alt="Temple" width={"200px"} />
          <h4>Temple (In Develpment)</h4>
          <p>
            Stay up to date with the upcoming events of TEMPLE, as well as have
            access to the gallery and aftermovies of past events.
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/Temple-Client"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://github.com/AlvaroSapata/Temple-Server"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Server" />
                <span class="tooltip-text">Server</span>
              </span>
            </a>
            <a href="https://templewav.netlify.app/" target="blank">
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>
        <div className="ProjectContainer">
          <img src="/pngwing.com (2).png" alt="Los40" width={"200px"} />
          <h4>Los40 Gaming Music Awards (In Develpment)</h4>
          <p>
            Enjoy and vote for the top 40 songs of the Gaming music Awards by
            "Los40", the biggest music radio station of Spain
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/Los40-Gaming_Music-Awards-Client"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://github.com/AlvaroSapata/Los40-Gaming-Music-Awards-Server"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Server" />
                <span class="tooltip-text">Server</span>
              </span>
            </a>
            <a
              href="https://los40-gaming-music-awards.netlify.app/"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>{" "}
        <div className="ProjectContainer">
          <img src="/hero-logo.svg" alt="La Velada IV" width={"200px"} />
          <h4>La Velada IV - Presentation day</h4>
          <p>Landing page of LA VELADA IV - where boxers will be presented, weighed-in, interviewed, and face-off at Teatro Vitoria (BCN)</p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/la-velada-web-IV"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://laveladaiv-presentacion.netlify.app/"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>
        <div className="ProjectContainer">
          <img src="/LaVeladaIV.png" alt="La Velada IV" width={"200px"} />
          <h4>La Velada IV</h4>
          <p>Landing page of LA VELADA IV - where all the information of La Velada will be presented, as well as every important link to be up to date with the latest information</p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/la-velada-IV-Oficial"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://laveladaiv.netlify.app/"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/http.png" alt="http" />
                <span class="tooltip-text">Live Demo</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
