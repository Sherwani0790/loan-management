import React from "react";
//Styles
import styles from "./globaltextarea.module.css";
// P-Components
import { InputTextarea } from "primereact/inputtextarea";

const GlobalTextarea = (props) => {
  const { value, onChange, rows, cols, style, placeholder, label, isRequired,disabled } =
    props;
  return (
    <>
      {label && (
        <div className="d-flex">
          <label>
            <b>{label}</b>
            {isRequired ? <span className="clr_red">*</span> : ""}
          </label>
        </div>
      )}
      <InputTextarea
        className={styles.textarea_style}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        autoResize
        style={style}
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default GlobalTextarea;
