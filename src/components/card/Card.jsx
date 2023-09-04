import React from 'react';
import './card.css';

import { Arrow } from '../../svg/Arrow';

export const Card = ({ title, descr, img }) => {
  return (
    <div className="card">
      <div className="container">
        <img className="card__img" src={img} alt="Category" />
        <div className="card__body">
          <div className="card__text">
            <h3 className="card__title">{title}</h3>
            <p className="card__descr">{descr}</p>
          </div>
          <div className="card__icon">
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};
