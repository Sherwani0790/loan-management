import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineHeadset } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { SidebarContext } from "@/context/sidebarcontext";
import { BiHomeAlt2 } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BiHomeAlt2,
  },
  {
    name: "Transactions",
    href: "",
    icon: FiRefreshCcw,
    subMenu: [
      {
        name: "Invoices",
        href: "/transaction/invoices/main-view",
      },
      {
        name: "Schedule of Assignment",
        href: "/transaction/schedule-of-assignment/main-view",
      },
    ],
  },
  {
    name: "Credit Requests",
    href: "",
    icon: CiCreditCard1,
    subMenu: [
      {
        name: "Clients Request",
        href: "/credit-request/client-request",
      },
      {
        name: "Debtor Request",
        href: "/credit-request/debtor-request",
      },
    ],
  },
  {
    name: "Support",
    href: "/support",
    icon: MdOutlineHeadset,
  },
  {
    name: "User Management",
    href: "/user-management",
    icon: MdOutlineHeadset,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(index === openSubMenu ? null : index);
  };

  return (
    <div className="sidebar__wrapper">
      <button className="sidebar__btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/images/teek_logo.svg"
            alt="logo"
          />
          {/* <p className="sidebar__logo-name">Teeks</p> */}
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon, subMenu }, index) => {
            const isSubMenuOpen = index === openSubMenu;
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                  href={href}
                  onClick={() => handleSubMenuClick(index)}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
                {isSubMenuOpen && subMenu && (
                  <ul className="submenu">
                    {subMenu.map(({ name: subName, href: subHref }) => (
                      <li key={subName}>
                        <Link
                          className={`sidebar__link ${router.pathname === subHref ? "sidebar__link--active" : ""
                            }`}
                          href={subHref}
                        >
                          <span className="sidebar__name">{subName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
