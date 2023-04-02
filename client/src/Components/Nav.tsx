import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <NavLink
        to="/map"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <span>Map</span>
      </NavLink>
    </div>
  );
};

export default Nav;
