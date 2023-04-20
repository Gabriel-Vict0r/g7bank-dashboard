import styled from "styled-components";

export const Main = styled.body`
  display: flex;
  flex-direction: row;
  margin-top: 7rem;
  gap: 2rem;
  width: 100%;
`;
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Tittle = styled.h1`
  color: ${(prop) => prop.theme.colors.Title};
  letter-spacing: 2px;
`;
export const CardBalance = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  padding: 1rem;
  width: 40%;
  border-radius: 0.7rem;
  display: grid;
  grid-template-areas:
    "title title"
    "balance coin";
  align-content: space-between;
`;
export const CardEarn = styled(CardBalance)`
  width: 60%;
  grid-template-areas:
    "title date"
    "earning percent";
  padding: 1.5rem;
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
  display: flex;
  gap: 2rem;
`;
