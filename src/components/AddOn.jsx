function AddOn({ title, text, price }) {
  return (
    <div className="add-on">
      <input type="checkbox" id="check" name="check" className="add-on__checkbox" />
      <div className="add-on__detail">
        <p className="add-on__title">{title}</p>
        <p className="add-on__text">{text}</p>
      </div>
      <div className="add-on__price">+${price}/mo</div>
    </div>
  )
}

export default AddOn;