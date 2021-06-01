import React from 'react';
import styles from './Background.module.scss';

const Background = () => (
  <div>
    <span className={styles.stars}></span>
    <span className={styles.twinkling}></span>
    <span className={styles.clouds}></span>
  </div>
);

export default Background;