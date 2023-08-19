import React from "react";
import {
  Header,
  SearchBar,
  ContainerSearch,
  InfoProfile,
  ImageProfile,
  UserName,
} from "./Header.style";
import { Logo } from "../Global/GeneralComponents";
import LogoSvg from "../img/logo.svg";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
const HeaderComponent = () => {
  const [color, setColor] = useState(false);
  return (
    <Header>
      <Logo src={LogoSvg} $Header />
      <ContainerSearch $colorSvg={color}>
        <FiSearch />
        <SearchBar
          type="search"
          placeholder="Find Your Trensaction..."
          onFocus={() => setColor(true)}
          onBlur={() => setColor(false)}
        />
      </ContainerSearch>
      <InfoProfile></InfoProfile>
      <InfoProfile></InfoProfile>
      <InfoProfile>
        <IoIosNotifications />
        <ImageProfile src="https://avatars.githubusercontent.com/u/46754034?s=96&v=4" />
        <UserName>Gabriel Victor</UserName>
      </InfoProfile>
    </Header>
  );
};

export default HeaderComponent;