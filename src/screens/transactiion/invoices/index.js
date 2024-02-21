import React, { useState } from 'react'
// Prime React
import { BreadCrumb } from "primereact/breadcrumb";
//Components
import FilterbarInvoices from './filterbar';
import BodyIndex from './body';
import styles from "./invoices.module.css";
import AddNewInvoice from './addnewinvoice';
import GlobalDialogIndex from '@/ui-components/globaldialoge';
const InvoicesMain = () => {
    const [showAll, setShowAll] = useState(false);
    const [isAddDialog, setIsAddDialog] = useState(false);
    const [editData, setEditData] = useState(null);
    // Bredcrumb
    // const items = [{ label: "Clients", url: "/clientindex" }, { label: `Edit Client` }];
    const items = [{ label: `Invoices` }];
    const home = { label: 'Transactions' };
    return (
        <>
            <div className={styles.campaign_main}>
                <div className="">
                    <BreadCrumb model={items} home={home} />
                </div>
                <div className="container-fluid">
                    <FilterbarInvoices
                        showAll={showAll}
                        setShowAll={setShowAll}
                        setIsAddDialog={setIsAddDialog}
                        isAddDialog={isAddDialog}
                        editData={editData}
                        setEditData={setEditData}
                    />
                    <BodyIndex
                        setIsAddDialog={setIsAddDialog}
                        isAddDialog={isAddDialog}
                        editData={editData}
                        setEditData={setEditData}
                    />
                </div>
            </div>
            {isAddDialog && (
                <GlobalDialogIndex
                    showHeader={true}
                    visible={isAddDialog}
                    onHide={() => { setIsAddDialog(false); setEditData(null) }}
                    header={editData == null ? "Add New Invoice" : "Edit Invoice"}
                    draggable={false}
                    breakpoints={{ "960px": "80vw", "640px": "90vw" }}
                    style={{ width: "40vw" }}
                    component={<AddNewInvoice editData={editData} onHide={() => { setIsAddDialog(false); setEditData(null) }} />}
                />
            )
            }

        </>
    )
}

export default InvoicesMain