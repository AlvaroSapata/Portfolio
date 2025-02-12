import React from "react";

function Projects() {
  return (
    <div id="Projects" className="projectStructure">
      <h3>Projects</h3>
      <div className="AllProjects">
        {/* PocketPal */}
        <div className="ProjectContainer">
          <img src="/Pocketpal.png" alt="Google Translate" width={"200px"} />
          <h4>PocketPal</h4>
          <p>Real-time chat using socket.io and Zustand</p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/PocketPal"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Repo</span>
              </span>
            </a>
            <a
              href="https://pocketpal-tu9l.onrender.com/"
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
        {/* QuizzMe */}
        <div className="ProjectContainer">
          <img src="/QME.png" alt="Google Translate" width={"200px"} />
          <h4>QuizzMe</h4>
          <p>Quizz App using Zustand</p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/quizz-app"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://quizzmeapp.netlify.app/"
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

        {/* EchoTube */}
        <div className="ProjectContainer">
          <img src="/Echotube.png" alt="Google Translate" width={"200px"} />
          <h4>EchoTube</h4>
          <p>
            YouTube clone built with React and the YouTube Data API, allowing
            users to search, browse, and watch videos with a user-friendly
            interface.
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/EchoTube"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://myechotube.netlify.app/"
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

        {/* Voltaje Barber Studio */}
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

        {/* Translator */}
        <div className="ProjectContainer">
          <img
            src="/Google translator chatgpt.png"
            alt="Google Translate"
            width={"200px"}
          />
          <h4>Google Translate - Chatgpt Integration</h4>
          <p>Google Translate clone integrating OpenAi gpt turbo 3.5</p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/translator"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub Client" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://translatorclone.netlify.app/"
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

        {/* Notes */}
        <div className="ProjectContainer">
          <img src="/notes.png" alt="NomadVentures" width={"200px"} />
          <h4>Notes</h4>
          <p>
            Notes is a Note Taking application with markdown support, built with
            React, that allows users to create, edit, delete, and filter notes.
            Each note can be tagged with multiple tags for better organization.
          </p>
          <div>
            <a
              href="https://github.com/AlvaroSapata/todo-notes"
              target="blank"
              rel="noreferrer"
            >
              <span class="tooltip">
                <img src="/github.png" alt="GitHub" />
                <span class="tooltip-text">Client</span>
              </span>
            </a>
            <a
              href="https://mynotestodo.netlify.app/"
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
        {/* NomadVentures */}
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

        {/* Velada */}
        <div className="ProjectContainer">
          <img
            src="/LaVeladaIVoficial.png"
            alt="La Velada IV"
            width={"200px"}
          />
          <h4>La Velada IV</h4>
          <p>
            Landing page of LA VELADA IV - where all the information of La
            Velada will be presented, as well as every important link to be up
            to date with the latest information
          </p>
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

        {/* VeladaLanding */}
        <div className="ProjectContainer">
          <img src="/veladalanding.png" alt="La Velada IV" width={"200px"} />
          <h4>La Velada IV - Presentation day</h4>
          <p>
            Landing page of LA VELADA IV - where boxers will be presented,
            weighed-in, interviewed, and face-off at Teatro Vitoria (BCN)
          </p>
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

        {/* Temple */}
        {/* <div className="ProjectContainer">
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
        </div> */}

        {/* Los40 */}
        <div className="ProjectContainer">
          <img src="/los40.png" alt="Los40" width={"200px"} />
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
