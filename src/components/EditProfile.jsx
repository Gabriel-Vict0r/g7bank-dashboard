import React from "react";
import { WrapperInfoProfile } from "./pages/Profile/Profile.style";
const EditProfile = ({ nameParam, param, direction }) => {
  return (
    <WrapperInfoProfile $direction="column">
      <p>{nameParam}</p>
      <input type="text" name="text" id="text" />
    </WrapperInfoProfile>
  );
};

export default EditProfile;
