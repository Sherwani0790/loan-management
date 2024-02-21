import React from "react";
//styles
import styles from "./globalinputdate.module.css";
//P-Components
import { Calendar } from "primereact/calendar";
const GlobalInputdate = (props) => {
  const {
    style,
    id,
    name,
    value,
    onChange,
    mask,
    dateFormat,
    minDate,
    maxDate,
    placeholder,
    label,
    isRequired,
    small,
    showTime,
    showSeconds,
  } = props;
  return (
    <>
      {label && (
        <div className="d-flex">
          <label>
            <b>{label}</b>
            {isRequired ? <span className="clr_red">*</span> : ""}
            <span className={styles.small_text}>{small}</span>
          </label>
        </div>
      )}
      <Calendar
        className={styles.date_select}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        mask={mask}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
        style={style}
        showIcon
        showTime={showTime}
        showSeconds={showSeconds}
      />
    </>
  );
};

export default GlobalInputdate;
