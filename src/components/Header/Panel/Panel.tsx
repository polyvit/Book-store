import React from "react";
import AVATAR from "../../../assets/images/girl.png";
import styles from "./Panel.module.css";

const Panel = () => {
  return (
    <div className={styles.panel}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_2" data-name="Layer 2">
          <path d="m24 4h-16a1 1 0 0 0 -1 1v22a1 1 0 0 0 1.45.89l7.55-3.77 7.55 3.77a1 1 0 0 0 .45.11 1 1 0 0 0 .53-.15 1 1 0 0 0 .47-.85v-22a1 1 0 0 0 -1-1zm-1 21.38-6.55-3.27a1 1 0 0 0 -.9 0l-6.55 3.27v-19.38h14z" />
        </g>
      </svg>
      <div className={styles.cart}>
        <span className={styles.span}>1</span>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 332.4 332.4"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M306.2,294l-14.4-189.6c-1.6-20.8-19.6-37.6-40.4-37.6H239C235.8,29.6,204.2,0,166.2,0c-38,0-69.6,29.6-72.8,66.8H81 c-20.8,0-38.8,16.8-40.4,37.6L26.2,294c-0.8,10.4,2.4,20,9.2,27.2s16,11.2,26.4,11.2h208.4c10.4,0,19.6-4,26.4-11.2 C303.8,314,307,304.4,306.2,294z M166.2,12.8c31.2,0,56.8,23.6,60,54h-120C109.4,36.4,135,12.8,166.2,12.8z M53,105.6 c1.2-14.4,13.6-26,28-26h12v20c-6,2.4-10,8.4-10,15.2c0,9.2,7.2,16.4,16.4,16.4s16.4-7.2,16.4-16.4c0-6.8-4-12.8-10-15.2v-20 h120.8v20c-6,2.4-10,8.4-10,15.2c0,9.2,7.2,16.4,16.4,16.4c9.2,0,16.4-7.2,16.4-16.4c0-6.8-4-12.8-10-15.2v-20h12 c14.4,0,26.8,11.6,28,26l12.8,169.6H40.6L53,105.6z M287.4,312.8c-4.4,4.8-10.4,7.2-17.2,7.2H61.8c-6.8,0-12.8-2.4-17.2-7.2 c-4.4-4.8-6.4-10.8-6-17.6l0.4-7.6h253.6l0.4,7.6C294.2,301.6,291.8,308,287.4,312.8z" />
            </g>
          </g>
        </svg>
      </div>
      <img src={AVATAR} alt="avatar" className={styles.avatar} />
      <div className={styles.dots}></div>
    </div>
  );
};

export default Panel;
