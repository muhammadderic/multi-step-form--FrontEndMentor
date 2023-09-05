// import PersonalInfo from "./PersonalInfo";
import UserPlan from "./UserPlan";
import "../styles/main-content.css";

function MainContent({ title, subtitle }) {
  return (
    <div id="main-content">
      <div className="main-content__top">
        <h1 className="main-content__title">{title}</h1>
        <p className="main-content__subtitle">{subtitle}</p>
      </div>
      {/* <PersonalInfo /> */}
      <UserPlan />
    </div>
  )
}

export default MainContent;