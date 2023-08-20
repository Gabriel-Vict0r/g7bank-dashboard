import React from 'react'
import { WrapperCard, ImgChip, InfsPeople, FooterCard, BoxInfs, FlagCard } from "./BankCard.style";
import { HeaderCard } from './AssetAndBalance.style'
import { SubTitle } from '../Dashboard/Dashboard.style'
import { FcSimCardChip, FcSimCard } from "react-icons/Fc";
import chip from "../../../img/chip.svg";
import flag from "../../../img/flag.svg";
const BankCard = ({bank}) => {
  console.log(bank)
  return (
    <WrapperCard $typeBank={bank}>
      <HeaderCard>
        <SubTitle>Card</SubTitle>
        <ImgChip src={chip} alt="card" />
      </HeaderCard>
      <InfsPeople $isName={true}>Gabriel V S Souza</InfsPeople>
      <FooterCard>
        <BoxInfs>
          <InfsPeople $isName={false}>5206-2356-4512-4982</InfsPeople>
          
        </BoxInfs>
        <FlagCard src={flag} alt="Flag from card" />
      </FooterCard>
    </WrapperCard>
  );
}

export default BankCard