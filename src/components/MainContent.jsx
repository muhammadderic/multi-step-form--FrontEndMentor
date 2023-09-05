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
          <input className="content__input input-border" type="text" id="name" name="name" placeholder="e.g. Stephen King" />
          <p className="error-input error-display-none">This field is required</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email Address</label>
          <input className="content__input input-border" type="text" id="email" name="email" placeholder="e.g. stephenking@lorem.com" />
          <p className="error-inpu error-display-none">This field is required</p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Phone Number</label>
          <input className="content__input" type="tel" id="phone" name="phone" placeholder="e.g. +1 234 567 890" />
          <p className="error-input error-display-none">This field is required</p>
        </div>
      </form>
    </div>
  )
}

export default MainContent;