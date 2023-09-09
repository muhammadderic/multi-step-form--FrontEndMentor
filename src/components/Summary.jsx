import "../styles/summary.css";

function Summary() {
  return (
    <div id="summary">
      <div className="summary__box">
        <div className="summary__box__child">
          <div className="summary__box__first-text">
            <p className="text__add-on">Arcade (Monthly)</p>
            <a href="/" className="text__add-on__link">Change</a>
          </div>
          <div className="summary__box__first-price">
            $90/yr
          </div>
        </div>
        <div className="summary__line"></div>
        <div className="summary__box__child">
          <div className="summary__box__text">Online service</div>
          <div className="summary__box__price">+$10/yr</div>
        </div>
        <div className="summary__box__child">
          <div className="summary__box__text">Large storage</div>
          <div className="summary__box__price">+$20/yr</div>
        </div>
      </div>
      <div className="summary__total-wrapper">
        <p className="summary__box__text">Total (per-year)</p>
        <p className="total__price">$120/yr</p>
      </div>
    </div>
  )
}

export default Summary;