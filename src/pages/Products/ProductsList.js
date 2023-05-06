import { Box, Button } from '@mui/material';
import ProductDetailsCard from './ProductDetailsCard';

const ProductsList = () => {
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
