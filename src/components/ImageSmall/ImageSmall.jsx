import React from 'react';
import styles from './ImageSmall.scss';

export default (props) => (
  <div className={styles.root}>
    <img className={styles.image} src="https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e35/16464350_711848105651653_7712232929568489472_n.jpg?ig_cache_key=MTQ0MDAxOTc3MjU1MjA3NDIzMg%3D%3D.2" />
    <div className={styles.protector}></div>
    <div className={styles.hover}></div>
  </div>
)