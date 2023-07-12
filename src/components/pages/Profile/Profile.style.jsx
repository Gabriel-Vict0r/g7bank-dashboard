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
export const BtnDiscart = styled(ButtonEdit)`
  background: transparent;
  color: ${(prop) => prop.theme.colors.thirty};
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

export const WrapperContact = styled.article`
  gap: 1rem;
  max-width: 100%;
  padding: 4rem;
`;
//const direction = "row";
export const WrapperInfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
  p {
    color: ${(prop) => prop.theme.colors.body};
    font-size: ${(prop) => prop.theme.length.bodyText};
  }
`;
export const WrapperEditInfo = styled(WrapperInfoProfile)`
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  input {
    width: 80%;
    height: 2.8rem;
    padding: 0.5rem;
    border-radius: 0.258rem;
    border: 1px solid ${(prop) => prop.theme.colors.borderInput};
    background-color: ${(prop) => prop.theme.colors.bgFullDark};
    outline: none;
    color: ${(prop) => prop.theme.colors.body};
    font-size: ${(prop) => prop.theme.length.buttonText};
  }
`;
export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  grid-row: 2;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BlockColumns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
