import { useSelector } from "react-redux";
import "../styles/step-buttons.css";

function StepButtons() {
  const step = useSelector(state => state.step);
  const personalInfoData = useSelector(state => state.personalInfoData);

  const handleNext = () => {
    console.log(personalInfoData);
  }

  const handlePrev = () => {
    console.log(personalInfoData);
  };

  return (
    <div id="step-buttons">
      {step !== 0 && <button className="btn" onClick={handlePrev}>Go Back</button>}
      <button className={`btn ${step === 0 ? "next-alone" : ""}`} onClick={handleNext}>Next Step</button>
    </div>
  )
}

export default StepButtons;