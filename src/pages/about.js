import React from "react"
import Layout from "../components/Layout"
import * as AboutStyles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section className={AboutStyles.aboutBody}>
        <img
          src="https://loremflickr.com/400/600"
          alt="placeholder"
          className={AboutStyles.aboutImage}
        />
        <div className={AboutStyles.aboutText}>
          <h1>About</h1>
          <p>
            I am a British researcher of international relations, currently
            based in Sydney, Australia. I am a PhD candidate and sessional
            academic at the University of New South Wales (UNSW), where my
            research focuses on processes of identity formation among middle
            power states in the Asia-Pacific. I also work as book review editor
            for the Journal of Territorial and Maritime Studies.
          </p>
          <p>
            Before moving to Australia, I lived for over five years in Seoul,
            South Korea, where I worked for a crisis and risk management firm as
            an analyst of Korean Peninsula security. I received my MA in
            International Studies from Korea University in 2018, and my BA in
            politics from SOAS, University of London, in 2012.
          </p>
          <p>
            My academic writing has been published by the South Korean Ministry
            of Foreign Affairs, in the North Korean Review, and the US Naval War
            College Review. I have written multiple publicly available
            commentaries in outlets including The APLN, Channel News Asia, The
            Diplomat, The Korea Times, The Lowy Interpreter, The National
            Interest, The National Maritime Foundation, and The Strategist.
          </p>
        </div>
      </section>
    </Layout>
  )
}
