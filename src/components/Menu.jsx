import React from 'react'
import { Menu, List, Element } from "./Menu.style";
import {
  MdOutlineDashboard,
  MdOutlineCurrencyExchange,
  MdOutlineContacts,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { BsCalendar3Range, BsGraphUpArrow } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
const MenuComponent = () => {
    const menuLinks = [
      {
        content: "Dashboard",
        route: "/dashboard",
        icon: <MdOutlineDashboard />,
      },
      { content: "Profile", route: "/profile", icon: <CgProfile /> },
      {
        content: "My Wallet",
        submenus: [
          { content: "Asset & balance", route: "/assetBalance" },
          { content: "Card management", route: "/cardManagement" },
        ],
        icon: <CiWallet />,
      },
      { content: "Calendar", route: "/calendar", icon: <BsCalendar3Range /> },
      { content: "Transfer", route: "/transfer", icon: <BiTransfer /> },
      {
        content: "Transaction",
        route: "/transaction",
        icon: <BsGraphUpArrow />,
      },
      {
        content: "Exchange",
        route: "/exchange",
        icon: <MdOutlineCurrencyExchange />,
      },
      { content: "Contacts", route: "/contacts", icon: <MdOutlineContacts /> },
      { content: "Setting", route: "/setting", icon: <RiListSettingsLine /> },
    ];
  return (
    <Menu>
      <List>
        {/* Mapping the const MenuLinks*/}
        {menuLinks.map((el) => (
          <Element to={el.route}>
            {el.icon}
            {el.content}
          </Element>
        ))}
      </List>
    </Menu>
  );
}

export default MenuComponent