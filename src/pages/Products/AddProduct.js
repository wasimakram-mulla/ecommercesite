import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MENULIST, addNewProduct, updateMenu } from '../../redux/mainSlice';

const FormData = {
  name: '',
  description: '',
  price: 0,
  rating: 0,
  imgUrl: '',
};
const AddProduct = () => {
  const [formData, setFormData] = useState(FormData);
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    if (e.target.name === 'price' || e.target.name === 'rating') {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitProduct = () => {
    dispatch(addNewProduct(formData));
    setFormData(FormData);
    dispatch(updateMenu(MENULIST.ProductsList));
  };

  return (
    <>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item md={3} sm={3} xs={12}></Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Card>
            <CardContent>
              <TextField
                label="Enter Name"
                placeholder="Enter Name"
                size="small"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                label="Enter Description"
                placeholder="Enter Description"
                size="small"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                label="Enter Price"
                placeholder="Enter Price"
                size="small"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                type="number"
                label="Enter Rating"
                placeholder="Enter Rating"
                size="small"
                InputProps={{ inputProps: { min: 0, max: 5 } }}
                error={
                  formData.rating < 0 || formData.rating > 5 ? true : false
                }
                name="rating"
                value={formData.rating}
                onChange={handleFormChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                label="Enter Image URL"
                placeholder="Enter Image URL"
                size="small"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleFormChange}
                fullWidth
              />
              <br />
              <br />
              <Button
                variant="contained"
                size="small"
                disabled={
                  !formData.name ||
                  !formData.description ||
                  !formData.imgUrl ||
                  formData.rating < 0 ||
                  formData.rating > 5
                }
                onClick={submitProduct}
              >
                Add Product
              </Button>
              <br />
              <br />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
