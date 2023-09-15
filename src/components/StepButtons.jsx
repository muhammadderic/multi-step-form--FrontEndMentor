import { useDispatch, useSelector } from "react-redux";
import { validatePersonalInfo } from "./personalInfoReducer";
import { changeStep, changeStepFromStepOne } from "./stepReducer";
import { addOnsSelected, priceAddOnsSeleceted } from "./addOnsReducer";
import "../styles/step-buttons.css";

function StepButtons() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.stepReducer.step);
  const { personalInfoData } = useSelector(state => state.personalInfoReducer);
  const { userPlanSelected } = useSelector(state => state.userPlanReducer);
  const { addOnsSelectedData } = useSelector(state => state.addOnsReducer);

  const handleNext = () => {
    if (step === 0) {
      dispatch(validatePersonalInfo());
      dispatch(changeStepFromStepOne({ direction: "next", personalInfoData }));
    }
    if (step > 0 && step <= 4) {
      if (step === 2) {
        dispatch(addOnsSelected())
        dispatch(priceAddOnsSeleceted())
      }
      dispatch(changeStep({ direction: "next" }));
    }
  }

  const handlePrev = () => {
    dispatch(changeStep({ direction: "prev" }));
  };

  const handleSubmit = () => {
    const data = {
      personalInfoData,
      userPlanSelected,
      addOnsSelectedData,
    }
    console.log(data);
    dispatch(changeStep({ direction: "last" }));
  }

  return (
    <div id="step-buttons">
      {step !== 0 && <button className="btn" onClick={handlePrev}>Go Back</button>}
      {(step === 3) ?
        <button className={`btn confirm-btn ${step === 0 ? "next-alone" : ""}`} onClick={handleSubmit}>Confirm</button> :
        <button className={`btn ${step === 0 ? "next-alone" : ""}`} onClick={handleNext}>Next Step</button>}
    </div>
  )
}

export default StepButtons;