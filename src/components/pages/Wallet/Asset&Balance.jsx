import React from "react";
import { WrapperCard, WrapperTwo, Content, SubTitle } from "../Dashboard/Dashboard.style";
import MenuComponent from "../../Menu";
import HeaderComponent from "../../Header";
import { Main, Tittle } from "../../../Global/GeneralComponents";
import {
  ContainerCard,
  HeaderCard,
  WrapperContent,
  WrapperCards,
} from "./AssetAndBalance.style";
import { SubElement } from "../../Menu.style";
import BankCard from './BankCard'
const AssetAndBalance = () => {
  return (
    <Main $marginTop="pages">
      <WrapperContent>
        <Tittle>MyWallet / Asset & Balance</Tittle>
        <ContainerCard>
          <HeaderCard>
            <SubTitle>Card</SubTitle>
            <SubElement>See all</SubElement>
          </HeaderCard>
          <WrapperCards>
            <BankCard bank='inter'/>
            <BankCard bank='nuBank'/>
          </WrapperCards>
        </ContainerCard>
      </WrapperContent>
    </Main>
  );
};
export default AssetAndBalance;