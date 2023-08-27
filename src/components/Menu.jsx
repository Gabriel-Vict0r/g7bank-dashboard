import React, { useContext } from "react";
import { Menu, List, Element, SubElement } from "./Menu.style";
import {
  MdOutlineDashboard,
  MdOutlineCurrencyExchange,
  MdOutlineContacts,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar3Range, BsGraphUpArrow } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { useState } from "react";
import { ShowPages } from "./Contexts/ShowPages";
import Collapse from "../img/icons/collapse.svg";
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
      setShoWallet(false);
      setShow(true);
    } else if (e === "Profile") {
      setShoWallet(false);
      setShow(false);
      setShowProfile(true);
    } else if (e === "AssetAndBalance") {
      setShowProfile(false);
      setShow(false);
      setShoWallet(true);
      changeColor();
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
  const collapseChange = () => {};
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
          <IoIosArrowDown />
        </Element>
        {showWallet && (
          <>
            <SubElement
              $colorElement={colorOne}
              onClick={(e) => changePages((e = "AssetAndBalance"))}
            >
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
        <Element>
          <img src={Collapse} alt="" onClick={collapseChange} />
          Collapse
        </Element>
      </List>
    </Menu>
  );
};
export default MenuComponent;
