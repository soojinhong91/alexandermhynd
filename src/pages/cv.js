import React from "react"
import Layout from "../components/Layout"

import cvScreenShot from "../../static/assets/cv/cvScreenShot.png"
import cvFile from "../../static/assets/cv/Curriculum_Vitae_Alexander_M_Hynd_March_2021.pdf"

import * as CvStyles from "../styles/cv.module.css"

export default function CV() {
  return (
    <Layout>
      <h2>CV</h2>
      <div className={CvStyles.cvContent}>
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className={CvStyles.cvText}
        >
          Download CV
        </a>
        <div className="imgContainer">
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className={CvStyles.cvText}
          >
            <img
              src={cvScreenShot}
              alt="cvScreenShot"
              className={CvStyles.cvImage}
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}
