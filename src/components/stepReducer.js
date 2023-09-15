import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 2,
}

const stepReducer = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      const { name, email, phone } = state.personalInfoData;
      const { direction } = action.payload;
      if (direction === "next") {
        if (state.step === 0 && name && email && phone) {
          state["step"] += 1;
        } else if (state.step <= 4) {
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

export const { changeStep } = stepReducer.actions;

export default stepReducer.reducer;