import "../styles/main-content.css";

function MainContent() {
  return (
    <div id="main-content">
      <div className="main-content__top">
        <h1 className="main-content__title">Personal info</h1>
        <p className="main-content__subtitle">Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="e.g. Stephen King" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email Address</label>
          <input type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </div>
  )
}

export default MainContent;