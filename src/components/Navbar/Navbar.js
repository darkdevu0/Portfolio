import React from "react"

import "./NavBar.scss"
import navBarList from "../../constant/NavBarList"

const NavBar = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>

      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {navBarList.map(item => (
            <li className="navigation__item" key={item.id}>
              <a href="/" className="navigation__link">
                <span>{item.id}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
