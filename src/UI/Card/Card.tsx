import React, { FC } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  section: string;
  title: string;
  info: string;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ section, children, title, info }) => {
  return (
    <>
      <div className={styles.card}>
        <span className={styles.section}>{section}</span>
        <p className={styles.title}>{title}</p>
        <span className={styles.info}>{info}</span>
        <div className={styles.bottom}>{children}</div>
      </div>
    </>
  );
};

export default Card;
