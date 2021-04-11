import React from "react"

import * as FooterStyles from "./styles/Footer.module.css"

import email from "../../static/assets/footer/email.png"
import linkedin from "../../static/assets/footer/linkedin.png"
import school from "../../static/assets/footer/school.png"
import twitter from "../../static/assets/footer/twitter.png"

export default function Footer() {
  return (
    <section className={FooterStyles.Footer}>
      <footer>
        <ul>
          <li>
            <a
              href="https://twitter.com/alexandermhynd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="mailto: alexandermhynd@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} alt="email" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alexander-m-hynd-6966a4135/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.arts.unsw.edu.au/our-people/alexander-mitchell-hynd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={school} alt="unsw" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  )
}
