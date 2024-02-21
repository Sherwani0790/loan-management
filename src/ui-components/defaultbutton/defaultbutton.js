import React from "react";
//Styles
import styles from "./defaultbutton.module.css";
import { Button } from "primereact/button";
const DefaultButton = (props) => {
  const {
    label,
    onClick,
    type,
    placeholder,
    style,
    disabled,
    icon,
    iconPos,
    name,
    id,
  } = props;
  return (
    <>
      <Button
        className={styles.default__button}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        label={label}
        style={style}
        disabled={disabled}
        icon={icon}
        iconPos={iconPos}
        name={name}
        id={id}
      />
    </>
  );
};

export default DefaultButton;
