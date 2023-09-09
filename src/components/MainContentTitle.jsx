function MainContentTitle({ title, subtitle }) {
  return (
    <div className="main-content__top">
      <h1 className="main-content__title">{title}</h1>
      <p className="main-content__subtitle">{subtitle}</p>
    </div>
  )
}

export default MainContentTitle;