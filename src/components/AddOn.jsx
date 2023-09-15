function AddOn({ title, text, price, status, clickHandler }) {
  return (
    <div
      className={`add-on ${(status) ? "add-on__selected" : ""}`}
      onClick={() => clickHandler(status, title)}>
      <input
        type="checkbox"
        id="check"
        name="check"
        className="add-on__checkbox"
        defaultChecked={status} />
      <div className="add-on__detail">
        <p className="add-on__title">{title}</p>
        <p className="add-on__text">{text}</p>
      </div>
      <div className="add-on__price">+${price}/mo</div>
    </div>
  )
}

export default AddOn;