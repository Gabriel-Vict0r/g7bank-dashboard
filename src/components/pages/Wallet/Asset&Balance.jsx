import React from "react";
import { WrapperCard, WrapperTwo, Content } from "../Dashboard/Dashboard.style";
import MenuComponent from "../../Menu";
import HeaderComponent from "../../Header";
import { Main, Tittle } from "../../../Global/GeneralComponents";
const AssetAndBalance = () => {
  return (
    <Main>
      <HeaderComponent />
      <MenuComponent />
      <Content>
        <Tittle>MyWallet / Card Management</Tittle>
      </Content>
    </Main>
  );
};
export default AssetAndBalance;
