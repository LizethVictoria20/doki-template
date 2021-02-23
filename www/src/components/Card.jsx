import React from 'react';
import styles from '../assets/styles/components/Card.module.css'

const Card = () => {
  return (
    <div className={styles.containerCard}>
      <div className="bg-indigo-200">col 1</div>
      <div className="bg-indigo-200">col 2</div>
      <div className="bg-indigo-200">col 3</div>
    </div>
  );
}

export default Card;