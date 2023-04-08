import styled from "styled-components";

export const Logo = styled.img`
  width: 170px;
`;
export const Ilustration = styled.img`
  width: 300px;
`;
export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(prop) => prop.theme.length.headingPrimary};
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  letter-spacing: 2px;
  color: ${(prop) => prop.theme.colors.body};
  font-size: ${prop => prop.theme.length.headingSecondory};
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-top: 4rem;
  overflow-y: hidden;
`;
export const SectionSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.3rem;
  align-items: center;
  width: 50%;
  padding: 5px;
  margin-top: 2rem;
`;
export const SectionTwo = styled(SectionSide)`
  background-color: ${(prop) => prop.theme.colors.blackSecondary};
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
        color: ${(prop) => prop.theme.colors.primary}
    }   
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`
export const Input = styled.input`
    width: 80%;
    height: 2.5rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid ${prop => prop.theme.colors.primary};
    outline: none;
    color: ${prop => prop.theme.colors.body}
`