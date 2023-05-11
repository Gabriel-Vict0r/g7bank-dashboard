import React from "react";
import { ImageProfile } from "../../Header.style";
import { HeaderPro, Name, Professional, WrapperInfs } from "./Profile.style";
const HeaderProfile = ({ name, img, professional }) => {
  return (
    <HeaderPro>
      <WrapperInfs>
        <ImageProfile src={img} />
        <Name>{name}</Name>
        <Professional>{professional}</Professional>
      </WrapperInfs>
    </HeaderPro>
  );
};

export default HeaderProfile;
