import React, { useState } from "react"
import { Link } from "gatsby"

import * as NavbarStyles from "./styles/Navbar.module.css"

import logo from "../../static/assets/logo.png"
import burgerMenu from "../../static/assets/burgerMenu.png"

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className={NavbarStyles.navbar}>
      <img src={logo} alt="logo" className={NavbarStyles.navbar__logo} />
      <ul
        className={NavbarStyles.navbar__menu}
        style={{ display: showNav ? `flex` : `none` }}
      >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/research">RESEARCH</Link>
        </li>
        <li>
          <Link to="/recent-activities">RECENT ACTIVITIES</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>

      <a
        href="#"
        className={NavbarStyles.navbar__toggleBtn}
        onClick={toggleNav}
      >
        <img src={burgerMenu} alt="burgerMenu" />
      </a>
    </nav>
  )
}
