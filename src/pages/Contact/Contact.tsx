import { Box, Button, Divider, Grid2, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import AvailabilityPill from '@/components/AvailabilityPill/AvailabilityPill';

const entered = { opacity: 1, y: 0 };
const hidden = { opacity: 0, y: 30 };

const Contact = () => {
  return (
    <Grid2 container sx={{ py: { xs: 4, sm: 4 } }}>
      <Grid2 size={{ xs: 12 }} sx={{ px: { xs: 2, sm: 4 } }}>
        <AvailabilityPill />
        <motion.div initial={hidden} animate={entered} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'inter',
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,0.35)',
              letterSpacing: '0.01em',
            }}
          >
            Let&apos;s work together
          </Typography>
        </motion.div>

        <motion.div initial={hidden} animate={entered} transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'inter',
              fontWeight: 600,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              color: '#cfd8ff',
              mt: 1,
            }}
          >
            <Box component="span" className="mic-gradient-text">
              Let's build something great
            </Box>{' '}
            together.
          </Typography>
        </motion.div>

        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mt: 2, mb: 3 }} />

        <motion.div initial={hidden} animate={entered} transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'inter',
              fontSize: { xs: '1.05rem', sm: '1.15rem' },
              color: '#e0e0e0',
              lineHeight: 1.75,
              maxWidth: 680,
            }}
          >
            Have a project in mind? I'd love to hear about it. Send me an email and I'll
            get back to you with a straight answer on scope, timeline, and cost. You can
            also find me on LinkedIn and GitHub.
          </Typography>
        </motion.div>

        <Stack spacing={2} sx={{ mt: 3, flexWrap: 'wrap' }}>
          <Button
            component="a"
            href="mailto:mattinkeles37@gmail.com"
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            sx={{
              background: 'linear-gradient(90deg, #4dd6ff, #7c5bff 55%, #ff5fb0)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 700,
              borderRadius: '10px',
              height: 52,
            }}
          >
            mattinkeles37@gmail.com
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/mattinkeles/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            startIcon={<LinkedInIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.35)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '10px',
              height: 48,
            }}
          >
            LinkedIn
          </Button>
          <Button
            component="a"
            href="https://github.com/mattink37"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            sx={{
              borderColor: 'rgba(255,255,255,0.35)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '10px',
              height: 48,
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default Contact;