import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import px2vw from "../utils/px2vw";

export const Menu = styled(Fade)`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: ${(prop) => (prop.$isCollapse ? "6%" : "18%")};
  //width: calc(18% - 250px);
  //min-width: 220px;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  //z-index: 1;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem;
  gap: ${(prop) => (prop.$isCollapse ? "2rem" : "1rem")};
  list-style: none;
  //z-index: 2;
`;
export const Element = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${(prop) => prop.theme.length.textHeader};
  //font-size: ${px2vw(16)};
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
  & [aria-label] {
    position: relative;
    font-weight: bold;
    background-color: white;
    color: black;
  }
  & [aria-label]:after {
    position: absolute;
    top: -5px;
    padding: 5px;
    left: calc(100% + 2px);
    content: attr(data-tooltip);
    background-color: #0095ff;
    color: White;
  }
  & [aria-label]:hover::after {
    display: block;
  }
  @media (max-width: 1200px) {
    //font-size: ${px2vw(19)};
  }
  @media (max-width: 850px) {
    //font-size: ${px2vw(25)};
  }
  & svg {
    color: white;
    font-size: ${(prop) => (prop.$isCollapse ? "4rem" : "1.7rem")};
    //font-size: 1.7rem;
    min-width: 27px;
    & [aria-label] {
      position: relative;
      font-weight: bold;
      background-color: white;
    }
    & [aria-label]:after {
      position: absolute;
      top: -5px;
      padding: 5px;
      left: calc(100% + 2px);
      content: attr(data-tooltip);
      background-color: #0095ff;
      color: White;
    }
    & [aria-label]:hover::after {
      display: block;
    }
  }
  & img {
    width: ${px2vw(20)};
  }
  &:hover {
    background-color: #292929;
  }
`;
const showText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity : 1;
  }
`;
export const TextMenu = styled.span`
  animation: ${showText} 1.3s linear forwards;
`;

export const SubElement = styled(Link)`
  color: ${(props) =>
    props.$colorElement ? props.theme.colors.primary : props.theme.colors.body};
  text-decoration: none;
  //padding: 0px 3rem;
  //text-indent: 1.5px;
  font-size: 1rem;
  margin-left: 2.7rem;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(prop) => prop.theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }
`;
