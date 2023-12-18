import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="/" className={`${styles.link} ${styles.active}`}>
          Books
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          AudioBooks
        </a>
      </li>
    </ul>
  );
};

export default Menu;
