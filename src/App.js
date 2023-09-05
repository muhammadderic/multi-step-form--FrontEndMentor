import MainContent from "./components/MainContent";
import StepButtons from "./components/StepButtons";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

function App() {
  return (
    <div id="app-container">
      <Sidebar />
      <MainContent />
      <StepButtons />
    </div>
  );
}

export default App;
