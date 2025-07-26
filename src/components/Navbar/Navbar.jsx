import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils.js';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={isMenuOpen
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")} />

        <ul className={`${styles.menuItems} ${isMenuOpen && styles.isMenuOpen}`} onClick={() => setIsMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  )
};
