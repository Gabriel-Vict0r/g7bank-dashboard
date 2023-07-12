import React from "react";
import { Menu, List, Element, subElement } from "./Menu.style";
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
import { useState } from "react";
const MenuComponent = () => {
  const [showWallet, setWallets] = useState(false);
  return (
    <Menu>
      <List>
        <Element to="/dashboard">
          <MdOutlineDashboard />
          dashboard
        </Element>
        <Element to="/profile">
          <CgProfile />
          Profile
        </Element>
        <Element onClick={() => setWallets(true)}>
          <CiWallet />
          Wallet
        </Element>
        <subElement>Asset & Balance</subElement>
        <subElement>Card management</subElement>
        <Element to="/transaction">
          <BsGraphUpArrow />
          Transaction
        </Element>
        <Element to="/Exchange">
          <MdOutlineCurrencyExchange />
          exchange
        </Element>
        <Element to="/contacts">
          <MdOutlineContacts />
          Contacts
        </Element>
        <Element to="/setting">
          <RiListSettingsLine />
          Setting
        </Element>
      </List>
    </Menu>
  );
};

export default MenuComponent;
