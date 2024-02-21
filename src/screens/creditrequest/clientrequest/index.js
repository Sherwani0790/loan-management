import React, { useState } from 'react'
// Prime React
import { BreadCrumb } from "primereact/breadcrumb";
//Components
import BodyIndex from './body'
import FilterbarClientRequest from './filterbar'
import GlobalDialogIndex from '@/ui-components/globaldialoge'
import AddNewRequest from './addnewrequest'
import styles from "./clientrequest.module.css"

const ClientRequest = () => {
  const [showAll, setShowAll] = useState(false);
  const [isAddDialog, setIsAddDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  // Bredcrumb
  // const items = [{ label: "Clients", url: "/clientindex" }, { label: `Edit Client` }];
  const items = [{ label: `Client Request` }];
  const home = { label: "Credit Requests" };
  return (
    <>
      <div className={styles.campaign_main}>
        <div className="">
          <BreadCrumb model={items} home={home} />
        </div>
        <div className="container-fluid">
          <FilterbarClientRequest showAll={showAll}
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

export default ClientRequest