import styled from "styled-components";
import { BiTransfer } from "react-icons/bi";
import { RiAccountPinBoxLine } from "react-icons/ri";

export const Content = styled.main`
  display: grid;
  grid-template-areas:
    "titPag titPag"
    "activity transactions";
  width: 100%;
  column-gap: 4rem;
`;
export const Icon = styled(BiTransfer)`
  grid-area: icon;
  justify-self: start;
  align-self: center;
  color: ${(prop) => prop.theme.colors.body};
  font-size: 1.5rem;
`;
export const CardBalance = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  padding: 1rem;
  border-radius: 0.7rem;
  display: grid;
  grid-template-areas:
    "title title"
    "balance coin";
  align-content: space-between;
  grid-area: Balance;
`;
export const CardActivity = styled(CardBalance)`
  width: 100%;
  grid-template-areas: none;
  display: block;
  grid-area: Activity;
`;
export const CardEarn = styled(CardBalance)`
  grid-template-areas:
    "title date"
    "earning percent";
  padding: 1.5rem;
  grid-area: Earn;
`;
export const CardTransaction = styled(CardBalance)`
  grid-template-areas:
    "title date"
    "Data Data";
  width: 100%;
  gap: 1rem;
  grid-area: Transaction;
`;
const displayFlex = `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 1rem;
`;
export const CardTransfer = styled(CardBalance)`
  ${displayFlex};
  width: 100%;
  padding: 1.8rem;
  gap: 1rem;
  grid-area: Transfer;
`;
export const ContainerHeader = styled.div`
  ${displayFlex};
  align-items: start;
  flex-direction: row;
`;
export const ContainerInputs = styled(ContainerHeader)`
  width: 100%;
`;
export const FormTransfer = styled.form`
  ${displayFlex};
  position: relative;
  width: 100%;
`;
export const InputAccount = styled.input`
  background-color: ${(prop) => prop.theme.colors.bgFullDark};
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid ${(prop) => prop.theme.colors.borderInput};
  text-indent: 1rem;
  font-size: ${(prop) => prop.theme.length.buttonText};
  color: ${(prop) => prop.theme.colors.body};
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
export const InputIcon = styled(RiAccountPinBoxLine)`
  color: ${(prop) => prop.theme.colors.weakGray};
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
  bottom: 4.7rem;
`;
export const InputAmount = styled(InputAccount)`
  width: 70%;
`;
export const InputSend = styled(InputAccount)`
  font-weight: 400;
  font-size: ${(prop) => prop.theme.length.textHeader};
  letter-spacing: 2px;
  text-indent: 0;
  width: 30%;
  background-color: ${(prop) => prop.theme.colors.primary};
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export const WrapperTransaction = styled.div`
  grid-area: Data;
`;
export const Date = styled.span`
  color: ${(prop) => prop.theme.colors.Title};
  justify-self: end;
  align-self: center;
  grid-area: date;
  margin-right: 1rem;
`;
export const ValueBalance = styled.span`
  color: ${(prop) => prop.theme.colors.primary};
  font-size: ${(prop) => prop.theme.length.values};
  grid-area: balance;
  padding-top: 1.5rem;
`;
export const EarnValue = styled(ValueBalance)`
  grid-area: earning;
`;
export const Percent = styled.span`
  color: ${(prop) => prop.theme.colors.secondery};
  grid-area: percent;
  padding-top: 1.5rem;
  justify-self: end;
  align-self: center;
`;
export const Coin = styled(ValueBalance)`
  grid-area: coin;
  justify-self: end;
`;
export const SubTitle = styled.h3`
  color: ${(prop) => prop.theme.colors.body};
  grid-area: title;
  letter-spacing: 1.5px;
  font-weight: 400;
`;
export const WrapperCard = styled.div`
  grid-area: activity;
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-areas:
    "Balance Earn"
    "Activity Activity";
  gap: 2rem;
  grid-template-columns: 50% 50%;
`;
export const WrapperTwo = styled.div`
  grid-area: transactions;
  margin-top: 1rem;
  width: 93%;
  display: grid;
  grid-template-areas:
    "Transaction"
    "Transfer";
  /* margin-left: 3rem; */
  height: 97%;
  gap: 2rem;
  grid-template-rows: 60% 35%;
`;
