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
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'inter',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  p: '24px',
                  color: '#fff',
                  textShadow: '1px 2px 8px rgba(0,0,0,0.25)',
                  letterSpacing: '0.02em',
                }}
              >
                Hi, I'm Matt Inkeles 👋
              </Typography>
              <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'inter',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  p: '24px',
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                  textShadow: '0 1px 4px rgba(0,0,0,0.15)',
                }}
              >
                I'm a software engineer from Atlanta, Georgia, passionate about building intuitive web applications and
                solving complex problems with clean, efficient code. With experience across modern JavaScript frameworks
                and a keen eye for design, I enjoy creating seamless user experiences and collaborating with teams to
                deliver impactful solutions.
              </Typography>
            </Grid2>

            <Grid2
              size={{ xs: 12, sm: 6 }}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: '20px' }}
            >
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
