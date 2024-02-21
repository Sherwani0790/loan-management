import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "../invoices.module.css";
import SecondaryButton from "@/ui-components/secondarybutton/secondarybutton";
import DefaultButton from "@/ui-components/defaultbutton/defaultbutton";

const DeleteModal = (props) => {
  const { onHide } = props;
  return (
    <>
      <div className={styles.delete_Icon}>
        <BsTrash />
      </div>
      <div className={styles.delete_header}>
        <h5>Delete Invoice</h5>
        <p>Are you sure you want to delete this?</p>
      </div>
      <div className={styles.delete_button}>
        <DefaultButton label="Cancel" type="button" onClick={onHide} />
        <SecondaryButton label="Confirm" type="button" onClick={onHide} />
      </div>
    </>
  );
};

export default DeleteModal;
