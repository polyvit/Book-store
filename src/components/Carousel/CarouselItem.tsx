import React from "react";
import styles from "./Carousel.module.scss";
import BOOK from "../../assets/images/07.jpg";

const CarouselItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.book}>
        <img src={BOOK} alt="book" />
        <div></div>
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.title}>False Witness: A Novel</p>
          <span className={styles.author}>Karin Slaughter</span>
        </div>
        <button className="btn">Buy now</button>
      </div>
    </div>
  );
};

export default CarouselItem;
