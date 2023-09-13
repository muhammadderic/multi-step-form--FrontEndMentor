import { useDispatch, useSelector } from "react-redux";
import { validatePersonalInfo } from "./personalInfoReducer";
import "../styles/step-buttons.css";

function StepButtons() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.step);
  const personalInfoData = useSelector(state => state.personalInfoData);

  const handleNext = () => {
    dispatch(validatePersonalInfo());
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