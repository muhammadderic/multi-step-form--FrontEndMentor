import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 2,
  personalInfoData: {
    name: "",
    email: "",
    phone: "",
  },
  userPlanData: [],
  errors: {
    errorName: false,
    errorEmail: false,
    errorPhone: false,
  }
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
    validatePersonalInfo: state => {
      const { name, email, phone } = state.personalInfoData;
      if (!name) {
        state.errors["errorName"] = true;
      } else {
        state.errors["errorName"] = false;
      }
      if (!email) {
        state.errors["errorEmail"] = true;
      } else {
        state.errors["errorEmail"] = false;
      }
      if (!phone) {
        state.errors["errorPhone"] = true;
      } else {
        state.errors["errorPhone"] = false;
      }
    },
    changeStep: (state, action) => {
      const { name, email, phone } = state.personalInfoData;
      const { direction } = action.payload;
      if (direction === "next") {
        if (state.step === 0 && name && email && phone) {
          state["step"] += 1;
        } else if (state.step === 1) {
          state["step"] += 1;
        }
      } else if (direction === "prev") {
        if (state.step > 0) {
          state["step"] -= 1;
        }
      }
    },
    updateUserPlan: (state, action) => {
      const { userPlan } = action.payload;
      if (state.userPlanData.includes(userPlan)) {
        const userPlanData = state.userPlanData;
        const userPlanDataFilter = userPlanData.filter(userData => userData !== userPlan);
        state.userPlanData = userPlanDataFilter;
      } else {
        const newUserPlanData = [...state.userPlanData, userPlan];
        state.userPlanData = newUserPlanData;
      }
    }
  }
})

// Export the action creators generated by createSlice
export const {
  updatePersonalInfo,
  validatePersonalInfo,
  changeStep,
  updateUserPlan,
} = personalInfoReducer.actions;

// Export the reducer function generated by createSlice
export default personalInfoReducer.reducer;