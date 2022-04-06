import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

  // const [active, setActive] = useState(false);
  // const handleClick = () => setActive(true);

  const linkText = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Feature", path: "/feature" },
    { title: "News", path: "/news" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const NavLink = () => {
    return (
      <nav className="site__nav">
        <ul className="main__navbar">
          {linkText.map((text) => (
            <li key={text.title}>
              <Link to={text.path}>{text.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }


  return (
    <header className="site__header">
      <div className="container">
        <div className="site__logo">
          <a href="/new-project" className="logo">Minimal</a>
        </div>
        <div className="menu__hamburger"><span></span></div>
        <NavLink />
        <ul className="site__right-nav">
          <li><a href="/#">Sign Up</a></li>
          <li><a href="/#" className="btn btn__main">Login</a></li>
        </ul> 
      </div>
    </header>
  )
};

export default Header;