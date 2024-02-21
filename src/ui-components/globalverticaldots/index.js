import React, { useRef } from "react";
//styles
import styles from "./globalverticaldots.module.css";
//components
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { BsThreeDotsVertical } from "react-icons/bs";

const GlobalVerticalDots = (props) => {
  const {
    items,
    handleMenuOpen,
    isDisabled = false,
    selected,
    className,
    btnclr = false,
    menuRef,
  } = props;
  const menu = useRef(null);

  const renderMenuItem = (item, index) => {
    const isLastItem = index === items.length - 1;
    const menuClass = isLastItem ? "last_kebab_menu_item" : "kebab_menu_item";
    return (
      <div
        className={`${styles.menuClass} ${
          item.isDisabled ? styles.disabled_kebab_menu : "cursor-pointer"
        } `}
        onClick={() => (item.isDisabled ? null : handleChange(item.id))}
      >
        <div className={`m-0 ${styles.kebab_menu_item_font}`}>
          <span>{item.icon}</span>
          <span>{item.title}</span>
        </div>
      </div>
    );
  };
  const handleChange = (val) => {
    console.log({ val });
    handleMenuOpen(val);
    // menu.current.hide();
  };
  const menuItems = items.map((item, index) => {
    return {
      label: item.title,
      template: () => renderMenuItem(item, index),
    };
  });

  return (
    <div className={styles.kebab_menu}>
      <Menu
        model={menuItems}
        popup
        ref={menu}
        id="popup_menu"
        className={styles.kebab_menu_border}
      />
      <Button
        className={`${
          btnclr ? styles.taskbodybutton : styles.taskheaderbutton
        }`}
        icon={<BsThreeDotsVertical />}
        onClick={(event) => menu.current.toggle(event)}
        aria-controls="popup_menu"
        aria-haspopup
        disabled={isDisabled}
      ></Button>
    </div>
  );
};

export default GlobalVerticalDots;