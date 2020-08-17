import React from "react";
import style from "../styles/PhoneBook.module.css";
export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={style.labelMarkup}>
        search
        <input
          className={style.inputField}
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
