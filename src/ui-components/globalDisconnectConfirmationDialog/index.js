import React from "react";
import Image from "next/image";

import { Dialog } from "primereact/dialog";

import DefaultButton from "../defaultbutton/defaultbutton";
import SecondaryButton from "../secondarybutton/secondarybutton";

import disconnectImg from "../../../public/images/ui components/disconnect 1.jpg";

const GlobalDisconnectConfirmationDialog = () => {
  return (
    <>
      <Dialog
        header="Header"
        visible={true}
        showHeader={false}
        style={{ width: "25vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="d-flex justify-content-center mt-3">
          <Image src={disconnectImg} />
        </div>

        <div className="p-3">
          <h2 className="text-center">Confirm Disconnect?</h2>
        </div>

        <p className="text-center">Are you sure you want to Disconnect?</p>

        <div className="d-flex justify-content-center align-items-center my-3 gap-3 mb-4">
          <DefaultButton label="Cancel" />
          <SecondaryButton label="Disconnect" />
        </div>
      </Dialog>
    </>
  );
};

export default GlobalDisconnectConfirmationDialog;
