import React from "react";
//P-Component
import { Avatar } from 'primereact/avatar';
import { SplitButton } from 'primereact/splitbutton';
import { useRouter } from "next/router";
const MainHeader = () => {
  //Router Push
  const router = useRouter();
  const items = [
    {
      label: "User Profile",
      command: () => {
        // history.push("./updateProfile");
      },
    },
    {
      label: "Update Password",
      command: () => {
        // history.push("./updatepassword");
      },
    },
    {
      label: "Logout",
      // command: () => {
      //     dispatch(logout());
      //     window.location.reload();
      //     history.push("/");
      // },
      command: () => {
        // window.localStorage.clear();
        router.push("/");
        // dispatch(LOGIN_ERROR())
        // window.location.reload();
      },
    },
  ];
  return (
    <>
      <div className="main_header_class">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 col-12">
              <div className="layout-topbar-header">
                <button className="p-link layout-topbar-button user-image"
                //  onClick={props.onMobileSubTopbarMenuClick}
                >
                  <Avatar image="images/profile.jpeg" className="mr-2 " size="large" shape="circle" />
                  {/* <span>Profile</span> */}
                </button>

                <SplitButton model={items} className="p-button-text custom-button-css "></SplitButton>

                {/* <Avatar image="images/profile.jpeg" className="mr-2" size="large" shape="circle" /> */}
                {/* <SplitButton label="Secondary" model={items} className="p-button-text p-button-secondary mr-2 mb-2"></SplitButton> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
