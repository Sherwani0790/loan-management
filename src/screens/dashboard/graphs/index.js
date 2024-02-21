import React from "react";
//Styles
import styles from "./graphsindex.module.css";
import BarCharts from "@/ui-components/globalcharts/barcharts";
import SingleBarCharts from "@/ui-components/globalcharts/singlebarchart";
import Linechart from "@/ui-components/globalcharts/linechart";
import SingleLineChart from "@/ui-components/globalcharts/singlelinechart";
const GraphsIndex = () => {
  return (
    <>
      <div className="max-height-view">
        <div className="row">
          {/* // Avg Aging VS. Turnover by Debtor Line charts */}
          <div className="col-12 col-md-6">
            <div className={styles.card_graph}>
              <div className={styles.graph_header}>
                <div className={styles.bold_header}>
                  <span>
                    <b>Avg Aging VS. Turnover by Debtor </b>
                  </span>
                </div>
                <div className={styles.graph_right_side}>
                  {/* <span className={styles.graph_digit_count}>11,756</span> */}
                  {/* <p className={styles.graph_viewall}>View All</p> */}
                </div>
              </div>
              {/* //Graph1 */}
              <div>
                <Linechart />
              </div>
            </div>
          </div>
          {/* // Balance By Debtor Line charts */}
          <div className="col-12 col-md-6">
            <div className={styles.card_graph}>
              <div className={styles.graph_header}>
                <div className={styles.bold_header}>
                  <span>
                    <b>Balance By Debtor </b>
                  </span>
                </div>
                <div className={styles.graph_right_side}>
                  {/* <span className={styles.graph_digit_count}>11,756</span> */}
                  {/* <p className={styles.graph_viewall}>View All</p> */}
                </div>
              </div>
              {/* //Graph1 */}
              <div>
                <SingleLineChart />
              </div>
            </div>
          </div>
          {/* // Debt VS. Paid Amount By Debtor Bar charts */}
          <div className="col-12 col-md-6">
            <div className={styles.card_graph}>
              <div className={styles.graph_header}>
                <div className={styles.bold_header}>
                  <span>
                    <b>Debt VS. Paid Amount By Debtor </b>
                  </span>
                </div>
                <div className={styles.graph_right_side}>
                  {/* <span className={styles.graph_digit_count}>11,756</span> */}
                  {/* <p className={styles.graph_viewall}>View All</p> */}
                </div>
              </div>
              {/* //Graph1 */}
              <div>
                <BarCharts />
              </div>
            </div>
          </div>
          {/* //Payment Trend by aging Single Bar charts */}
          <div className="col-12 col-md-6">
            <div className={styles.card_graph}>
              <div className={styles.graph_header}>
                <div className={styles.bold_header}>
                  <span>
                    <b>Payment Trend by aging</b>
                  </span>
                </div>
                <div className={styles.graph_right_side}>
                  {/* <span className={styles.graph_digit_count}>11,756</span> */}
                  {/* <p className={styles.graph_viewall}>View All</p> */}
                </div>
              </div>
              {/* //Graph1 */}
              <div>
                <SingleBarCharts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphsIndex;
