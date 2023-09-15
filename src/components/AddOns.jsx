import { useDispatch, useSelector } from "react-redux";
import AddOn from "./AddOn";
import { updateAddOns } from "./addOnsReducer";
import "../styles/add-ons.css";

function AddOns() {
  const dispatch = useDispatch();
  const { onlineService, largeStorage, customizableProfile } = useSelector(state => state.addOnsReducer.addOnsData);

  const addOnHandler = (status, title) => {
    dispatch(updateAddOns({ status, title }));
  }

  return (
    <div id="add-ons">
      <AddOn
        title={onlineService.addOnTitle}
        text={onlineService.addOnText}
        price={onlineService.addOnPrice}
        status={onlineService.addOnStatus}
        clickHandler={addOnHandler} />
      <AddOn
        title={largeStorage.addOnTitle}
        text={largeStorage.addOnText}
        price={largeStorage.addOnPrice}
        status={largeStorage.addOnStatus}
        clickHandler={addOnHandler} />
      <AddOn
        title={customizableProfile.addOnTitle}
        text={customizableProfile.addOnText}
        price={customizableProfile.addOnPrice}
        status={customizableProfile.addOnStatus}
        clickHandler={addOnHandler} />
    </div>
  )
}

export default AddOns;