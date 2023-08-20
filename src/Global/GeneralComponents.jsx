import styled from "styled-components";


export const Logo = styled.img`
  width: ${prop => (prop.$Header ? '140px' : '170px')};
`;
export const Main = styled.body`
  display: flex;
  flex-direction: row;
  margin-top: ${prop => (prop.$marginTop === 'pages' ? '1rem' : '7rem')};
  gap: 2rem;
  width: 100%;
`;
export const Tittle = styled.h1`
  color: ${(prop) => prop.theme.colors.Title};
  grid-area: titPag;
  letter-spacing: 2px;
`;