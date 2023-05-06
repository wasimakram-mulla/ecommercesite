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
    allProducts: [],
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    updateMenu: (state, action) => {
      state.pageURL = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAllProducts, updateMenu } = mainSlice.actions;

export default mainSlice.reducer;
