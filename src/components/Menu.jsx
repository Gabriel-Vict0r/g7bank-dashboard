import React, { useContext } from "react";
import { Menu, List, Element, SubElement, TextMenu } from "./Menu.style";
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
  const [rotate, setRotate] = useState();
  const [collapse, setCollapse] = useState(false);
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
    if (rotate == 180) {
      setRotate(0);
    } else {
      setRotate(180);
    }
  };
  const collapseChange = () => {
    collapse ? setCollapse(false) : setCollapse(true);
  };
  console.log(collapse);
  return (
    <Menu $isCollapse={collapse}>
      <List $isCollapse={collapse}>
        <Element onClick={(e) => changePages((e = "dashboard"))}>
          <MdOutlineDashboard $isCollapse={collapse} />
          {!collapse && <TextMenu $isCollapse={collapse}>Dashboard</TextMenu>}
        </Element>
        <Element onClick={(e) => changePages((e = "Profile"))}>
          <CgProfile />
          {!collapse && <TextMenu>Profile</TextMenu>}
        </Element>
        <Element onClick={showSubmenuus}>
          <CiWallet />
          {!collapse && <TextMenu>Wallet</TextMenu>}
          <IoIosArrowDown
            style={{
              transform: `rotate(${rotate}deg)`,
              transition: "ease-in-out .2s",
            }}
            opacity={collapse ? 0 : 1}
          />
        </Element>
        {showWallet && (
          <>
            <SubElement
              $colorElement={colorOne}
              onClick={(e) => changePages((e = "AssetAndBalance"))}
            >
              {!collapse && <TextMenu>Asset & Balance</TextMenu>}
            </SubElement>
            <SubElement
              $colorElement={colorTwo}
              to="/CardManagement"
              onClick={changeColorTwo}
            >
              {!collapse && <TextMenu>Card Management</TextMenu>}
            </SubElement>
          </>
        )}
        <Element to="/transaction">
          <BsGraphUpArrow />
          {!collapse && <TextMenu>Transaction</TextMenu>}
        </Element>
        <Element to="/Exchange">
          <MdOutlineCurrencyExchange />
          {!collapse && <TextMenu>Exchange</TextMenu>}
        </Element>
        <Element to="/contacts">
          <MdOutlineContacts />
          {!collapse && <TextMenu>Contacts</TextMenu>}
        </Element>
        <Element to="/setting">
          <RiListSettingsLine />
          {!collapse && <TextMenu>Settings</TextMenu>}
        </Element>
        <Element onClick={collapseChange}>
          <img src={Collapse} alt="Ícone para contrair menu" />
          {!collapse && <TextMenu>Collapse</TextMenu>}
        </Element>
      </List>
    </Menu>
  );
};
export default MenuComponent;
