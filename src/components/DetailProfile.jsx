import React from 'react'
import {WrapperInfoProfile} from './pages/Profile/Profile.style'
const DetailProfile = ({nameParam, param}) => {
  return (
    <WrapperInfoProfile>
      <p>{nameParam}</p>
      <p>:</p>
      <p>{param}</p>
    </WrapperInfoProfile>
  );
}

export default DetailProfile