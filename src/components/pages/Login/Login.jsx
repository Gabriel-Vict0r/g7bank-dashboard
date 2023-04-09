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
  ContainerInput,
  ContainerLabel,
  LabelCheckBox,
  ContainerCheck,
  InputSend,
  ContainerNetworks,
  IconNetwork,
  LinkNetwork,
  SignUp,
  Opening,
} from "./Style";
import imgLogo from "../../../img/logo.svg";
import Facebook from '../../../img/icons/facebook_icon.svg';
import Google from '../../../img/icons/google_icon.svg';
import Linkedin from '../../../img/icons/linkedin_icon.svg';
import ilustrationImg from "../../../img/loginArt.svg";
import { Link } from "react-router-dom";
import { BiUserPin, BiLock } from "react-icons/bi";
import { Fade } from 'react-awesome-reveal';
const Login = () => {
  function getForm() {}
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
      <Opening direction="right" duration={1500}>
        <SectionTwo>
          <SubTitle>Sign to your Account</SubTitle>
          <LinkSignUp>
            Don't have an account? <Link to="/SignUp">Sign Up</Link>
          </LinkSignUp>
          <FormLogin onSubmit={getForm}>
            <ContainerInput>
              <BiUserPin />
              <Input type="email" placeholder="E-mail" />
            </ContainerInput>
            <ContainerInput>
              <BiLock />
              <Input type="password" placeholder="Password" />
            </ContainerInput>
            <ContainerLabel>
              <ContainerCheck>
                <Input type="checkbox" value="Remember me" />
                <LabelCheckBox>Remember me</LabelCheckBox>
              </ContainerCheck>
              <Link to="/forgotPassword">Forgotton Password?</Link>
            </ContainerLabel>
            <InputSend type="submit" value="Sign in" />
          </FormLogin>
          <Paragraph>Sign in using your network</Paragraph>
          <ContainerNetworks>
            <LinkNetwork>
              <IconNetwork src={Facebook} alt="Facebook icon" />
            </LinkNetwork>
            <LinkNetwork>
              <IconNetwork src={Google} alt="Google icon" />
            </LinkNetwork>
            <LinkNetwork>
              <IconNetwork src={Linkedin} alt="Linkedin icon" />
            </LinkNetwork>
          </ContainerNetworks>
          <SignUp to="/SignUp">Sign Up</SignUp>
        </SectionTwo>
      </Opening>
    </Wrapper>
  );
};

export default Login;