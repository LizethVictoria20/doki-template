import React from 'react';
import styles from '../assets/styles/components/Header.module.css'



const Header = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="">Document</a></li>
          <li><a href="">Tutorial</a></li>
          <li><a href="">Versions</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
      <h1>Doki Template</h1>
    </div>

  )
}


export default Header;