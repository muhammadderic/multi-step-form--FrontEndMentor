function SummaryAddOn({ title, price }) {
  return (
    <div className="summary__box__child">
      <div className="summary__box__text">{title}</div>
      <div className="summary__box__price">+${price}/yr</div>
    </div>
  )
}

export default SummaryAddOn;