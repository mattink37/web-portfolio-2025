import { Divider, Grid2, Paper, Theme, Tooltip, Typography } from '@mui/material';
import MattImage from '@/assets/IMG_7758.jpg';

const PageBody = () => {
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
          <Grid2 container>
            <Grid2 size={{ xs: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'inter',
                  fontWeight: '400',
                  fontSize: '1rem',
                  p: '24px',
                }}
              >
                Hi, I'm Matt Inkeles 👋
              </Typography>
              <Divider variant="middle" />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'inter',
                  fontWeight: '400',
                  fontSize: '1rem',
                  p: '24px',
                }}
              >
                I'm a software engineer from Atlanta, Georgia, passionate about building intuitive web applications and
                solving complex problems with clean, efficient code. With experience across modern JavaScript frameworks
                and a keen eye for design, I enjoy creating seamless user experiences and collaborating with teams to
                deliver impactful solutions.
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: '20px' }}>
              <Tooltip title="From the Nevada side of Lake Tahoe!">
                <img
                  src={MattImage}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    display: 'block',
                    borderStyle: 'solid',
                  }}
                  alt="Matt Inkeles"
                />
              </Tooltip>
            </Grid2>
          </Grid2>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default PageBody;
