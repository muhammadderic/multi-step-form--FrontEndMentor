import MainContent from "./components/MainContent";
import StepButtons from "./components/StepButtons";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

function App() {
  return (
    <div id="app-container">
      <Sidebar />
      {/* <MainContent title="Personal info" subtitle="Please provide your name, email address, and phone number." /> */}
      {/* <MainContent title="Select your plan" subtitle="You have the option of monthly or yearly billing." /> */}
      {/* <MainContent title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." /> */}
      <MainContent title="Finishing up" subtitle="Double-check everything looks OK before confirming." />
      <StepButtons />
    </div>
  );
}

export default App;
