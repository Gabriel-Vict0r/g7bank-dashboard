import styled from "styled-components";
import Balance from "../../CardBalance";
import { Legend } from "recharts";
export const Main = styled.body`
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  gap: 2rem;
  width: 100%;
`;
export const Content = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
`;
export const Tittle = styled.h1`
  color: ${(prop) => prop.theme.colors.Title};
  letter-spacing: 2px;
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
  padding: 1.5rem;
  /* width: 100%; */
  grid-area: Transaction;
`;
export const Date = styled.span`
  color: ${(prop) => prop.theme.colors.Title};
  justify-self: end;
  align-self: center;
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
  margin-top: 1rem;
  width: 50%;
  display: grid;
  grid-template-areas:
    "Balance Earn"
    "Activity Activity";
  gap: 2rem;
  grid-template-columns: 50% 50%;
`;
export const WrapperTwo = styled(WrapperCard)`
  grid-template-areas:
    "Transaction"
    "Transfer";
    margin-left: 3rem;
    height: 100%;
    grid-template-rows: 50% 50%;
`;
