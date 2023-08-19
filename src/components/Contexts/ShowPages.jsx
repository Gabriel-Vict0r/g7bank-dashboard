import React, { createContext, useState } from "react";

export const ShowPages = createContext();

export function EditPages({ children }) {
  const [show, setShow] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [shoWallet, setShoWallet] = useState(false);
  return (
    <ShowPages.Provider
      value={{
        show,
        setShow,
        showProfile,
        setShowProfile,
        shoWallet,
        setShoWallet,
      }}
    >
      {children}
    </ShowPages.Provider>
  );
}
