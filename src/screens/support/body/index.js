import React, { useState } from "react";
// Styles
import styles from "./bodyindex.module.css";
//React Router
import { useRouter } from "next/router";
// P-Components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//components
import GlobalVerticalDots from "@/ui-components/globalverticaldots";
import GlobalDialogIndex from "@/ui-components/globaldialoge";
import DeleteModal from "../components/DeleteModal";
import { BsEye, BsTrash } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const BodyIndex = (props) => {
  const { setIsAddDialog, isAddDialog, editData, setEditData, isResponseDialog, setIsResponseDialog } = props
  //Router Push
  const router = useRouter();
  // Initial data array
  const initialData = [
    {
      id: 277,
      "title": "SQA",
      "ticket_type_text": "Feedback",
      "priority_text": "High",
      "status_text": "Open",
      "assignedto": "CA AS",
      "createdby": "Amna",
      "created_at": "2023-11-30",
      "resolution_date": "2024-01-20",
    },

  ];

  // States
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState(initialData);
  const [isInputClick, setIsInputClick] = useState(false);
  const [delDialog, setDelDialog] = useState(false);
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Columns
  const columns = [
    { field: "title", header: "Ticket Title" },
    { field: "ticket_type_text", header: "Ticket Type" },
    { field: "priority_text", header: "Priority" },
    { field: "status_text", header: "Status" },
    { field: "assignedto", header: "Assigned To" },
    { field: "createdby", header: "Created By" },
    { field: "created_at", header: "Created At" },
    { field: "resolution_date", header: "Resolution Date" },
    // { field: "active_inactive_status", header: "Active/Inactive" },
    { field: "action", header: "Action" },
  ];

  const kebabMenuItems = [
    { id: 1, title: "Assign Ticket", icon: <FaUserAlt /> },
    { id: 2, title: "Response", icon: <BsEye /> },
    { id: 3, title: "Delete", icon: <BsTrash /> },
  ];

  //Handlers
  const handleOpenMenuItems = (status) => {

    if (status === 1) {
      // setDelDialog(true);
      setIsAddDialog(true);
      setIsResponseDialog(false);
      setEditData("Edit");
      // router.push("/campaign/add-campaign");
    } else if (status === 2) {
      setIsResponseDialog(true);
      setIsAddDialog(false);
      setEditData("Edit")

    } else if (status === 3) {
      setDelDialog(true);
      setIsAddDialog(false);
      setIsResponseDialog(false);
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
  // const statusTemplate = (rowData) => {
  //   return (
  //     <GlobalInputSwitch
  //       checked={rowData.status === "Active"}
  //       onChange={(e) =>
  //         handleStatusChange(rowData, e.value ? "Active" : "Inactive")
  //       }
  //       tooltip="Status"
  //       onClick={() => setIsInputClick(true)}
  //     />
  //   );
  // };

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
      // return (
      //   <Column key={col.field} header={col.header} body={statusTemplate} />
      // );
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
              // selection={selectedProducts}
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
