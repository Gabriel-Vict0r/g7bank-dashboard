import { WrapperCard, WrapperTwo, Content } from "./Dashboard.style";
import Balance from "../../CardBalance";
import Earn from "../../CardEarn";
import Activity from "../../CardActivity";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import TotalTransaction from "../../TotalTransaction";
import QuickTransfer from "../../QuickTransfer";
import { Main, Tittle } from "../../../Global/GeneralComponents";

const Home = () => {
  return <Content>
    <Tittle>Dashboard</Tittle>
    <WrapperCard>
      <Balance subtitle="Current Balance" balance="$12,000.00" coin="USD" />
      <Earn
        subTitle="Earning"
        date="montly"
        earn="$5,000.00"
        percent="+35.5%"
      />
      <Activity subtitle="Weakly activity" />
    </WrapperCard>
    <WrapperTwo>
      <TotalTransaction />
      <QuickTransfer />
    </WrapperTwo>
  </Content>;
};
export default Home;
