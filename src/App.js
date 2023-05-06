import { useSelector } from 'react-redux';
import Navbar from './pages/Navbar';
import AddProduct from './pages/Products/AddProduct';
import ProductsList from './pages/Products/ProductsList';
import { MENULIST } from './redux/mainSlice';

const App = () => {
  const { pageURL } = useSelector((state) => state.ecommercesite);
  return (
    <>
      <Navbar />

      {pageURL === MENULIST.ProductsList ? <ProductsList /> : <AddProduct />}
    </>
  );
};

export default App;
