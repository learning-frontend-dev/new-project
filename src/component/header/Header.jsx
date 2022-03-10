import React, { useState } from 'react';
import './header.css';

function Header(props) {
  const [active, setActive] = useState(false);
  const handleClick = e => {setActive(true) };


  const Link = props => {
    return (
      <a href={props.navItemLink} onClick={handleClick}>{props.navItem}</a>
    )
  }

  return (
    <header className="site__header">
      <div className="container">
        <div className="site__logo">
          <a href="#" className="logo">Minimal</a>
        </div>
        <div className="menu__hamburger"><span></span></div>
        <nav className="site__nav">
          <ul className="main__navbar">
            <li>
              <Link
                navItemLink="#"
                navItem="Home"
              />
            </li>
            <li>
              <Link
                navItemLink="#"
                navItem="About"
              />
            </li>
            <li>
              <Link
                navItemLink="#"
                navItem="Feature"
              />
            </li>
            <li>
              <Link
                navItemLink="#"
                navItem="Pricing"
              />
            </li>
            <li>
              <Link
                navItemLink="#"
                navItem="contact"
              />
            </li>
          </ul>
        </nav>
        <ul className="site__right-nav">
          <li><a href="#">Sign Up</a></li>
          <li><a href="#" className="btn btn__main">Login</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header