import React from "react";
import styles from "./charts.module.css";

const ManageUsersProgbar = () => {
  return (
    <>
      {/* //Admin */}
      <div className={styles.container_progressbar}>
        <div className={styles.progresbar_card}>
          <div className={styles.progressbar_count}>
            <span>Admin</span>
            <p>100</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.admin}></div>
          </div>
        </div>
      </div>
      {/* //Manager */}
      <div className={styles.container_progressbar}>
        <div className={styles.progresbar_card}>
          <div className={styles.progressbar_count_manager}>
            <span>Manager</span>
            <p>100</p>
          </div>
          <div className={styles.skills_manager}>
            <div className={styles.manager}></div>
          </div>
        </div>
      </div>
      {/* //BusinessDevelopmentExcecutive */}
      <div className={styles.container_progressbar}>
        <div className={styles.progresbar_card}>
          <div
            className={styles.progressbar_count_Business_Development_Executive}
          >
            <span>Business Development Executive</span>
            <p>100</p>
          </div>
          <div className={styles.skills_Business_Development_Executive}>
            <div className={styles.Business_Development_Executive}></div>
          </div>
        </div>
      </div>
      {/* //BusinessDevelopmentExcecutive */}
      <div className={styles.container_progressbar}>
        <div className={styles.progresbar_card}>
          <div className={styles.progressbar_count_other}>
            <span>Other</span>
            <p>100</p>
          </div>
          <div className={styles.skills_other}>
            <div className={styles.other}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsersProgbar;
