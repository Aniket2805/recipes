import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface favouriteState {
  items: string[];
}

const initialState: favouriteState = {
  items: [],
};

export const favouriteSlice = createSlice({
  name: "favoutrite",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = favouriteSlice.actions;

export default favouriteSlice.reducer;
