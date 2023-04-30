import React from "react";
import {
  CardTransfer,
  SubTitle,
  Icon,
  InputIcon,
  FormTransfer,
  InputAccount,
  InputAmount,
  InputSend,
  ContainerHeader,
  ContainerInputs,
} from "./pages/Dashboard/Dashboard.style";
const QuickTransfer = () => {
    return (
      <CardTransfer>
        <ContainerHeader>
          <Icon />
          <SubTitle>Quick Transfer</SubTitle>
        </ContainerHeader>
        <FormTransfer>
            <InputIcon />
          <InputAccount type="number" placeholder="Bank Number" />
          <ContainerInputs>
            <InputAmount type="number" placeholder="Amount"/>
            <InputSend type="submit" value="Send" />
          </ContainerInputs>
        </FormTransfer>
      </CardTransfer>
    );
};

export default QuickTransfer;
