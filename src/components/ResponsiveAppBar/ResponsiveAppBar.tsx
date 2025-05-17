import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Button, Theme, Typography } from '@mui/material';

const pages = ['Home', 'My Work', 'More'];

const handleOpenUserMenu = () => {};

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: '15px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 0,
              marginRight: '4cqw',
              borderStyle: 'solid',
              borderRadius: '8px',
              borderColor: (theme: Theme) => theme.palette.Icon.Light,
            }}
          >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                sx={{
                  bgcolor: (theme: Theme) => theme.palette.Icon.Dark,
                  // borderColor: (theme: Theme) => theme.palette.background.opposite,
                }}
                variant="rounded"
              >
                MI
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => {
              return (
                <Button variant="text">
                  <Typography variant="h6" sx={{ fontFamily: 'inter', fontWeight: '400', fontSize: '1rem' }}>
                    {page}
                  </Typography>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
