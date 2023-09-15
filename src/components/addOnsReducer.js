import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addOnsData: {
    onlineService: {
      addOnTitle: "Online service",
      addOnText: "Access to multiplayer games",
      addOnPrice: 1,
      addOnStatus: false,
    },
    largeStorage: {
      addOnTitle: "Larger storage",
      addOnText: "Extra 1TB of cloud save",
      addOnPrice: 2,
      addOnStatus: false,
    },
    customizableProfile: {
      addOnTitle: "Customizable Profile",
      addOnText: "Custom theme on your profile",
      addOnPrice: 1,
      addOnStatus: false,
    },
  },
  addOnsSelectedData: [],
  totalAddOnsSelectedPrice: 0,
}

const addOnsReducer = createSlice({
  name: "add ons",
  initialState,
  reducers: {
    updateAddOns: (state, action) => {
      const { status, title } = action.payload;
      const { onlineService, largeStorage, customizableProfile } = state.addOnsData;
      if (onlineService.addOnTitle === title) {
        state.addOnsData.onlineService = {
          ...onlineService,
          addOnStatus: !status,
        }
      } else if (largeStorage.addOnTitle === title) {
        state.addOnsData.largeStorage = {
          ...largeStorage,
          addOnStatus: !status,
        }
      } else if (customizableProfile.addOnTitle === title) {
        state.addOnsData.customizableProfile = {
          ...customizableProfile,
          addOnStatus: !status,
        }
      }
    },
    addOnsSelected: (state) => {
      const { onlineService, largeStorage, customizableProfile } = state.addOnsData;
      if (onlineService.addOnStatus) {
        state.addOnsSelectedData = [...state.addOnsSelectedData, onlineService];
      }
      if (largeStorage.addOnStatus) {
        state.addOnsSelectedData = [...state.addOnsSelectedData, largeStorage];
      }
      if (customizableProfile.addOnStatus) {
        state.addOnsSelectedData = [...state.addOnsSelectedData, customizableProfile];
      }
    },
    priceAddOnsSeleceted: (state) => {
      let price = 0;
      state.addOnsSelectedData.map(data => {
        return price += data.addOnPrice;
      })
      state.totalAddOnsSelectedPrice = price;
    }
  }
})

export const {
  updateAddOns,
  addOnsSelected,
  priceAddOnsSeleceted,
} = addOnsReducer.actions;

export default addOnsReducer.reducer;