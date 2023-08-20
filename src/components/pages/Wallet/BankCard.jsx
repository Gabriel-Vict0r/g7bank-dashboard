import React from 'react'
import { WrapperCard, ImgChip } from "./BankCard.style";
import { HeaderCard } from './AssetAndBalance.style'
import { SubTitle } from '../Dashboard/Dashboard.style'
import { FcSimCardChip, FcSimCard } from "react-icons/Fc";
import chip from "../../../img/chip.svg";
const BankCard = ({bank}) => {
  console.log(bank)
  return (
    <WrapperCard $typeBank={bank}>
      <HeaderCard>
        <SubTitle>Card</SubTitle>
        <ImgChip src={chip} alt="" />
      </HeaderCard>
    </WrapperCard>
  );
}

export default BankCard