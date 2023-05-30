import React from "react";
import {
  HeaderPro,
  Name,
  Professional,
  WrapperInfs,
  WrapperButton,
  ImgProfile,
  ButtonEdit,
} from "./Profile.style";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
const HeaderProfile = ({ name, img, professional }) => {
  return (
    <HeaderPro>
      <WrapperInfs>
        <ImgProfile src={img} alt="imagem profile" />
        <Name>{name}</Name>
        <Professional>{professional}</Professional>
      </WrapperInfs>
      <WrapperButton>
        <ButtonEdit>
          <HiOutlineAdjustmentsHorizontal />
          Edit Profile
        </ButtonEdit>
      </WrapperButton>
    </HeaderPro>
  );
};

export default HeaderProfile;
