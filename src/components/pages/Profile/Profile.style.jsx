import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
  width: 97%;
  height: 90%;
  border-radius: .785rem;
`;
export const Content = styled.section`
    width: 100%;
`
export const HeaderPro = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`