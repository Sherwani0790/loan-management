import React, { useState } from "react";
// Styles
import styles from "./bodyindex.module.css";
//React Router
import { useRouter } from "next/router";
// P-Components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//components
import GlobalInputSwitch from "@/ui-components/globalinputswitch";
import GlobalVerticalDots from "@/ui-components/globalverticaldots";
import GlobalDialogIndex from "@/ui-components/globaldialoge";
import DeleteModal from "../components/DeleteModal";
import { FaCheck } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";


const BodyIndex = (props) => {
  const { setIsAddDialog, setEditData } = props

  //Router Push
  const router = useRouter();
  // Initial data array
  const initialData = [
    {
      id: 1,
      clientname: "Jess",
      status: "Pending",
      requestdot: " 2023-01-01",
      previouscreditlimit: "$199,045.00",
      requestcreditlimit: "$10.00",
      currentcreditlimit: "$199,055.00",
    },
    {
      id: 2,
      clientname: "Josep",
      status: "Approve",
      requestdot: " 2023-01-01 20:07 ",
      previouscreditlimit: "$199,045.00",
      requestcreditlimit: "$10.00",
      currentcreditlimit: "$199,055.00",
    },
  ];

  // States
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState(initialData);
  const [isInputClick, setIsInputClick] = useState(false);
  const [delDialog, setDelDialog] = useState(false);

  // Columns
  const columns = [
    { field: "clientname", header: "Client Name" },
    { field: "status", header: "Status" },
    { field: "requestdot", header: "Request Date" },
    { field: "previouscreditlimit", header: "Previous Credit Limit" },
    { field: "requestcreditlimit", header: "Request Credit Limit" },
    { field: "currentcreditlimit", header: "Current Credit Limit" },
    { field: "action", header: "Action" },
  ];

  const kebabMenuItems = [
    { id: 1, title: "Approve", icon: <FaCheck /> },
    { id: 2, title: "Deny", icon: <GiCrossMark /> },
  ];

  //Handlers
  const handleOpenMenuItems = (status) => {

    if (status === 1) {
      // setIsAddDialog(true);
      // setEditData("Edit")
      // router.push("/campaign/add-campaign");
    } else if (status === 2) {
      // setDelDialog(true);
    }
  };

  // Custom body template
  const kbabMenuTemplate = (rowData) => {
    return (
      <>
        <GlobalVerticalDots
          items={kebabMenuItems}
          handleMenuOpen={handleOpenMenuItems}
        />
      </>
    );
  };
  // Custom body template
  const statusTemplate = (rowData) => {
    return (
      <GlobalInputSwitch
        checked={rowData.status === "Active"}
        onChange={(e) =>
          handleStatusChange(rowData, e.value ? "Active" : "Inactive")
        }
        tooltip="Status"
        onClick={() => setIsInputClick(true)}
      />
    );
  };

  // Multiple Values Selection
  const handleSelectionChange = (event) => {
    // Handle checkbox selection functionality
    if (event.type === "checkbox" || event.type === "all") {
      setSelectedProducts(event.value);
    }
  };

  // Create dynamic columns
  const dynamicColumns = columns.map((col, i) => {
    switch (col.field) {
      case "active_inactive_status":
        return (
          <Column key={col.field} header={col.header} body={statusTemplate} />
        );
      case "action":
        return (
          <Column key={col.field} header={col.header} body={kbabMenuTemplate} />
        );
      default:
        return <Column key={col.field} field={col.field} header={col.header} />;
    }
  });

  return (
    <>
      <div className="row">
        <div className="col-12 pt-2">
          <div className={styles.custom_scroll}>
            <DataTable
              value={products}
              responsiveLayout="scroll"
              stripedRows
              selection={selectedProducts.length === 0 ? null : selectedProducts}
              onSelectionChange={handleSelectionChange}
              rows={20}
            // onRowClick={(event) => handleRowClick(event, event.data)}
            >
              {/* <Column selectionMode="multiple"></Column> */}
              {dynamicColumns}
            </DataTable>
          </div>
        </div>
      </div>

      {/* Delete Modal  */}
      {delDialog && (
        <GlobalDialogIndex
          showHeader={true}
          visible={delDialog}
          onHide={() => setDelDialog(false)}
          header={false}
          draggable={false}
          breakpoints={{ "960px": "80vw", "640px": "90vw" }}
          style={{ width: "20vw" }}
          component={<DeleteModal onHide={() => setDelDialog(false)} />}
        />
      )}
    </>
  );
};

export default BodyIndex;
