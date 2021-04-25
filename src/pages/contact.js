import React from "react"
import Layout from "../components/Layout"

import * as AboutStyles from "../styles/about.module.css"

export default function Contact() {
  return (
    <Layout>
      <h2 className={AboutStyles.title}>Contact</h2>
      <div>
        <p>
          I am always happy to grab a coffee (virtual or otherwise!) so please
          feel free to connect by:
        </p>
        <p>
          <span>📧</span> Emailing me at alexandermhynd[at]gmail.com, or…
        </p>
        <p>
          <span>👉</span> Contacting me via my{" "}
          <a
            href="https://www.linkedin.com/in/alexander-m-hynd-6966a4135/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/alexandermhynd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          profiles
        </p>
      </div>
    </Layout>
  )
}
