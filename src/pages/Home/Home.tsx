import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar';
import { Container, Grid2 } from '@mui/material';
import { useState } from 'react';

const Home = () => {
  const [displayNav, setDisplayNav] = useState(true);

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      {displayNav && <ResponsiveAppBar />}
      <Grid2></Grid2>
    </Container>
  );
};

export default Home;
