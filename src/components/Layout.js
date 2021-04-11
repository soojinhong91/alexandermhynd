import React from "react"
import Navigation from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <Navigation />
        <div className="content">{children}</div>
      </Container>
      <Footer />
    </div>
  )
}
