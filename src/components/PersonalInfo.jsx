import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "./personalInfoReducer";
import "../styles/personal-info.css";

function PersonalInfo() {
  const dispatch = useDispatch();
  const { name: storeName, email: storeEmail, phone: storePhone } = useSelector(state => state.personalInfoData);

  const handleChange = (e) => {
    // Get the name and value from the event target
    const { name, value } = e.target;
    // Dispatch the updatePersonalInfo action with the name and value as payload
    dispatch(updatePersonalInfo({ name, value }));
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="name">Name</label>
        <input className="content__input input-border" type="text" id="name" name="name" defaultValue={storeName} onChange={handleChange} placeholder="e.g. Stephen King" />
        <p className="error-input error-display-none">This field is required</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email Address</label>
        <input className="content__input input-border" type="text" id="email" name="email" defaultValue={storeEmail} onChange={handleChange} placeholder="e.g. stephenking@lorem.com" />
        <p className="error-inpu error-display-none">This field is required</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="phone">Phone Number</label>
        <input className="content__input" type="tel" id="phone" name="phone" defaultValue={storePhone} onChange={handleChange} placeholder="e.g. +1 234 567 890" />
        <p className="error-input error-display-none">This field is required</p>
      </div>
    </form>
  )
}

export default PersonalInfo;