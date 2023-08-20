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
