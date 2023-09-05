import SidebarItem from "./SidebarItem";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div id="sidebar">
      <SidebarItem number="1" title="Step 1" text="Your info" status={true} />
      <SidebarItem number="2" title="Step 2" text="Select plan" status={false} />
      <SidebarItem number="3" title="Step 3" text="Add-ons" status={false} />
      <SidebarItem number="4" title="Step 4" text="Summary" status={false} />
    </div>
  )
}

export default Sidebar;