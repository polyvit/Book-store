import React from "react";
import styles from "./Shelf.module.scss";

const Shelf = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shelf}></div>
      <div className={styles.front_part}></div>
    </div>
  );
};

export default Shelf;
