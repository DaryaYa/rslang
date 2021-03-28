import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Header.scss';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header>
        <div className="header__iw">
          <div className="header__block">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </Link>

            <Link to="/" className="header__logo-link">
              <div className="header__logo">
                <span className="header__logo-p1">RS</span><span className="header__logo-p2">Lang</span>
              </div>
            </Link>
          </div>

          <div className="navbar">
            <Link to="/about-team" className="header__team-link">About Us</Link>
          </div>
        </div>
      </header>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
