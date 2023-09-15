import { combineReducers } from "@reduxjs/toolkit";

import personalInfoReducer from "./personalInfoReducer";
import addOnsReducer from "./addOnsReducer";

const rootReducer = combineReducers({
  personalInfoReducer,
  addOnsReducer,
})

export default rootReducer;