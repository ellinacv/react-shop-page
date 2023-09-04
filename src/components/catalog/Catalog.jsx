import React from 'react';
import { Card } from '../card/Card';
import './catalog.css';

import cat01 from '../../img/categories/01.jpg';
import cat02 from '../../img/categories/02.jpg';
import cat03 from '../../img/categories/03.jpg';

export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__header">
          <h2 className="title-2">New arrivals</h2>
        </div>
        <div className="catalog__cards">
          <Card title="Hoodies & Sweetshirt" descr="Explore Now!" img={cat01} />
          <Card title="Coats & Parkas" descr="Explore Now!" img={cat02} />
          <Card title="Tees & T-Shirt" descr="Explore Now!" img={cat03} />
        </div>
      </div>
    </section>
  );
};
