import { Adb } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { MENULIST, updateMenu } from '../../redux/mainSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              eCommerce
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => dispatch(updateMenu(MENULIST.ProductsList))}
              >
                Products
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => dispatch(updateMenu(MENULIST.AddProducts))}
              >
                Add Product
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button variant="text" sx={{ color: 'white' }}>
                John Doe
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="John Doe"
                    src="https://mui.com/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
