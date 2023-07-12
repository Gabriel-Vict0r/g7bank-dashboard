import React from "react";
import { useState } from "react";
import {
  HeaderPro,
  Name,
  Professional,
  WrapperInfs,
  WrapperButton,
  ImgProfile,
  ButtonEdit,
  BtnDiscart,
} from "./Profile.style";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useContext } from "react";
import { BtnEditProfile } from "../../Contexts/BtnEditProfile";
const HeaderProfile = ({ name, img, professional }) => {
  const { edit, setEdit } = useContext(BtnEditProfile);
  console.log(edit);
  return (
    <HeaderPro>
      <WrapperInfs>
        <ImgProfile src={img} alt="imagem profile" />
        <Name>{name}</Name>
        <Professional>{professional}</Professional>
      </WrapperInfs>
      <WrapperButton>
        {!edit ? (
          <ButtonEdit onClick={() => setEdit(true)}>
            <HiOutlineAdjustmentsHorizontal />
            Edit Profile
          </ButtonEdit>
        ) : (
          <>
            <BtnDiscart onClick={() => setEdit(false)}>Discart Changes</BtnDiscart>
            <ButtonEdit>Save Changes</ButtonEdit>
          </>
        )}
      </WrapperButton>
    </HeaderPro>
  );
};

export default HeaderProfile;
