import { useState, useEffect } from "react";
import classes from "./ComboBox.module.css";
import Card from "./Card";

const ComboBox = () => {

  const [sido, setSido] = useState("서울");

  const changeHandler = (event) => {
    setSido(event.target.value);
  };


  return (
    <div>
      <form className={classes.comboBox}>
        <select id="selectSido" onInput={changeHandler}>
          <option value="서울">
            서울
          </option>
          <option value="인천">
            인천
          </option>
          <option value="경기">
            경기
          </option>
        </select>
      </form>
      <Card sido={sido} />
    </div>
  );
};

export default ComboBox;
