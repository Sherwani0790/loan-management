import React, { useState } from 'react'
// UI-Components
import GlobalDropdown from '@/ui-components/globaldropdown';
import GlobalInputField from '@/ui-components/globalinputfield';
import GlobalTextarea from '@/ui-components/globaltextarea';
import SecondaryButton from '@/ui-components/secondarybutton/secondarybutton';
import DefaultButton from '@/ui-components/defaultbutton/defaultbutton';
import GlobalInputNumber from '@/ui-components/globalinputnumber';

const AddNewRequest = (props) => {
    //Props
    const { onHide, editData } = props;
    //States
    const [selectedClient, setSelectedClient] = useState(null);
    //OnChange Function
    const onClientChange = (e) => {
        setSelectedClient(e.value);
    };
    //Drpdown List
    const clientName = [
        { name: "Amir", code: "HG" },
        { name: "Saad", code: "MD" },
        { name: "Lamda", code: "LW" },
    ];
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalDropdown
                            label="Client Name"
                            id="client_Name"
                            name="client_Name"
                            value={selectedClient}
                            options={clientName}
                            onChange={onClientChange}
                            optionLabel="name"
                            placeholder="Select"
                            isRequired
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Previous Credit Limit"
                            name="previous_Credit_Limit"
                            id="previous_Credit_Limit"
                            placeholder="Enter Previous credit limit"
                            // isRequired
                            disabled
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Request Credit Limit"
                            name="request_Credit_Limit"
                            id="request_Credit_Limit"
                            placeholder="Enter Request Credit Limit*"
                            isRequired
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Current Credit Limit"
                            name="current_Credit_Limit"
                            id="current_Credit_Limit"
                            placeholder="Enter Current Credit Limit*"
                            // isRequired
                            disabled
                        />
                    </div>

                    <div className='col-12 mb-3'>
                        <div className='d-flex gap-2 justify-content-center'>
                            <DefaultButton label="Cancel"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onHide()
                                }} />
                            <SecondaryButton
                                label={editData == null ? "Save" : "Update"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewRequest