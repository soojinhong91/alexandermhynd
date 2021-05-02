import React from "react"
import { Link } from "gatsby"
import "@fontsource/quicksand"
import * as HomeStyles from "../styles/home.module.css"
import Layout from "../components/Layout"
import alHomePic from "../../static/assets/home/alHomePic.png"

import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.homeBody}>
        <div className={HomeStyles.homeText}>
          <h3 className={HomeStyles.homeTextTitle}>Welcome!</h3>
          <h3 className={HomeStyles.homeTextTitle}>I’m Alexander M. Hynd</h3>
          <p className={HomeStyles.homeTextParag}>
            British researcher of international politics, currently based in
            Sydney, Australia.
          </p>
          <p className={HomeStyles.homeTextParag}>
            I specialise in the politics of the Asia-Pacific, focusing on middle
            powers including Australia, South Korea and Indonesia.
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
