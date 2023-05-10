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
      <Content>
        <Tittle>Dashboard</Tittle>
        <WrapperCard>
          <Balance subtitle="Current Balance" balance="$12,000.00" coin="USD" />
          <Earn
            subTitle="Earning"
            date="montly"
            earn="$5,000.00"
            percent="+35.5%"
          />
          <Activity subtitle="Weakly activity" />
        </WrapperCard>
        <WrapperTwo>
          <TotalTransaction />
          <QuickTransfer />
        </WrapperTwo>
      </Content>
    </Main>
  );
};

export default Dashboard;
