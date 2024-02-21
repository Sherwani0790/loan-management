import React from "react";
//Styles
import styles from "./globaliconbutton.module.css";
//P-Component
import { Button } from "primereact/button";

const GlobalIconButton = (props) => {
  const { icon, iconPos, tooltip, style, onClick, onChange, className } = props;
  return (
    <>
      <Button
        className={`${styles.icon_button_style} ${className}`}
        icon={icon}
        iconPos={iconPos}
        tooltip={tooltip}
        style={style}
        onClick={onClick}
        onChange={onChange}
      />
    </>
  );
};

export default GlobalIconButton;
