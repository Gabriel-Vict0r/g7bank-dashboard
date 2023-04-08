import React from "react";
import {
  Title,
  Wrapper,
  SectionSide,
  Logo,
  Paragraph,
  Ilustration,
  SectionTwo,
  SubTitle,
  LinkSignUp,
  FormLogin,
  Input,
} from "./Style";
import imgLogo from "../../../img/logo.svg";
import ilustrationImg from "../../../img/loginArt.svg";
import { Link } from "react-router-dom";
const Login = () => {
  function getForm() {
    
  }
  return (
    <Wrapper>
      <SectionSide>
        <Logo src={imgLogo} />
        <Title>Welcome back!</Title>
        <Paragraph>
          Welcome to G7Bank, your trusted banking partner. Our secure and
          user-friendly login page is designed to provide you with easy access
          to your account information and help you manage your finances
          conveniently.
        </Paragraph>
        <Ilustration src={ilustrationImg} />
      </SectionSide>
      <SectionTwo>
        <SubTitle>Sign to your Account</SubTitle>
        <LinkSignUp>
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </LinkSignUp>
        <FormLogin onSubmit={getForm}>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
        </FormLogin>
      </SectionTwo>
    </Wrapper>
  );
};

export default Login;
