// Import configureStore function from redux-toolkit to configure the store
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./components/rootReducer";
// import personalInfoReducer from "./components/personalInfoReducer";

const store = configureStore({
  reducer: rootReducer,
})

export default store;