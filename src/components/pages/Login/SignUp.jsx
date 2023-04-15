import React from "react";
import {
  Title,
  Wrapper,
  SectionSide,
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
  ButtonSignUP,
  Opening,
} from "./Style";
import { Logo } from "../../../Global/GeneralComponents";

import imgLogo from "../../../img/logo.svg";
import Facebook from "../../../img/icons/facebook_icon.svg";
import Google from "../../../img/icons/google_icon.svg";
import Linkedin from "../../../img/icons/linkedin_icon.svg";
import ilustrationImg from "../../../img/SignUpArt.svg";
import { Link } from "react-router-dom";
import { BiUserPin, BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

const SignUp = () => {
  function getForm() {}
  return (
    <Wrapper>
      <SectionSide>
        <Logo src={imgLogo} />
        <Title>
          Welcome to <span>G7Bank</span>
        </Title>
        <Paragraph>
          Welcome to G7Bank, your trusted banking partner. Our sign-up page is
          designed to make it easy for you to open an account and start managing
          your finances with ease.
        </Paragraph>
        <Ilustration src={ilustrationImg} $secondary />
      </SectionSide>
      <Opening direction="right" duration={1500}>
        <SectionTwo>
          <SubTitle>Create your new Account</SubTitle>
          <LinkSignUp>
            Have an account? <Link to="/">Sign in</Link>
          </LinkSignUp>
          <FormLogin onSubmit={getForm}>
            <ContainerInput>
              <Input type="text" placeholder="Username" />
              <BiUserPin />
            </ContainerInput>
            <ContainerInput>
              <Input type="email" placeholder="E-mail" />
              <HiOutlineMail />
            </ContainerInput>
            <ContainerInput>
              <Input type="password" placeholder="Password" />
              <BiLock />
            </ContainerInput>
            <ContainerLabel>
              <ContainerCheck>
                <Input type="checkbox" value="Remember me" />
                <LabelCheckBox>
                  Agree with <Link to="/">Term's</Link> &
                  <Link to="/"> Conditions</Link>
                </LabelCheckBox>
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
          <ButtonSignUP to="/">Sign in</ButtonSignUP>
        </SectionTwo>
      </Opening>
    </Wrapper>
  );
};

export default SignUp;
