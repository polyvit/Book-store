import React from "react";
import styles from "./Carousel.module.scss";
import BOOK from "../../assets/images/07.jpg";

interface CarouselItemProps {
  title: string;
  author: string;
  image?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ title, author }) => {
  return (
    <div className={styles.item}>
      <div className={styles.book}>
        <img src={BOOK} alt="book" />
        <div></div>
      </div>
      <div className={styles.info}>
        <div>
          <p className={styles.title}>{title}</p>
          <span className={styles.author}>{author}</span>
        </div>
        <button className="btn">Buy now</button>
      </div>
    </div>
  );
};

export default CarouselItem;
