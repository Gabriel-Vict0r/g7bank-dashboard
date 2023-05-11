import styled from "styled-components";
import { Tittle } from "../../../Global/GeneralComponents";
export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 97%;
  height: 90%;
  border-radius: 0.785rem;
`;
export const Content = styled.section`
  width: 100%;
`;
export const HeaderPro = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperInfs = styled.div`
  width: 50%;
  display: grid;
`
export const imgProfile = styled.img`
  width: 50px;
`
export const Name = styled(Tittle)`
  font-weight: 400;
`
export const Professional = styled.span`
  font-weight: 300;
`