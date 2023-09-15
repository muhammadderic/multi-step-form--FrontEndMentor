import { combineReducers } from "@reduxjs/toolkit";

import stepReducer from "./stepReducer";
import personalInfoReducer from "./personalInfoReducer";
import userPlanReducer from "./userPlanReducer";
import addOnsReducer from "./addOnsReducer";

const rootReducer = combineReducers({
  stepReducer,
  personalInfoReducer,
  userPlanReducer,
  addOnsReducer,
})

export default rootReducer;