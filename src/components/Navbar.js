import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.NavContainer}>
      <h2>Math Magicians</h2>
      <ul className={styles.Links}>
        <NavLink to="/">Home</NavLink>
        <li>|</li>
        <NavLink to="/calculator">Calculator</NavLink>
        <li>|</li>
        <NavLink to="/quote">Quote</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
