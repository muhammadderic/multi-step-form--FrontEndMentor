import { useSelector } from "react-redux";
import SummaryAddOn from "./SummaryAddOn";
import "../styles/summary.css";

function Summary() {
  const { userPlanSelected, userPlanTime } = useSelector(state => state.userPlanReducer);
  const { addOnsSelectedData, totalAddOnsSelectedPrice } = useSelector(state => state.addOnsReducer);

  return (
    <div id="summary">
      <div className="summary__box">
        <div className="summary__box__child">
          <div className="summary__box__first-text">
            <p className="text__add-on">{userPlanSelected.userPlanTitle} ({userPlanTime})</p>
            <a href="/" className="text__add-on__link">Change</a>
          </div>
          <div className="summary__box__first-price">
            ${userPlanSelected.userPlanPrice}/yr
          </div>
        </div>
        <div className="summary__line"></div>
        {addOnsSelectedData.map(addOnData => {
          return <SummaryAddOn
            key={addOnData.addOnTitle}
            title={addOnData.addOnTitle}
            price={addOnData.addOnPrice} />
        })}
      </div>
      <div className="summary__total-wrapper">
        <p className="summary__box__text">Total (per-year)</p>
        <p className="total__price">${totalAddOnsSelectedPrice}/yr</p>
      </div>
    </div>
  )
}

export default Summary;