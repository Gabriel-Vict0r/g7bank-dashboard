import React, { useContext } from "react";
import Home from "./Dashboard/Graphs";
import Profile from "./Profile/Profile";
import AssetAndBalance from "./Wallet/Asset&Balance";
import { EditPages, ShowPages } from "../../components/Contexts/ShowPages";

const Pages = () => {
  const { show, showProfile, shoWallet } = useContext(ShowPages);

  return (
    <>
      {show && <Home />}
      {showProfile && <Profile />}
      {shoWallet && <AssetAndBalance />}
    </>
  );
};

export default Pages;
