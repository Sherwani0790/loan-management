import React from "react";
//styles
import styles from "./filterbar.module.css";

//Ui-components
import SecondaryButton from "@/ui-components/secondarybutton/secondarybutton";
import GlobalInputField from "@/ui-components/globalinputfield";
import GlobalVerticalDots from "@/ui-components/globalverticaldots";
import { BsFilter } from "react-icons/bs";
import GlobalCheckbox from "@/ui-components/globalcheckbox";
const FilterbarDebtorRequest = (props) => {
    const { showAll, setShowAll, setIsAddDialog } = props

    // KbabaMenu Items
    const kebabMenuItems = [
        { id: 1, title: "Change Status" },
        { id: 2, title: "Text" },
    ];
    const handleOpenMenuItems = (status) => {

        if (status === 1) {
            // setIsAddDialog(true);
            // router.push("/campaign/add-campaign");
        } else if (status === 2) {
            // setIsDialog(true);
        }
    };


    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    {/* <div className={styles.terminated_check_styles}>
                        <GlobalCheckbox name="include_terminated" id="include_terminated" checked={showAll} onChange={(e) => setShowAll(e.checked)} />
                        Include Terminated
                    </div> */}
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
                        {/* <div>
                            <GlobalVerticalDots
                                btnclr={true}
                                items={kebabMenuItems}
                                handleMenuOpen={handleOpenMenuItems}
                            />
                        </div> */}
                        {/* <div
                            className={styles.filter_column}
                        // onClick={() => setFilterModal(true)}
                        >
                            <BsFilter
                                className={styles.filter_icon_color}
                            />
                        </div> */}
                        <div>
                            <SecondaryButton
                                label="Add Request"
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

export default FilterbarDebtorRequest;
