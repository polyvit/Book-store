import React from "react";
import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";
import BOOK from "../../assets/images/07.jpg";

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <span className={styles.section}>Recent Bestsellers</span>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </div>
      <div className={styles.right}>
        <img src={BOOK} alt="Book" />
        <div></div>
      </div>
    </div>
  );
};

export default Carousel;
