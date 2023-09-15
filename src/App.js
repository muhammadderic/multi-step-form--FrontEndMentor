import { useSelector } from "react-redux";
import MainContent from "./components/MainContent";
import StepButtons from "./components/StepButtons";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

function App() {
  const step = useSelector(state => state.stepReducer.step);

  return (
    <div id="app-container">
      <Sidebar />
      {step === 0 && <MainContent title="Personal info" subtitle="Please provide your name, email address, and phone number." />}
      {step === 1 && <MainContent title="Select your plan" subtitle="You have the option of monthly or yearly billing." />}
      {step === 2 && <MainContent title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />}
      {step === 3 && <MainContent title="Finishing up" subtitle="Double-check everything looks OK before confirming." />}
      {step === 4 && <MainContent title="" subtitle="" />}
      {step === 4 ? "" : <StepButtons />}
    </div>
  );
}

export default App;
