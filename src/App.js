import { useDispatch, useSelector } from 'react-redux';
import Navbar from './pages/Navbar';
import AddProduct from './pages/Products/AddProduct';
import ProductsList from './pages/Products/ProductsList';
import {
  MENULIST,
  addAllProducts,
  resetCartFromStorage,
} from './redux/mainSlice';
import { useEffect } from 'react';
import axios from 'axios';
import ShowCartComponent from './pages/Cart';

const App = () => {
  const { pageURL } = useSelector((state) => state.ecommercesite);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllApi();
    fetchCartFromWebStorage();
  }, []);

  const fetchCartFromWebStorage = () => {
    dispatch(resetCartFromStorage());
  };

  const fetchAllApi = () => {
    axios.get(`${process.env.REACT_APP_DB_PATH}/productlist`).then((res) => {
      if (res) {
        dispatch(addAllProducts(res.data));
      }
    });
  };
  return (
    <>
      <Navbar />

      {pageURL === MENULIST.ProductsList && <ProductsList />}
      {pageURL === MENULIST.AddProducts && <AddProduct />}
      {pageURL === MENULIST.ShowCart && <ShowCartComponent />}
    </>
  );
};

export default App;
