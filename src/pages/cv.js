import React from "react"
import Layout from "../components/Layout"

import cv_screen_shot from "../../public/assets/cv/cv_screen_shot.png"
import Curriculum_Vitae_Alexander_M_Hynd from "../../public/assets/cv/Curriculum_Vitae_Alexander_M_Hynd_March_2021.pdf"

import * as CvStyles from "../styles/cv.module.css"

export default function CV() {
  return (
    <Layout>
      <h2 className={CvStyles.cvTitle}>CV</h2>
      <div className={CvStyles.cvContent}>
        <a
          href={Curriculum_Vitae_Alexander_M_Hynd}
          target="_blank"
          rel="noopener noreferrer"
          className={CvStyles.cvText}
        >
          Download CV
        </a>
        <div className="imgContainer">
          <a
            href={Curriculum_Vitae_Alexander_M_Hynd}
            target="_blank"
            rel="noopener noreferrer"
            className={CvStyles.cvText}
          >
            <img
              src={cv_screen_shot}
              alt="cv_screen_shot"
              className={CvStyles.cvImage}
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}
