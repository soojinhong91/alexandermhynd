import React from "react"
import { Link } from "gatsby"
import "@fontsource/quicksand"
import * as HomeStyles from "../styles/home.module.css"
import Layout from "../components/Layout"
import alHomePic from "../../public/assets/home/alHomePic.png"

import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.homeGreeting}>
        <div className={HomeStyles.homeText}>
          <h3 className={HomeStyles.homeTextTitle}>
            Welcome! I’m Alexander M. Hynd
          </h3>
          <p className={HomeStyles.homeTextParag}>
            British researcher of international politics, currently based in
            Sydney, Australia.
          </p>
          <p className={HomeStyles.homeTextParag}>
            I specialise in the politics of the Korean Peninsula & the Asia
            Pacific.
          </p>
          <p className={HomeStyles.homeTextParag}>
            <Link to="/about">Learn more </Link>
          </p>
        </div>
        <img src={alHomePic} alt="alHomePic" className={HomeStyles.homeImage} />
      </section>
    </Layout>
  )
}
