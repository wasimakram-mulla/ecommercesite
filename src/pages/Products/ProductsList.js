import { Box, Button } from '@mui/material';
import ProductDetailsCard from './ProductDetailsCard';
import { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAllProducts } from '../../redux/mainSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.ecommercesite);

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
      <Box sx={{ textAlign: 'right', my: 2 }}>
        <Button variant="contained" color="secondary" size="small">
          Sort by price
        </Button>
      </Box>

      {allProducts &&
        allProducts.map((prod, index) => (
          <Fragment key={index}>
            <ProductDetailsCard prod={prod} />
          </Fragment>
        ))}
    </>
  );
};

export default ProductsList;
