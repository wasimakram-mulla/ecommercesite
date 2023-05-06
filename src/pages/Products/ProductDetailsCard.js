import { Delete, Edit } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';

const ProductDetailsCard = () => {
  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item md={2} sm={4} xs={12}>
              <img
                src="https://media.istockphoto.com/id/1199428736/photo/turquoise-arm-chair-isolated-on-white-background-front-view-of-upholstered-wingback-accent.jpg?s=612x612&w=0&k=20&c=llAcD0t5fcHgyyPgPoh6S866k2kIQYSjAtLwOwoZ4W8="
                width="100%"
              />
            </Grid>
            <Grid item md={2} sm={2} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Red Seat
              </Typography>
              <Typography variant="h5" sx={{ mb: 5 }}>
                Rs. 4000
              </Typography>

              <Rating name="read-only" value={5} readOnly sx={{}} />
            </Grid>
            <Grid item md={8} sm={6} xs={12}>
              <Typography variant="strong" sx={{ textAlign: 'justify' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <br />
              <Typography
                variant="div"
                component="div"
                sx={{ mt: 3, textAlign: 'right' }}
              >
                <IconButton>
                  <Edit htmlColor="orange" />
                </IconButton>
                <IconButton sx={{ mr: 3, ml: 1 }}>
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
