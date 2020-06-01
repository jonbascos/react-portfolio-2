import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import resume from "../Jon_Bascos_resume.pdf"

function Footer(props) {
  const date = new Date()
  return (
    <div className='footer-container'>
      <footer>
        <div>
          <h2>
            <a name='contact'>Let's Connect online!</a>
          </h2>
          <h3>
            Email: <a href='mailto:jon@jonbascos.com'>jon@jonbascos.com</a>
          </h3>
          <ul className='social-media'>
            <li>
              <a
                href='https://www.twitter.com/medictodev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size='2x'
                  style={{ color: "white" }}
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/jonbascos'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='2x'
                  style={{ color: "white" }}
                />
              </a>
            </li>

            <li>
              <a
                href='https://www.github.com/jonbascos'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='2x'
                  style={{ color: "white" }}
                />
              </a>
            </li>
            <li>
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon
                  icon={faFilePdf}
                  size='2x'
                  style={{ color: "white" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className='copyright-info'>
        Copyright &copy; {date.getFullYear()} by Jon Bascos
        <br />
        <h5>
          <em>Hero photo credit to Josh Haggard, Portland Oregon</em>
        </h5>
      </div>
    </div>
  )
}
export default Footer
