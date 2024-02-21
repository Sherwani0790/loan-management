import React, { useState } from 'react'
// UI-Components
import GlobalDropdown from '@/ui-components/globaldropdown';
import GlobalInputField from '@/ui-components/globalinputfield';
import GlobalTextarea from '@/ui-components/globaltextarea';
import SecondaryButton from '@/ui-components/secondarybutton/secondarybutton';
import DefaultButton from '@/ui-components/defaultbutton/defaultbutton';

const AddSupportTicket = (props) => {
    //States
    const [selectedPriority, setSelectedPriority] = useState(null);
    const [selectedTicketType, setSelectedTicketType] = useState(null);
    //OnChange Function
    const onPriorityChange = (e) => {
        setSelectedPriority(e.value);
    };
    const onticketChange = (e) => {
        setSelectedTicketType(e.value);
    };
    //Drpdown List
    const priorityName = [
        { name: "Critical", code: "CT" },
        { name: "High", code: "HG" },
        { name: "Medium", code: "MD" },
        { name: "Low", code: "LW" },
    ];
    const ticketName = [
        { name: "Feedback", code: "FB" },
        { name: "Error", code: "ER" },
        { name: "Help", code: "HP" },
    ];
    const { onHide, editData } = props;
    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Ticket Title"
                            name="ticketTitle"
                            id="ticketTitle"
                            placeholder="Enter text here"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalDropdown
                            label="Ticket Type"
                            name="ticketType"
                            id="ticketType"
                            value={selectedTicketType}
                            options={ticketName}
                            onChange={onticketChange}
                            optionLabel="name"
                            placeholder="Select"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalDropdown
                            label="Priority"
                            id="priority"
                            name="priority"
                            value={selectedPriority}
                            options={priorityName}
                            onChange={onPriorityChange}
                            optionLabel="name"
                            placeholder="Select"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>

                    {editData !== null && (
                        <div className="col-12 col-md-6 pb-3">
                            <GlobalDropdown
                                label="Assign To"
                                id="assign_To"
                                name="assign_To"
                                value={selectedPriority}
                                options={priorityName}
                                onChange={onPriorityChange}
                                optionLabel="name"
                                placeholder="Select"
                                isRequired
                            />
                        </div>
                    )}
                    <div className="col-12 col-md-12 pb-3">
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

export default AddSupportTicket