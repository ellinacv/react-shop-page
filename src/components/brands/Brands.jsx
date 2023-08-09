import React from 'react';
import './brands.css';

import hm from '../../img/brands/HM.png';
import obey from '../../img/brands/Obey.png';
import shf from '../../img/brands/Shopify.png';
import lct from '../../img/brands/Lacoste.png';
import lv from '../../img/brands/Levis.png';
import amz from '../../img/brands/Amazon.png';

export const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hm} alt="HM" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={obey} alt="Obey" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={shf} alt="Shopify" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={lct} alt="Lacoste" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={lv} alt="Levis" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={amz} alt="Amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
