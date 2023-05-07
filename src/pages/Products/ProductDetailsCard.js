import { Delete, Edit } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  MENULIST,
  deleteProduct,
  editProduct,
  updateMenu,
} from '../../redux/mainSlice';

const ProductDetailsCard = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(prod));
  };

  const handleEditProduct = () => {
    dispatch(editProduct(prod));
    dispatch(updateMenu(MENULIST.AddProducts));
  };

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item md={2} sm={4} xs={12}>
              <img src={prod.imgUrl} width="100%" alt={prod.name} />
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {prod.name}
              </Typography>
              <Typography variant="h5" sx={{ mb: 5 }}>
                Rs. {prod.price}
              </Typography>

              <Rating name="read-only" value={prod.rating} readOnly sx={{}} />
            </Grid>
            <Grid item md={8} sm={6} xs={12}>
              <Typography variant="strong" sx={{ textAlign: 'justify' }}>
                {prod.description}
              </Typography>
              <br />
              <Typography
                variant="div"
                component="div"
                sx={{ mt: 3, textAlign: 'right' }}
              >
                <IconButton onClick={handleEditProduct}>
                  <Edit htmlColor="orange" />
                </IconButton>
                <IconButton sx={{ mr: 3, ml: 1 }} onClick={handleDeleteProduct}>
                  <Delete htmlColor="red" />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetailsCard;
