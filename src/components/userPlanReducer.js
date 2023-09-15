import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlanData: [],
}

const userPlanReducer = createSlice({
  name: "user plan",
  initialState,
  reducers: {
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

export const { updateUserPlan } = userPlanReducer.actions;

export default userPlanReducer.reducer;