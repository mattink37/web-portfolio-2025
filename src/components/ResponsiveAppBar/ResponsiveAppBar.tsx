import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Button, Theme, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = [
  {
    name: 'Home',
    id: '',
  },
  {
    name: 'My Work',
    id: 'my-work',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  const onPageClick = (pageId: string) => {
    navigate(`/${pageId}`);
  };

  return (
    <AppBar position="static" sx={{ mb: 2, borderRadius: '15px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 0,
              marginRight: '1cqw',
              borderStyle: 'solid',
              borderRadius: '8px',
              borderColor: (theme: Theme) => theme.palette.Icon.Light,
            }}
          >
            <IconButton sx={{ p: 0 }}>
              <Avatar
                sx={{
                  bgcolor: (theme: Theme) => theme.palette.Icon.Dark,
                  // borderColor: (theme: Theme) => theme.palette.background.opposite,
                }}
                variant="rounded"
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Permanent Marker',
                    color: (theme: Theme) => theme.palette.text.primary,
                  }}
                >
                  MI
                </Typography>
              </Avatar>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => {
              return (
                <Button variant="text" onClick={() => onPageClick(page.id)}>
                  <Typography
                    variant="h3"
                    textTransform="none"
                    sx={{
                      fontFamily: 'inter',
                      color: (theme: Theme) => theme.palette.text.primary,
                    }}
                  >
                    {page.name}
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
