import React from "react"
import { Container } from "../Container/Container"
import { DropdownMenu } from "./DropdownMenu/DropdownMenu"
import { Logo } from "../../Svg/Logo"
import "./header.scss"

export const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__logo">
          <Logo />
        </div>

        <nav className="header__nav">
          <ul className="header__nav_list">
            <li className="header__nav_item">
              <a href="#home" className="header__nav_link" aria-label="Home">
                Home
              </a>
            </li>
            <li className="header__nav_item">
              <a
                href="#offers"
                className="header__nav_link"
                aria-label="Products"
              >
                Products
              </a>
            </li>
            <li className="header__nav_item">
              <button className="header__nav_cart" aria-label="Cart" />
            </li>
          </ul>
        </nav>

        <DropdownMenu />
      </Container>
    </header>
  )
}
