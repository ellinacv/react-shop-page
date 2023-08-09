import React from 'react';

import './intro.css';
import introImg from '../../img/images/header-img.jpg';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__content">
          <div className="intro__text">
            <div className="intro__title">
              <span className="highlight">
                <span>Let’s</span>
              </span>
              explore
              <span className="highlight highlight--yellow">
                <span>unique</span>
              </span>
              clothes.
            </div>
            <div className="intro__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="intro__btn__wrapper">
              <a href="#!" className="intro__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="intro__img">
            <img src={introImg} alt="Intro" />
          </div>
        </div>
      </div>
    </section>
  );
};
