import React, { useState } from 'react'
// P-Components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// UI-Components
import GlobalTextarea from '@/ui-components/globaltextarea';
import SecondaryButton from '@/ui-components/secondarybutton/secondarybutton';
//Styles
import styles from "../body/bodyindex.module.css"

const ResponseModal = (props) => {
    // Initial data array
    const initialData = [
        {
            id: 7,
            "responder": "SQA",
            "response": "Amna",
            "response_date": "2023-11-30",
        },

    ];

    const { editData } = props;
    // States
    const [products, setProducts] = useState(initialData);
    // Columns
    const columns = [
        { field: "responder", header: "Responder" },
        { field: "response", header: "Response" },
        { field: "response_date", header: "Response Date" },
    ];
    // Create dynamic columns
    const dynamicColumns = columns.map((col, i) => {
        switch (col.field) {
            case "active_inactive_status":
            // return (
            //   <Column key={col.field} header={col.header} body={statusTemplate} />
            // );
            case "action":
            // return (
            //     <Column key={col.field} header={col.header} body={kbabMenuTemplate} />
            // );
            default:
                return <Column key={col.field} field={col.field} header={col.header} />;
        }
    });

    return (
        <>
            <div className='container-fluid'>
                <div className="row">

                    <div className="col-12 col-md-6 pb-3">
                        <GlobalTextarea
                            label="Ticket Details"
                            name="ticketDetails"
                            id="ticketDetails"
                            rows="3"
                            placeholder="Enter text here"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalTextarea
                            label="Response Details"
                            name="response_Details"
                            id="response_Details"
                            rows="3"
                            placeholder="Enter text here"
                            isRequired
                        />
                    </div>
                    <div className='col-12 mb-3'>
                        <div className='d-flex gap-2 justify-content-end'>

                            <SecondaryButton
                                label={"Save"}
                            />
                        </div>
                    </div>
                    {/* Response Table */}
                    <div className="col-12 col-md-12 pb-3">
                        <div className={styles.custom_scroll}>
                            <DataTable
                                value={products}
                                responsiveLayout="scroll"
                                stripedRows
                                rows={20}
                            >
                                {dynamicColumns}
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponseModal