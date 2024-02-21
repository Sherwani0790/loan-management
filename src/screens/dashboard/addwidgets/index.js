import React from "react";
//Styles
import styles from "./addwidgets.module.css";
import DoughnutCharts from "@/ui-components/globalcharts/doughnutcharts";
import SecondaryButton from "@/ui-components/secondarybutton/secondarybutton";
import PieCharts from "@/ui-components/globalcharts/piecharts";
import BarCharts from "@/ui-components/globalcharts/barcharts";
import GlobalTicketCards from "@/ui-components/globalticketcards";
import ManageUsersProgbar from "@/ui-components/globalcharts/manageusersprogbar";

const AddWidgetIndex = () => {
  return (
    <>
      <div className={styles.custom_scroll}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>Assigned Contacts </b>
                  </h6>
                </div>
                <DoughnutCharts />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>User Devices</b>
                  </h6>
                </div>
                <DoughnutCharts />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>Conversation Status</b>
                  </h6>
                </div>
                <PieCharts />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>Assigned Contacts </b>
                  </h6>
                </div>
                <BarCharts />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>Assigned Contacts </b>
                  </h6>
                </div>
                <GlobalTicketCards />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className={styles.addwidget_card}>
                <div className={styles.addwidget_header}>
                  <h6>
                    <b>Assigned Contacts </b>
                  </h6>
                </div>
                <ManageUsersProgbar />
              </div>
              <div className=" text-center pt-3 pb-2">
                <SecondaryButton label="Add Widget" />
                {/* <PrimaryButton label="Remove Widget" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWidgetIndex;
