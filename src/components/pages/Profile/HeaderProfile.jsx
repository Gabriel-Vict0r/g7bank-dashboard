import React from "react";
import {
  HeaderPro,
  Name,
  Professional,
  WrapperInfs,
  ImgProfile,
} from "./Profile.style";
const HeaderProfile = ({ name, img, professional }) => {
  return (
    <HeaderPro>
      <WrapperInfs>
        <ImgProfile src={img} alt="imagem profile" />
        <Name>{name}</Name>
        <Professional>{professional}</Professional>
      </WrapperInfs>
    </HeaderPro>
  );
};

export default HeaderProfile;
