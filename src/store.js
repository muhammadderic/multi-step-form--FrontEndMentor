// Import configureStore function from redux-toolkit to configure the store
import { configureStore } from "@reduxjs/toolkit";

import personalInfoReducer from "./components/personalInfoReducer";

const store = configureStore({
  reducer: personalInfoReducer,
})

export default store;