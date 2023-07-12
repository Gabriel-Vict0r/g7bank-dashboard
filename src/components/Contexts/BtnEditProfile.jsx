import React, { createContext, useState} from "react";

export const BtnEditProfile = createContext();

export function EditProvider({ children }) {
  const [edit, setEdit] = useState(false);
  return (
    <BtnEditProfile.Provider value={{ edit, setEdit }}>
      {children}
    </BtnEditProfile.Provider>
  );
}
