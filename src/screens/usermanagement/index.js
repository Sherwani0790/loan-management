import React, { useState } from 'react'
//Styles
import styles from "./usermanagement.module.css"
//Components
import FilterbarUserManagement from './filterbar'
import BodyIndex from './body'
//UI-Components
import GlobalDialogIndex from '@/ui-components/globaldialoge'
import AddEditUserManagement from './addeditusermanagement'
const UserManagementMain = () => {
    const [isAddDialog, setIsAddDialog] = useState(false);
    const [editData, setEditData] = useState(null);
    return (
        <>
            <div className={styles.campaign_main}>
                <div className="container-fluid">
                    <FilterbarUserManagement setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} />
                    <BodyIndex setIsAddDialog={setIsAddDialog} isAddDialog={isAddDialog} editData={editData} setEditData={setEditData} />
                </div>
            </div>
            {isAddDialog && (
                <GlobalDialogIndex
                    showHeader={true}
                    visible={isAddDialog}
                    onHide={() => { setIsAddDialog(false); setEditData(null) }}
                    header={editData == null ? "Add User" : "Edit User"}
                    draggable={false}
                    breakpoints={{ "960px": "80vw", "640px": "90vw" }}
                    style={{ width: "40vw" }}
                    component={<AddEditUserManagement editData={editData} onHide={() => { setIsAddDialog(false); setEditData(null) }} />}
                />
            )
            }

        </>
    )
}

export default UserManagementMain