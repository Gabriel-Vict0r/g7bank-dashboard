import styled from "styled-components";
import { css } from "styled-components";
import { Tittle } from "../../../Global/GeneralComponents";
export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 97%;
  height: 90%;
  border-radius: 0.785rem;
  padding: 2rem 0;
`;
export const Content = styled.section`
  width: 100%;
`;
const border = css`
  border-bottom: 1px solid ${(prop) => prop.theme.colors.body};
`;

export const HeaderPro = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${border};
  padding: 1.5rem 2rem;
`;

export const WrapperInfs = styled.div`
  width: 50%;
  display: grid;
  grid-template-areas:
    "img name"
    "img professional";
  grid-template-columns: 30% 50%;
`;
export const WrapperButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
export const ButtonEdit = styled.button`
  width: 40%;
  height: 55px;
  letter-spacing: 1px;
  font-size: ${(prop) => prop.theme.length.textHeader};
  background-color: ${(prop) => prop.theme.colors.primary};
  color: ${(prop) => prop.theme.colors.body};
  border-radius: 0.287rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
  transition: all 0.3s ease-in-out;
  & svg {
    font-size: 1.6rem;
  }
`;
export const ImgProfile = styled.img`
  width: 70%;
  grid-area: img;
  justify-self: center;
  border-radius: 5rem;
`;
export const Name = styled(Tittle)`
  font-weight: 400;
  grid-area: name;
  align-self: end;
  margin-bottom: 0.5rem;
`;
export const Professional = styled.span`
  font-weight: 300;
  color: ${(prop) => prop.theme.colors.body};
  grid-area: professional;
  align-self: start;
`;
