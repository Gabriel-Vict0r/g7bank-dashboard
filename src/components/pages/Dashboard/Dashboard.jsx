import React, { useContext } from "react";
import { WrapperCard, WrapperTwo, Content } from "./Dashboard.style";
import Balance from "../../CardBalance";
import MenuComponent from "../../Menu";
import Earn from "../../CardEarn";
import Activity from "../../CardActivity";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import TotalTransaction from "../../TotalTransaction";
import QuickTransfer from "../../QuickTransfer";
import HeaderComponent from "../../Header";
import { Main, Tittle } from "../../../Global/GeneralComponents";
import Home from "./Graphs";
import { EditPages, ShowPages } from "../../Contexts/ShowPages";
import Pages from "../Pages";
const Dashboard = () => {
  //Hook for management the color state from search Icon
  //const {show} = useContext(ShowPages);
  //List from menu links
  return (
    <Main>
      <EditPages>
        <HeaderComponent />
        <MenuComponent />
        <Pages />
      </EditPages>
    </Main>
  );
};

export default Dashboard;
