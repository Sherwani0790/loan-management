import React, { useState } from "react";
//styles
import styles from "./filterbar.module.css";

//Ui-components
import SecondaryButton from "@/ui-components/secondarybutton/secondarybutton";
import GlobalInputField from "@/ui-components/globalinputfield";
const FilterbarSupport = (props) => {
  const { setIsAddDialog } = props;
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="main_header pt-3">
            <p className="">Support</p>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className={`${styles.equal_space} ${styles.inlineFlex}`}>
            <GlobalInputField
              id="searchField"
              name="searchField"
              type="text"
              placeholder="Search..."
              className={styles.input_position}
            />
            <div>
              <SecondaryButton
                label="Add Ticket"
                type="button"
                onClick={() => setIsAddDialog(true)}
                style={{ width: "120px" }}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FilterbarSupport;
