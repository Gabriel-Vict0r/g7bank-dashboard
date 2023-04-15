import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 10%;
  background-color: ${(props) => props.theme.colors.blackSecondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ContainerSearch = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  & svg {
    color: ${(prop) => (prop.$colorSvg ? "#2d42ba" : "#C2C2DD")};
    font-size: 1.7rem;
    transition: all .3s ease-in-out;
  }
`;
export const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  background: none;
  outline: none;
  border: none;
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${(prop) => prop.theme.length.textHeader};

  &::placeholder {
    color: ${(prop) => prop.theme.colors.body};
    font-size: ${(prop) => prop.theme.length.textHeader};
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  & svg {
    color: ${(prop) => prop.theme.colors.body};
    font-size: 2rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${(prop) => prop.theme.colors.primary};
    }
  }
`;
export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 18%;
`;
export const UserName = styled.p`
  font-size: ${(prop) => prop.theme.length.textHeader};
  color: ${(prop) => prop.theme.colors.body};
`;
