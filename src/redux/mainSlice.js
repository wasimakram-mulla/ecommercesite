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
    addNewProduct: (state, action) => {
      let tmpAllProds = JSON.parse(JSON.stringify(state.allProducts)); //DEEP COPY
      tmpAllProds = [...tmpAllProds, action.payload];
      console.log(tmpAllProds);
      state.allProducts = tmpAllProds;
      tmpAllProds = null;
    },
    updateMenu: (state, action) => {
      state.pageURL = action.payload;
    },
    sortProductByPrice: (state, action) => {
      if (action.payload === 'asc') {
        state.allProducts.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        state.allProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAllProducts, updateMenu, sortProductByPrice, addNewProduct } =
  mainSlice.actions;

export default mainSlice.reducer;
