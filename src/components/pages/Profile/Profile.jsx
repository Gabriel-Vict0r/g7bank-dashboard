import React from "react";
import HeaderComponent from "../../Header";
import MenuComponent from "../../Menu";
import { Main, Tittle } from "../../../Global/GeneralComponents";
import { Wrapper, Content } from "./Profile.style";
import HeaderProfile from "./HeaderProfile";
import { ContactDetails, Address } from "./BasicContact";
import { EditProvider } from "../../Contexts/BtnEditProfile";
const Profile = () => {
  return (
    <Main $marginTop="profile">
      <EditProvider>
        <HeaderComponent />
        <Content>
          <Tittle>Profile</Tittle>
          <Wrapper>
            <HeaderProfile
              img="https://avatars.githubusercontent.com/u/46754034?s=96&v=4"
              name="Gabriel Victor"
              professional="Dev Web"
            />
            <ContactDetails
              tittle="Basic & Contact Details"
              name="gabriel"
              lastName="victor"
              userName="gabriel-vict0r"
              email="victorgabriel1730@gmail.com"
              phone="(77) 99903-0842"
            />
            <Address
              tittle="Address"
              presentAddress="Rua Joaquim Neto, n°336"
              permaAddress="Rua Joaquim Neto, n°336"
              country="Brasil"
              state="Bahia"
              city="Barreiras"
              zipCode="47801-028"
            />
          </Wrapper>
        </Content>
      </EditProvider>
    </Main>
  );
};
export default Profile;
