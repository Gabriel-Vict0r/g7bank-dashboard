import styled from "styled-components";
import { Tittle } from "../../../Global/GeneralComponents";
export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 97%;
  height: 90%;
  border-radius: 0.785rem;
  padding: 2rem;
`;
export const Content = styled.section`
  width: 100%;
`;
export const HeaderPro = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperInfs = styled.div`
  width: 50%;
  display: grid;
  grid-template-areas:
    "img name"
    "img professional";
  grid-template-columns: 30% 50%;
`;
export const ImgProfile = styled.img`
  width: 70%;
  grid-area: img;
  justify-self: center;
  border-radius: 5rem;
`
export const Name = styled(Tittle)`
  font-weight: 400;
  grid-area: name;
  align-self: end;
  margin-bottom: .5rem;
`;
export const Professional = styled.span`
  font-weight: 300;
  color: ${(prop) => prop.theme.colors.body};
  grid-area: professional;
  align-self: start;
`;