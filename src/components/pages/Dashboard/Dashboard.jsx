import React from "react";
import {} from "./Dashboard.style";
import {
  Header,
  SearchBar,
  ContainerSearch,
  InfoProfile,
  ImageProfile,
  UserName,
} from "./Header.style";
import {} from "./Menu.style";
import { Logo } from "../../../Global/GeneralComponents";
import LogoSvg from "../../../img/logo.svg";
import Login from "../Login/Login";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
const Dashboard = () => {
  return (
    <div>
      <Header>
        <Logo src={LogoSvg} $Header/>
        <ContainerSearch>
          <FiSearch />
          <SearchBar type="search" placeholder="Find Your Trensaction..." />
        </ContainerSearch>
        <InfoProfile></InfoProfile>
        <InfoProfile></InfoProfile>
        <InfoProfile>
          <IoIosNotifications />
          <ImageProfile src="https://avatars.githubusercontent.com/u/46754034?s=96&v=4" />
          <UserName>Gabriel Victor</UserName>
        </InfoProfile>
      </Header>
    </div>
  );
};

export default Dashboard;
