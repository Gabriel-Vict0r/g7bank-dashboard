import React, { useContext } from "react";
import { Menu, List, Element, SubElement } from "./Menu.style";
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
import { ShowPages } from "./Contexts/ShowPages";
const MenuComponent = () => {
  const [showWallet, setWallets] = useState(false);
  const [colorOne, setColorOne] = useState(false);
  const [colorTwo, setColorTwo] = useState(false);

  const {
    show,
    setShow,
    showProfile,
    setShowProfile,
    shoWallet,
    setShoWallet,
  } = useContext(ShowPages);
  const changePages = (e) => {
    if (e === "dashboard") {
      setShowProfile(false);
      setShow(true);
    } else if (e === "Profile") {
      setShow(false);
      setShowProfile(true);
    }
  };
  const changeColor = () => {
    if (!colorOne) {
      setColorOne(true);
      setColorTwo(false);
    }
  };
  const changeColorTwo = () => {
    if (!colorTwo) {
      setColorTwo(true);
      setColorOne(false);
    }
  };
  const showSubmenuus = () => {
    showWallet ? setWallets(false) : setWallets(true);
  };
  return (
    <Menu>
      <List>
        <Element onClick={(e) => changePages((e = "dashboard"))}>
          <MdOutlineDashboard />
          dashboard
        </Element>
        <Element onClick={(e) => changePages((e = "Profile"))}>
          <CgProfile />
          Profile
        </Element>
        <Element onClick={showSubmenuus}>
          <CiWallet />
          Wallet
        </Element>
        {showWallet && (
          <>
            <SubElement $colorElement={colorOne} onClick={changeColor}>
              Asset & Balance
            </SubElement>
            <SubElement
              $colorElement={colorTwo}
              to="/CardManagement"
              onClick={changeColorTwo}
            >
              Card management
            </SubElement>
          </>
        )}
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
