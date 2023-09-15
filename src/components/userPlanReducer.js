import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlanData: "",
  userPlanTime: "monthly",
}

const userPlanReducer = createSlice({
  name: "user plan",
  initialState,
  reducers: {
    updateUserPlan: (state, action) => {
      const { userPlan } = action.payload;
      state.userPlanData = userPlan;
    },
    updateUserPlanTime: (state, action) => {
      const { time } = action.payload;
      state.userPlanTime = time;
    }
  }
})

export const { updateUserPlan, updateUserPlanTime } = userPlanReducer.actions;

export default userPlanReducer.reducer;