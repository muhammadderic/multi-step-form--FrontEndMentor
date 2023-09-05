import "../styles/personal-info.css";

function PersonalInfo() {
  return (
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
  )
}

export default PersonalInfo;