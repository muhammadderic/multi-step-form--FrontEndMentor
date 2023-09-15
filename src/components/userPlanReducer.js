import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlanData: {
    arcade: {
      userPlanTitle: "arcade",
      userPlanPrice: 9,
    },
    advanced: {
      userPlanTitle: "advanced",
      userPlanPrice: 12,
    },
    pro: {
      userPlanTitle: "pro",
      userPlanPrice: 15,
    }
  },
  userPlanSelected: {
    userPlanTitle: "arcade",
    userPlanPrice: 9,
  },
  userPlanTime: "monthly",
}

const userPlanReducer = createSlice({
  name: "user plan",
  initialState,
  reducers: {
    updateUserPlan: (state, action) => {
      const { userPlan } = action.payload;
      const userPlanData = { ...state.userPlanData };
      const { arcade, advanced, pro } = userPlanData;
      if (arcade.userPlanTitle === userPlan) {
        state.userPlanSelected = { ...arcade };
      } else if (advanced.userPlanTitle === userPlan) {
        state.userPlanSelected = { ...advanced };
      } else if (pro.userPlanTitle === userPlan) {
        state.userPlanSelected = { ...pro };
      }
      // if (arcade.userPlanTitle === userPlan) {
      //   state.userPlanSelected.userTitle = arcade.userPlanTitle;
      //   state.userPlanSelected.userPrice = arcade.userPlanPrice;
      // } else if (advanced.userPlanTitle === userPlan) {
      //   state.userPlanSelected.userTitle = advanced.userPlanTitle;
      //   state.userPlanSelected.userPrice = advanced.userPlanPrice;
      // } else if (pro.userPlanTitle === userPlan) {
      //   state.userPlanSelected.userTitle = pro.userPlanTitle;
      //   state.userPlanSelected.userPrice = pro.userPlanPrice;
      // }
    },
    updateUserPlanTime: (state, action) => {
      const { time } = action.payload;
      state.userPlanTime = time;
    }
  }
})

export const { updateUserPlan, updateUserPlanTime } = userPlanReducer.actions;

export default userPlanReducer.reducer;