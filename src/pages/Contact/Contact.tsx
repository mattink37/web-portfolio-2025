import { Button, Divider, Grid2, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Grid2 container sx={{ py: { xs: 4, sm: 4 } }}>
      <Grid2 size={{ xs: 12 }} sx={{ px: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'inter',
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: '#fff',
            textShadow: '1px 2px 8px rgba(0,0,0,0.25)',
            letterSpacing: '0.02em',
          }}
        >
          Contact Me
        </Typography>
        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mt: 2, mb: 3 }} />

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'inter',
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            color: '#e0e0e0',
            lineHeight: 1.75,
            maxWidth: 680,
            mb: 3,
          }}
        >
          If you're looking for help building or improving a website, I'm taking on
          contract work and I'd love to hear what you have in mind. Send me an email and
          I'll get back to you. You can also find me on LinkedIn and GitHub.
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2>
            <Button
              component="a"
              href="mailto:mattinkeles37@gmail.com"
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
            >
              mattinkeles37@gmail.com
            </Button>
          </Grid2>
          <Grid2>
            <Button
              component="a"
              href="https://www.linkedin.com/in/mattinkeles/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Grid2>
          <Grid2>
            <Button
              component="a"
              href="https://github.com/mattink37"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Contact;
