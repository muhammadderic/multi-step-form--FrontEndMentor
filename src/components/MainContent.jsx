// import PersonalInfo from "./PersonalInfo";
// import UserPlan from "./UserPlan";
// import AddOns from "./AddOns";
// import Summary from "./Summary";
import Confirmation from "./Confirmation";
// import MainContentTitle from "./MainContentTitle";
import "../styles/main-content.css";

function MainContent({ title, subtitle }) {
  return (
    <div id="main-content">
      {/* <MainContentTitle title={title} subtitle={subtitle} /> */}
      {/* <PersonalInfo /> */}
      {/* <UserPlan /> */}
      {/* <AddOns /> */}
      {/* <Summary /> */}
      <Confirmation />
    </div>
  )
}

export default MainContent;