import { useDispatch, useSelector } from 'react-redux';
import Navbar from './pages/Navbar';
import AddProduct from './pages/Products/AddProduct';
import ProductsList from './pages/Products/ProductsList';
import { MENULIST, addAllProducts } from './redux/mainSlice';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const { pageURL } = useSelector((state) => state.ecommercesite);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllApi();
  }, []);

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

      {pageURL === MENULIST.ProductsList ? <ProductsList /> : <AddProduct />}
    </>
  );
};

export default App;
