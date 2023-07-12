import React from "react";
import { WrapperEditInfo } from "./pages/Profile/Profile.style";
const EditProfile = ({ nameParam, param, inputType }) => {
  return (
    <WrapperEditInfo>
      <p>{nameParam}</p>
      <input type={inputType} name="text" id="text" />
    </WrapperEditInfo>
  );
};

export default EditProfile;