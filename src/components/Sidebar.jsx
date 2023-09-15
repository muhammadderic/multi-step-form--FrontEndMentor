import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import "../styles/sidebar.css";

function Sidebar() {
  const step = useSelector(state => state.stepReducer.step);

  return (
    <div id="sidebar">
      <SidebarItem number="1" title="Step 1" text="Your info" status={step === 0 ? true : false} />
      <SidebarItem number="2" title="Step 2" text="Select plan" status={step === 1 ? true : false} />
      <SidebarItem number="3" title="Step 3" text="Add-ons" status={step === 2 ? true : false} />
      <SidebarItem number="4" title="Step 4" text="Summary" status={step === 3 ? true : false} />
    </div>
  )
}

export default Sidebar;