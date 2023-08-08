import React from "react";
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
import { Main, Tittle} from "../../../Global/GeneralComponents";
const Dashboard = () => {
  //Hook for management the color state from search Icon

  //List from menu links
  return (
    <Main>
      <HeaderComponent />
      <MenuComponent />
    </Main>
  );
};

export default Dashboard;
