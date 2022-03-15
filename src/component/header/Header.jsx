import React from 'react';
import './header.css';

function Header() {

  // const [active, setActive] = useState(false);
  // const handleClick = () => setActive(true);

  // { name: 'Home', path: '/' }

  // linkText = { 'Home': '/', 'About Us': '/about-us', ... }

  // Object.keys = linkText[key]

  const linkText = [
    {title: "Home",path: "/"},
    {title: "About Us",path: "/about-us"},
    {title: "Feature",path: "/feature"},
    {title: "News",path: "/news"},
    {title: "Contact Us",path: "/contact-us"},
  ];


  return (
    <header className="site__header">
      <div className="container">
        <div className="site__logo">
          <a href="/#" className="logo">Minimal</a>
        </div>
        <div className="menu__hamburger"><span></span></div>
        <nav className="site__nav">
          <ul className="main__navbar">
            {linkText.map((text) => (
              <li key={text.title}>
                <a href={text.path}>{text.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="site__right-nav">
          <li><a href="/#">Sign Up</a></li>
          <li><a href="/#" className="btn btn__main">Login</a></li>
        </ul>
      </div>
    </header>
  )
};

export default Header;