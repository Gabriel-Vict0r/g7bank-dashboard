import {
  SubTitle,
  EarnValue,
  Date,
  Percent,
  CardEarn,
} from "./pages/Dashboard/Dashboard.style";

const Earn = ({ subTitle, earn, date, percent }) => {
  return (
    <CardEarn>
      <SubTitle>{subTitle}</SubTitle>
      <Date>{date}</Date>
      <EarnValue>{earn}</EarnValue>
      <Percent>{percent}</Percent>
    </CardEarn>
  );
};

export default Earn;