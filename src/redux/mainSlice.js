import { createSlice } from '@reduxjs/toolkit';

export const MENULIST = {
  ProductsList: 'ProductsList',
  AddProducts: 'AddProducts',
};

export const mainSlice = createSlice({
  name: 'ecommercesite',
  initialState: {
    value: 0,
    pageURL: MENULIST.ProductsList,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    updateMenu: (state, action) => {
      state.pageURL = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, updateMenu } = mainSlice.actions;

export default mainSlice.reducer;
