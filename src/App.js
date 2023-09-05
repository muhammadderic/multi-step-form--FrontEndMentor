import MainContent from "./components/MainContent";
import StepButtons from "./components/StepButtons";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

function App() {
  return (
    <div id="app-container">
      <Sidebar />
      <MainContent title="Personal info" subtitle="Please provide your name, email address, and phone number." />
      <StepButtons />
    </div>
  );
}

export default App;
