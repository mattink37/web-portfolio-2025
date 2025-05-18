import PageBody from '@/components/PageBody/PageBody';
import ResponsiveAppBar from '@/components/ResponsiveAppBar/ResponsiveAppBar';
import { Container } from '@mui/material';
import { useState } from 'react';

interface BaseProps {
  PageContent: JSX.Element;
}

const Base: React.FC<BaseProps> = ({ PageContent }) => {
  const [displayNav] = useState(true);

  return (
    <Container sx={{ py: 2, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {displayNav && <ResponsiveAppBar />}
      <PageBody PageContent={PageContent} />
    </Container>
  );
};

export default Base;
