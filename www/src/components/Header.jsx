import React from 'react';
import styles from '../assets/styles/components/Header.module.css'
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/documentation">Documentation</Link></li>
          <li><Link to="/tutorial">Tutorial</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>

  )
}


export default Header;