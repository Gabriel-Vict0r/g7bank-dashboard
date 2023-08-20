import styled from "styled-components";

export const WrapperCard = styled.div`
  margin: 2rem 0;
  background: ${(gradient) => {
    switch (gradient.$typeBank) {
      case "inter":
        return gradient.theme.gradientCards.inter;
      case "nuBank":
        return gradient.theme.gradientCards.nuBank;
      default:
        return "transparent";
    }
  }};
  width: 450px;
  height: 250px;
  border-radius: 1rem;
  padding: 0.8rem;
`;
export const ImgChip = styled.img`
  width: 2.5rem;
`;
export const headerCard = styled.div``;
export const InfsPeople = styled.p`
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${(prop) => prop.theme.length.textHeader};
  padding: ${(props) => (props.$isName ? "2rem 0" : "1rem")};
`;
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const BoxInfs = styled.div`
  display: grid;
  grid-template-columns: 2(1fr);
  grid-template-rows: 2(1fr);
`
export const FlagCard = styled.img`
  
`