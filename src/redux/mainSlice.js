import { createSlice } from '@reduxjs/toolkit';

export const MENULIST = {
  ProductsList: 'ProductsList',
  AddProducts: 'AddProducts',
};

export const mainSlice = createSlice({
  name: 'ecommercesite',
  initialState: {
    pageURL: MENULIST.ProductsList,
    allProducts: [],
    isEdit: null,
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
      state.pageURL = MENULIST.ProductsList;
    },
    updateMenu: (state, action) => {
      state.pageURL = action.payload;
    },
    deleteProduct: (state, action) => {
      state.allProducts = state.allProducts.filter(
        (x) => x.id !== action.payload.id
      );
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
    editProduct: (state, action) => {
      state.isEdit = action.payload;
    },
    updateProduct: (state, action) => {
      let tmpAllProds = JSON.parse(JSON.stringify(state.allProducts)); // DEEP COPY
      tmpAllProds = tmpAllProds.map((x) => {
        if (x.id === action.payload.id) {
          x = action.payload;
        }
        return x;
      });
      state.allProducts = tmpAllProds;
      console.log(state.allProducts, tmpAllProds);
      state.isEdit = null;
      state.pageURL = MENULIST.ProductsList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addAllProducts,
  updateMenu,
  deleteProduct,
  sortProductByPrice,
  addNewProduct,
  editProduct,
  updateProduct,
} = mainSlice.actions;

export default mainSlice.reducer;
