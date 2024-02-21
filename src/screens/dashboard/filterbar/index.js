import React, { useState } from "react";
//Styles
import styles from "./filterbar.module.css";
//Ui-components
import GlobalDropdown from "@/ui-components/globaldropdown";
import SecondaryButton from "@/ui-components/secondarybutton/secondarybutton";
import GlobalDialogIndex from "@/ui-components/globaldialoge";
//components
import AddWidgetIndex from "../addwidgets";

const FilterbarDashboard = () => {
  //States
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [activeSpan, setActiveSpan] = useState(0);
  const [addWidget, setAddWidget] = useState(false);
  //OnChange Function
  const onCampaignChange = (e) => {
    setSelectedCampaign(e.value);
  };
  //OnClick Functions
  const handleSpanClick = (spanIndex) => {
    setActiveSpan(spanIndex);
  };
  //Drpdown List
  const campaignName = [{ name: "Test", code: "NY" }];

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className={styles.date_filter}>
            <span
              className={activeSpan === 0 ? styles.active : ""}
              onClick={() => handleSpanClick(0)}
            >
              Last 3 Months
            </span>
            <span
              className={activeSpan === 1 ? styles.active : ""}
              onClick={() => handleSpanClick(1)}
            >
              Last 30 Days
            </span>
            <span
              className={activeSpan === 2 ? styles.active : ""}
              onClick={() => handleSpanClick(2)}
            >
              Month to Date
            </span>
            <span
              className={activeSpan === 3 ? styles.active : ""}
              onClick={() => handleSpanClick(3)}
            >
              Last 24 Hours
            </span>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className={styles.campaing_widgetbutton}>
            {/* //global dropdown */}
            <div>
              <GlobalDropdown
                value={selectedCampaign}
                options={campaignName}
                onChange={onCampaignChange}
                optionLabel="name"
                placeholder="Select Campaigns"
                className={styles.filterbar_dropdown}
              />
            </div>
            {/* secondary button */}
            <div>
              <SecondaryButton
                type="button"
                label="Add Widgets"
                onClick={() => setAddWidget(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* //Dialog */}
      <GlobalDialogIndex
        showHeader={true}
        header={false}
        draggable={false}
        visible={addWidget}
        breakpoints={{ "960px": "80vw", "640px": "90vw" }}
        onHide={() => setAddWidget(false)}
        styles={{ width: "80vw" }}
        component={<AddWidgetIndex onHide={() => setAddWidget(false)} />}
      />
    </>
  );
};

export default FilterbarDashboard;
