import React from 'react';
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterLine } from "react-icons/ri";

function Footer() {
  return(
    <footer className="flex-row">
      <p>Visit me on: </p>
      <ul className="flex-row">
        <li>
          <a href="https://github.com/noreikam">
            <RiGithubLine/> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matt-noreika-0628b8ab/">
            <RiLinkedinBoxLine/> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MattyFromCT">
            <RiTwitterLine/> Twitter
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;