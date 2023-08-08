import React from 'react';

import './header.css';
import { Logo } from '../../svg/Logo';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="header__logo">
            <Logo />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#!">Catalogue</a>
              </li>
              <li>
                <a href="#!">Fashion</a>
              </li>
              <li>
                <a href="#!">Favourite</a>
              </li>
              <li>
                <a href="#!">Lifestyle</a>
              </li>
              <li>
                <a href="#!" className="header__nav_btn">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
