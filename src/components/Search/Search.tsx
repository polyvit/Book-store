import React from "react";
import Input from "../../UI/Input/Input";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div>
      <h1>New & Trending</h1>
      <p className={styles.text}>Explorer new worlds from autors</p>
      <Input />
    </div>
  );
};

export default Search;
