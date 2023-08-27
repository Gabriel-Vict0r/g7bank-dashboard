import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import px2vw from "../utils/px2vw";

export const Menu = styled(Fade)`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 18%;
  min-width: 220px;
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
  //font-size: ${(prop) => prop.theme.length.textHeader};
  font-size: ${px2vw(16)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 1rem;
  padding: 8% 15%;
  //padding: 1rem 3rem;
  border-radius: 0.4rem;
  transition: all 0.3s ease-in-out;
  width: 100%;
  /* @media (max-width: 1200px) {
    font-size: ${px2vw(19)};
  }
  @media (max-width: 850px) {
    font-size: ${px2vw(25)};
  } */
  & svg{
    color: white;
    font-size: ${px2vw(20)};
    //font-size: 1.7rem;
    min-width: 27px;
  }
  & img { 
    width: ${px2vw(20)};
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
  //text-indent: 1.5px;
  font-size: ${px2vw(15)};
  margin-left: 2.7rem;
  width: 100%;
  &:hover {
    color: ${(prop) => prop.theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }
`;