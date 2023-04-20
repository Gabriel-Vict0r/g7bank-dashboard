import {
  CardBalance,
  SubTitle,
  ValueBalance,
  Coin,
} from "./pages/Dashboard/Dashboard.style";
const Balance = ({ balance, subtitle, coin }) => {
  return (
    <CardBalance>
      <SubTitle>{subtitle}</SubTitle>
      <ValueBalance>{balance}</ValueBalance>
      <Coin>{coin}</Coin>
    </CardBalance>
  );
};

export default Balance;
