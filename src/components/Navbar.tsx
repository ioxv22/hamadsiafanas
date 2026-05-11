'use client';

import { Plane } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.iconBox}>
          <Plane size={24} />
        </div>
        <span className={styles.name}>Smart Travel AI</span>
      </div>
      <div className={styles.links}>
        <a href="/" className={styles.navLink}>Home</a>
        <a href="/activity-2-5-2" className={styles.navLink}>Activity 2.5.2</a>
        <a href="/stage-4" className={styles.navLink}>Stage 4</a>
        <a href="/stage-3" className={styles.navLink}>Stage 3</a>
        <span className={styles.projectInfo}>Hamad • Saif • Anas</span>
        <a href="#demo" className={styles.navBtn}>Launch Demo</a>
      </div>
    </nav>
  );
}
