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
  padding: 1rem;
`;
export const ImgChip = styled.img`
  width: 2.5rem;
`;
export const headerCard = styled.div``;
export const InfsPeople = styled.p`
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${(prop) => prop.theme.length.textHeader};
  padding: ${(props) => (props.$isName ? "2rem 0" : "1rem 0")};
  grid-column: 1 / 3;
`;
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;
export const BoxInfs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 2rem;
`;
export const FlagCard = styled.img`
  width: 53px;
`;
export const DetailsCard = styled.span`
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${(prop) => prop.theme.length.bodyText};
`;
