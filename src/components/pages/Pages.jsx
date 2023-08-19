import React, { useContext } from "react";
import Home from "./Dashboard/Graphs";
import Profile from "./Profile/Profile";
import AssetAndBalance from "./Wallet/Asset&Balance";
import { EditPages, ShowPages } from "../../components/Contexts/ShowPages";

const Pages = () => {
  const { show, showProfile, showWallet } = useContext(ShowPages);
  return <>
    {show && <Home />}
    {showProfile && <Profile />}
    {showWallet && <AssetAndBalance />}
  </>;
};

export default Pages;
