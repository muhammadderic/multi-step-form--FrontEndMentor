import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  // Define the initial form data
  personalInfoData: {
    name: "",
    email: "",
    phone: "",
  },
};

const personalInfoReducer = createSlice({
  name: "personal info",
  initialState,
  reducers: {
    // Define a reducer to update the form data
    updatePersonalInfo: (state, action) => {
      // Get the name, email and phone from the action payload
      const { name, value } = action.payload;
      // Update the form data with the name, email and phone
      state.personalInfoData[name] = value;
    },
  }
})

// Export the action creators generated by createSlice
export const { updatePersonalInfo } = personalInfoReducer.actions;

// Export the reducer function generated by createSlice
export default personalInfoReducer.reducer;