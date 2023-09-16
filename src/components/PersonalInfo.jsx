import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "./personalInfoReducer";
import "../styles/personal-info.css";

function PersonalInfo() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(state => state.personalInfoReducer.personalInfoData);
  const { errorName, errorEmail, errorPhone } = useSelector(state => state.personalInfoReducer.errors);

  const handleChange = (e) => {
    // Get the name and value from the event target
    const { name, value } = e.target;
    // Dispatch the updatePersonalInfo action with the name and value as payload
    dispatch(updatePersonalInfo({ name, value }));
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="name" className="input__label">Name</label>
        <input className="content__input input-border" type="text" id="name" name="name" defaultValue={name} onChange={handleChange} placeholder="e.g. Stephen King" />
        <p className={`error-input ${errorName ? "" : "error-display-none"}`}>This field is required</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="email" className="input__label">Email Address</label>
        <input className="content__input input-border" type="text" id="email" name="email" defaultValue={email} onChange={handleChange} placeholder="e.g. stephenking@lorem.com" />
        <p className={`error-input ${errorEmail ? "" : "error-display-none"}`}>This field is required</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="phone" className="input__label">Phone Number</label>
        <input className="content__input" type="tel" id="phone" name="phone" defaultValue={phone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
        <p className={`error-input ${errorPhone ? "" : "error-display-none"}`}>This field is required</p>
      </div>
    </form>
  )
}

export default PersonalInfo;