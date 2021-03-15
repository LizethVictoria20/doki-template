import React from 'react';
import { Link } from "react-router-dom";
import styles from '../assets/styles/components/Home.module.css'

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <h1>Doki Template</h1>
        <p>Make simple</p>
        <Link to="/templates">See templates</Link>
      </div>
    </>
  );
}

export default Home;
