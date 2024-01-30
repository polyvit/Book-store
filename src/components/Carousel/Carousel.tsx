import React, { useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";
import BOOK from "../../assets/images/07.jpg";

const Carousel = () => {
  const belt = useRef<HTMLDivElement>(null);
  const nextElement = () => {
    const carouselBelt = belt.current;
    if (carouselBelt) {
      const scrollAmount = carouselBelt.clientWidth;
      carouselBelt.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    document
      .getElementById("next-item")
      ?.addEventListener("click", nextElement);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <span className={styles.section}>Recent Bestsellers</span>
        <div className={styles.belt} ref={belt}>
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
          <CarouselItem title="Malibu Rising" author="Tailor Jenkins Reid" />
          <CarouselItem title="Black Ice" author="Brad Thor" />
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
          <CarouselItem
            title="False Witness: A Novel"
            author="Karin Slaughter"
          />
        </div>
      </div>
      <div className={styles.right} id="next-item">
        <img src={BOOK} alt="Book" />
        <div></div>
      </div>
    </div>
  );
};

export default Carousel;
