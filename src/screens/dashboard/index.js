import React from "react";
//styles
import styles from "./dashboard.module.css";
//Graph Componets
import GraphsIndex from "./graphs";
const DashboardScreen = () => {
  return (
    <>
      <div className={styles.dashboard_main}>
        <div className="container-fluid">
          <div className="main_header">
            <p>Dashboard</p>
          </div>
          {/* <FilterbarDashboard /> */}
          <GraphsIndex />
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
