import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const Menu = styled(Fade)`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 18%;
  border-radius: 20px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  list-style: none;
`;
export const Element = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${(prop) => prop.theme.length.textHeader};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem 3rem;
  border-radius: 0.4rem;
  transition: all 0.3s ease-in-out;
  width: 100%;
  & svg {
    color: white;
    font-size: 1.7rem;
  }
  &:hover {
    background-color: #292929;
  }
`;
export const SubElement = styled(Link)`
  color: ${(props) =>
    props.$colorElement ? props.theme.colors.primary : props.theme.colors.body};
  text-decoration: none;
  //padding: 0px 3rem;
  text-indent: 5.5rem;
  &:hover {
    color: ${(prop) => prop.theme.colors.primary};
    transition: all .2s ease-in-out;
  }
`;