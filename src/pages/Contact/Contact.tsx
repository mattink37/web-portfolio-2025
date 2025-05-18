import { Divider, Grid2, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12 }}>
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
          Contact Me
        </Typography>
        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        <Typography
          variant="body1"
          sx={(theme) => ({
            fontFamily: 'inter',
            fontWeight: 400,
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            p: '24px',
            color: theme.palette.text.primary,
            lineHeight: 1.7,
            textShadow: '0 1px 4px rgba(0,0,0,0.15)',
          })}
        >
          <Link
            to="mailto:mattinkeles37@gmail.com"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <EmailIcon sx={{ color: (theme) => theme.palette.primary.main, verticalAlign: 'middle' }} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mattinkeles/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <LinkedInIcon sx={{ color: (theme) => theme.palette.primary.main, verticalAlign: 'middle' }} />
          </Link>
          <br />
          Please feel free to reach out!
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default Contact;
