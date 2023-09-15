import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
}

const stepReducer = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStepFromStepOne: (state, action) => {
      const { name, email, phone } = action.payload.personalInfoData;
      const { direction } = action.payload;
      if (direction === "next") {
        if (state.step === 0 && name && email && phone) {
          state["step"] += 1;
        }
      }
    },
    changeStep: (state, action) => {
      const { direction } = action.payload;
      if (direction === "next") {
        if (state.step <= 4) {
          state["step"] += 1;
        }
      } else if (direction === "prev") {
        if (state.step > 0) {
          state["step"] -= 1;
        }
      } else {
        state.step = 4;
      }
    },
  }
})

export const { changeStep, changeStepFromStepOne } = stepReducer.actions;

export default stepReducer.reducer;