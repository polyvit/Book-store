import React from "react";
import styles from "./Main.module.scss";
import Card from "../../UI/Card/Card";
import BOOK from "../../assets/images/07.jpg";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.book}>
        <img src={BOOK} alt="Book" />
        <div></div>
      </div>
      <Card
        section="Author of the week"
        title="Stephen King Collection"
        info="78 books"
      >
        Text1
      </Card>
      <Card
        section="Last listened"
        title="False Witness: A Novel"
        info="Karin Slaughter"
      >
        Text2
      </Card>
    </div>
  );
};

export default Main;
