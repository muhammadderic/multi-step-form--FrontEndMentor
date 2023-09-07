import AddOn from "./AddOn";
import "../styles/add-ons.css";

function AddOns() {
  return (
    <div id="add-ons">
      <AddOn title="Online service" text="Access to multiplayer games" price="1" />
      <AddOn title="Larger storage" text="Extra 1TB of cloud save" price="2" />
      <AddOn title="Customizable Profile" text="Custom theme on your profile" price="2" />
    </div>
  )
}

export default AddOns;