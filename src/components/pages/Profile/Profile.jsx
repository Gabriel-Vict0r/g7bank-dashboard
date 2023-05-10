import React from "react";
import HeaderComponent from "../../Header";
import MenuComponent from "../../Menu";
import {Main, Tittle } from "../../../Global/GeneralComponents";
import { Wrapper, Content } from "./Profile.style";
import HeaderProfile from "./HeaderProfile";
const Profile = () => {
  return (
    <Main>
      <HeaderComponent />
      <MenuComponent />
      <Content>
              <Tittle>Profile</Tittle>
              <Wrapper>
                  <HeaderProfile />
              </Wrapper>
      </Content>
    </Main>
  );
};

export default Profile;
