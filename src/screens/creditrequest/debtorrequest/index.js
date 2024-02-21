import React, { useState } from 'react'
// Prime React
import { BreadCrumb } from "primereact/breadcrumb";
//Components
import FilterbarDebtorRequest from './filterbar';
import BodyIndex from './body';
import styles from "./debtorrequest.module.css"
// React Icons
import GlobalDialogIndex from '@/ui-components/globaldialoge';
import AddNewRequest from './addnewrequest';
const DebtorRequest = () => {
  const [showAll, setShowAll] = useState(false);
  const [isAddDialog, setIsAddDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  // Bredcrumb
  // const items = [{ label: "Clients", url: "/clientindex" }, { label: `Edit Client` }];
  const items = [{ label: `Debtor Request` }];
  const home = { label: "Credit Requests" };
  return (
    <>
      <div className={styles.campaign_main}>
        <div className="">
          <BreadCrumb model={items} home={home} />
        </div>
        <div className="container-fluid">
          <FilterbarDebtorRequest showAll={showAll}
            setShowAll={setShowAll} setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} />
          <BodyIndex setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} />
        </div>
      </div>
      {isAddDialog && (
        <GlobalDialogIndex
          showHeader={true}
          visible={isAddDialog}
          onHide={() => { setIsAddDialog(false); setEditData(null) }}
          header={editData == null ? "Add New Request" : "Edit Request"}
          draggable={false}
          breakpoints={{ "960px": "80vw", "640px": "90vw" }}
          style={{ width: "40vw" }}
          component={<AddNewRequest editData={editData} onHide={() => { setIsAddDialog(false); setEditData(null) }} />}
        />
      )
      }

    </>
  )
}

export default DebtorRequest