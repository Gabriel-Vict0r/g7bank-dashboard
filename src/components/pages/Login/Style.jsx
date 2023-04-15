import styled from "styled-components";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
export const Ilustration = styled.img`
  width: ${(props) => (props.$secondary ? "70%" : "40%")};
`;
export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.Title};
  font-size: ${(prop) => prop.theme.length.headingPrimary};
  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  letter-spacing: 2px;
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${(prop) => prop.theme.length.headingSecondory};
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;
export const SectionSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.3rem;
  align-items: center;
  width: 50%;
  padding: 5px;
  margin-top: 4rem;
`;
export const Opening = styled(Slide)`
  width: 50%;
  height: 100vh;
`;
export const SectionTwo = styled(SectionSide)`
  width: 100%;
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  height: 100vh;
  padding: 0;
  padding-top: 5rem;
  margin-top: 0;
  justify-content: baseline;
  gap: 1rem;
  box-shadow: 45px 0px 50px 5px #2d42ba;
`;
export const Paragraph = styled.p`
  font-size: ${(prop) => prop.theme.length.bodyText};
  color: ${(prop) => prop.theme.colors.body};
  font-weight: 300;
  text-align: center;
  width: 85%;
`;

export const LinkSignUp = styled(Paragraph)`
  letter-spacing: 3px;
  a {
    text-decoration: none;
    color: ${(prop) => prop.theme.colors.primary};
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(prop) => prop.theme.colors.body};
  outline: none;
  color: ${(prop) => prop.theme.colors.body};
  letter-spacing: 2px;
  text-indent: 38px;
  font-size: ${(prop) => prop.theme.length.bodyText};
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: ${(prop) => prop.theme.colors.body};
  }
  &:focus + svg {
    color: ${(prop) => prop.theme.colors.primary};
  }
  &:focus {
    border-bottom-color: ${(prop) => prop.theme.colors.primary};
  }
`;
export const ContainerInput = styled.div`
  width: 80%;
  height: 2.6rem;
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    color: ${(prop) => prop.theme.colors.body};
    font-size: 25px;
    position: absolute;
    left: 0;
    bottom: 10px;
  }
`;
export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  & a {
    text-decoration: none;
    color: ${(prop) => prop.theme.colors.primary};
  }

  & input {
    width: 7%;
    --webkit-appearance: none;
    appearance: none;
    margin: 0;
    background-color: ${(prop) => prop.theme.colors.bgFullDark};
    font: inherit;
    color: ${(prop) => prop.theme.colors.bgFullDark};
    border: 1px solid ${(prop) => prop.theme.colors.body};
    width: 1.15rem;
    height: 1.15rem;
    display: grid;
    place-content: center;
  }
  & input:hover {
    cursor: pointer;
  }
  & input::before {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${(prop) => prop.theme.colors.primary};
  }
  & input:checked::before {
    transform: scale(1);
  }
`;
export const LabelCheckBox = styled.label`
  font-size: ${(prop) => prop.theme.length.textBody};
  color: ${(prop) => prop.theme.colors.body};
`;
export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 60%;
`;
export const InputSend = styled.input`
  appearance: none;
  border: none;
  font-size: ${(prop) => prop.theme.length.buttonText};
  padding: 1rem 4rem;
  margin-top: 3rem;
  border-radius: 0.375rem;
  background-color: ${(prop) => prop.theme.colors.primary};
  color: ${(prop) => prop.theme.colors.body};
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export const ContainerNetworks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
export const LinkNetwork = styled.a`
  background-color: ${(prop) => prop.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  height: 100%;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export const IconNetwork = styled.img`
  width: 120%;
`;
export const ButtonSignUP = styled(Link)`
  text-decoration: none;
  background-color: ${(prop) => prop.theme.colors.primary};
  width: 100%;
  padding: 1.3rem 0;
  text-align: center;
  color: ${(prop) => prop.theme.colors.body};
  border-radius: 0.375rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    filter: brightness(1.2);
  }
`;
