import React from 'react';

import styles from './Promo.module.css';

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.content_title}>
            Join shopping community to get monthly promo
          </p>
          <p className={styles.content_subtitle}>
            Type your email down below and be young wild generation
          </p>
          <div className={styles.send}>
            <input type="email" placeholder="Add your email here" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};
