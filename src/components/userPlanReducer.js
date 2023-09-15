import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlanData: "",
}

const userPlanReducer = createSlice({
  name: "user plan",
  initialState,
  reducers: {
    updateUserPlan: (state, action) => {
      const { userPlan } = action.payload;
      state.userPlanData = userPlan;
    }
  }
})

export const { updateUserPlan } = userPlanReducer.actions;

export default userPlanReducer.reducer;