import { Grid2, Paper, Theme } from '@mui/material';

interface PageBodyProps {
  PageContent: JSX.Element;
}

const PageBody: React.FC<PageBodyProps> = ({ PageContent }) => {
  return (
    <Grid2 container justifyContent="center">
      <Grid2 size={{ xs: 12 }}>
        <Paper
          sx={{
            flexGrow: 1,
            borderRadius: '8px',
            backgroundColor: (theme: Theme) => theme.palette.Ink.Darkest,
          }}
        >
          {PageContent}
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default PageBody;
