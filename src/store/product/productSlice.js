import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    selectedSize: "",
  },

  reducers: {
    updateSize(state, action) {
      state.selectedSize = action.payload;
    },
  },
});

export const { updateSize } = productSlice.actions;

export default productSlice.reducer;
