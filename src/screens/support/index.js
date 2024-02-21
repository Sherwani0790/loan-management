import React, { useState } from 'react'
import styles from "./support.module.css"
import FilterbarSupport from './filterbar'
import BodyIndex from './body'
import AddSupportTicket from './addsupportticket'
import GlobalDialogIndex from '@/ui-components/globaldialoge'
import ResponseModal from './components/ResponseModal'
const SupportMain = () => {
  const [isAddDialog, setIsAddDialog] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isResponseDialog, setIsResponseDialog] = useState(null);
  return (
    <>
      <div className={styles.campaign_main}>

        <div className="container-fluid">
          <FilterbarSupport setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} />
          <BodyIndex setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} isResponseDialog={isResponseDialog} setIsResponseDialog={setIsResponseDialog} />
        </div>
      </div>
      {isAddDialog && (
        <GlobalDialogIndex
          showHeader={true}
          visible={isAddDialog}
          onHide={() => { setIsAddDialog(false); setEditData(null) }}
          header={editData == null ? "Add Ticket" : "Assign Ticket"}
          draggable={false}
          breakpoints={{ "960px": "80vw", "640px": "90vw" }}
          style={{ width: "40vw" }}
          component={<AddSupportTicket editData={editData} onHide={() => { setIsAddDialog(false); setEditData(null) }} />}
        />
      )
      }
      {isResponseDialog && (
        <GlobalDialogIndex
          showHeader={true}
          visible={isResponseDialog}
          onHide={() => { setIsResponseDialog(false); setEditData(null) }}
          header={"Response Ticket"}
          draggable={false}
          breakpoints={{ "960px": "80vw", "640px": "90vw" }}
          style={{ width: "40vw" }}
          component={<ResponseModal editData={editData} onHide={() => { setIsAddDialog(false); setEditData(null) }} />}
        />
      )
      }
    </>
  )
}

export default SupportMain