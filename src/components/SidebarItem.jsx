function SidebarItem({ number, title, text, status }) {
  return (
    <div className="step-wrapper">
      <div className={`step__circle ${status ? "active" : ""}`}>
        {number}
      </div>
      <div className="step__detail">
        <p className="step__title">{title}</p>
        <p className="step__text">{text}</p>
      </div>
    </div>
  )
}

export default SidebarItem;