import { useSelector } from "react-redux";
import MainContentTitle from "./MainContentTitle";
import PersonalInfo from "./PersonalInfo";
import UserPlan from "./UserPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Confirmation from "./Confirmation";
import "../styles/main-content.css";

function MainContent({ title, subtitle }) {
  const step = useSelector(state => state.step);

  return (
    <div id="main-content">
      {step !== 4 && <MainContentTitle title={title} subtitle={subtitle} />}
      {step === 0 && <PersonalInfo />}
      {step === 1 && <UserPlan />}
      {step === 2 && <AddOns />}
      {step === 3 && <Summary />}
      {step === 4 && <Confirmation />}
    </div>
  )
}

export default MainContent;