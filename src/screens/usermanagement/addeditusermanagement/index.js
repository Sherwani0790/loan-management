import React, { useState } from 'react'
// UI-Components
import GlobalDropdown from '@/ui-components/globaldropdown';
import GlobalInputField from '@/ui-components/globalinputfield';
import GlobalTextarea from '@/ui-components/globaltextarea';
import SecondaryButton from '@/ui-components/secondarybutton/secondarybutton';
import DefaultButton from '@/ui-components/defaultbutton/defaultbutton';

const AddEditUserManagement = (props) => {
    const { onHide, editData } = props;
    //States
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    //OnChange Function
    const onRoleChange = (e) => {
        setSelectedRole(e.value);
    };
    const onGenderChange = (e) => {
        setSelectedRole(e.value);
    };

    //Drpdown List
    const roleName = [
        { name: "Admin", code: "AD" },
        { name: "User", code: "US" }
    ];
    const genderName = [
        { name: "Male", code: "ML" },
        { name: "Female", code: "FM" },
        { name: "Other", code: "OT" },
    ];

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Full Name"
                            name="full_Name"
                            id="full_Name"
                            placeholder="Enter Full Name"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Email Address"
                            name="email_Address"
                            id="email_Address"
                            placeholder="Enter Email Address"
                            isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Username"
                            name="user_Name"
                            id="user_Name"
                            placeholder="Enter Username"
                            // isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalInputField
                            label="Phone No"
                            name="phone_No"
                            id="phone_No"
                            placeholder="Enter Phone No"
                            // isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalDropdown
                            label="Gender"
                            name="gender"
                            id="gender"
                            value={selectedGender}
                            options={genderName}
                            onChange={onGenderChange}
                            optionLabel="name"
                            placeholder="Select"
                            // isRequired
                            disabled={editData !== null}
                        />
                    </div>
                    {/*
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
                    </div> */}

                    {/* {editData !== null && ( */}
                    <div className="col-12 col-md-6 pb-3">
                        <GlobalDropdown
                            label="Role"
                            id="assign_Role"
                            name="assign_Role"
                            value={selectedRole}
                            options={roleName}
                            onChange={onRoleChange}
                            optionLabel="name"
                            placeholder="Select"
                            isRequired
                        />
                    </div>
                    {/* )} */}
                    <div className="col-12 col-md-12 pb-3">
                        <GlobalTextarea
                            label="Address"
                            name="address"
                            id="address"
                            rows="3"
                            placeholder="Enter Address"
                            // isRequired
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

export default AddEditUserManagement