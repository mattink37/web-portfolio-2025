import PageBody from '@/components/PageBody/PageBody';
import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar';
import { Container } from '@mui/material';
import { useState } from 'react';

const Home = () => {
  const [displayNav] = useState(true);

  return (
    <Container sx={{ py: 2, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {displayNav && <ResponsiveAppBar />}
      <PageBody />
    </Container>
  );
};

export default Home;
