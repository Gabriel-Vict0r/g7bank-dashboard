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
          <HeaderProfile img="https://avatars.githubusercontent.com/u/46754034?s=96&v=4" name='Gabriel Victor' professional='Dev Web' />
        </Wrapper>
      </Content>
    </Main>
  );
};

export default Profile;
