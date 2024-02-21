import React from "react";
import { Button } from "primereact/button";
import styles from "./secondarybutton.module.css";
const SecondaryButton = (props) => {
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
        className={styles.secondary_button}
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

export default SecondaryButton;
