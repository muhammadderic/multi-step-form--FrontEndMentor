import { combineReducers } from "@reduxjs/toolkit";

import personalInfoReducer from "./personalInfoReducer";
import userPlanReducer from "./userPlanReducer";
import addOnsReducer from "./addOnsReducer";

const rootReducer = combineReducers({
  personalInfoReducer,
  userPlanReducer,
  addOnsReducer,
})

export default rootReducer;