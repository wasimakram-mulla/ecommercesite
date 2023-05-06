import { Box, Button } from '@mui/material';
import ProductDetailsCard from './ProductDetailsCard';
import { useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
  useEffect(() => {
    fetchAllApi();
  }, []);

  const fetchAllApi = () => {
    axios.get(process.env.REACT_APP_DB_PATH).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Box sx={{ textAlign: 'right', my: 2 }}>
        <Button variant="contained" color="secondary" size="small">
          Sort by price
        </Button>
      </Box>

      <ProductDetailsCard />
      <ProductDetailsCard />
    </>
  );
};

export default ProductsList;
