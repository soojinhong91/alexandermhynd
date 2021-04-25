import React from "react"
import * as NavbarStyles from "./styles/Navbar.module.css"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../../static/assets/logo.png"
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" className={NavbarStyles.navbar__logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/cv">CV</Nav.Link>
          <Nav.Link href="/research">RESEARCH</Nav.Link>
          <Nav.Link href="/recent">RECENT ACTIVITIES</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// TODO //
// navbar: align-right
