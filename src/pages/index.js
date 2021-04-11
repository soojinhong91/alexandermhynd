import React from "react"
import { Link } from "gatsby"
import "@fontsource/quicksand"
import * as HomeStyles from "../styles/home.module.css"
import Layout from "../components/Layout"
import alexander from "../../static/assets/home/alexander.png"

export default function Home() {
  return (
    <Layout>
      <section className={HomeStyles.homeGreeting}>
        <div className={HomeStyles.homeText}>
          <p className={HomeStyles.homeTextParag}>
            Welcome! I’m Alexander M. Hynd.
          </p>
          <p className={HomeStyles.homeTextParag}>
            British researcher of international politics, currently based in
            Sydney, Australia.
            <br></br>I specialise in the politics of the Korean Peninsula & the
            Asia Pacific.
          </p>
          <p className={HomeStyles.homeTextParag}>
            <Link to="/about">Learn more </Link>
          </p>
        </div>
        <img
          src={alexander}
          alt="alexander-home-pic"
          className={HomeStyles.homeImage}
        />
      </section>
    </Layout>
  )
}
