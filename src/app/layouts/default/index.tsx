import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faMedium,
  faTwitch,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./assets/fonts/bree-serif.scss";
import "./assets/fonts/open-sans.scss";
import "./assets/styles.scss";
import layoutStyles from "./assets/styles.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  // the JSX syntax is quite intuitive but check out
  // https://facebook.github.io/react/docs/jsx-in-depth.html
  // if you need additional help
  return (
    <>
      <header className={layoutStyles.pageHeader}>
        <h1>
          <NavLink to="/">Eser Ozvataf</NavLink>
        </h1>
        <p>A technical generalist in consulting</p>
        <div className={layoutStyles.followIcons}>
          <a aria-label="Twitch" href="https://twitch.tv/laroux">
            <FontAwesomeIcon size="2x" icon={faTwitch} />
          </a>
          <a aria-label="Youtube" href="https://youtube.com/EserOzvataf">
            <FontAwesomeIcon size="2x" icon={faYoutubeSquare} />
          </a>
          <a aria-label="GitHub" href="https://github.com/eserozvataf">
            <FontAwesomeIcon size="2x" icon={faGithubSquare} />
          </a>
          <a aria-label="Twitter" href="https://twitter.com/eserozvataf">
            <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
          </a>
          <a aria-label="Medium" href="https://medium.com/@eserozvataf">
            <FontAwesomeIcon size="2x" icon={faMedium} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/eserozvataf">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
          </a>
          {/* <a aria-label="Telegram" href="https://telegram.me/esero"><FontAwesomeIcon size="2x" icon={faTelegramPlane} /></a> */}
          <a aria-label="E-Mail" href="mailto:eser@ozvataf.com">
            <FontAwesomeIcon size="2x" icon={faEnvelopeSquare} />
          </a>
        </div>

        <h2>
          <NavLink to="/">Frontpage</NavLink>
        </h2>
        <h2>
          <NavLink to="/cv/">Curriculum Vitae</NavLink>
        </h2>
        <h2>
          <NavLink to="/speaking/">Speaking</NavLink>
        </h2>
        <h2>
          <NavLink to="/portfolio/">Portfolio</NavLink>
        </h2>
        {
          /*
          <h2>
            <NavLink to="/about/">About Me</NavLink>
          </h2>
          */
        }
      </header>
      <main className={layoutStyles.pageContent}>
        {props.children}
      </main>
      <footer className={layoutStyles.pageFooter}>
        <section>© 2020 Eser Ozvataf.</section>
      </footer>
    </>
  );
}

export { Layout as default };
