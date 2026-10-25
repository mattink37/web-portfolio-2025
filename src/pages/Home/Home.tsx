import { Button, Divider, Grid2, Tooltip, Typography, Box, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import MattImage from '@/assets/IMG_7758.jpg';

// Shared entrance: fade up from below. Each element passes its own delay via transition.
const entered = { opacity: 1, y: 0 };
const hidden = { opacity: 0, y: 30 };

const stack = ['React', 'TypeScript', 'Material UI', 'Responsive Design', 'APIs', 'Performance', 'Clean Code', 'Vite'];

const Home = () => {
  return (
    <Grid2 container sx={{ py: { xs: 4, sm: 4 } }}>
      {/* Text column */}
      <Grid2 size={{ xs: 12, sm: 12, md: 7 }} sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Availability pill */}
        <motion.div
          initial={hidden}
          animate={entered}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: '999px',
              bgcolor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
              mb: 3,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                bgcolor: '#4cdd96',
                animation: 'mic-pulse 2s ease-in-out infinite',
                display: 'inline-block',
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: '#d9ffe9', fontFamily: 'inter', fontSize: '0.9rem', fontWeight: 600 }}
            >
              Open to freelance &amp; contract website work
            </Typography>
          </Box>
        </motion.div>

        {/* Staggered headline */}
        <Box sx={{ mb: 2 }}>
          {(['Hi,', "I'm", 'Matt', 'Inkeles', '👋'] as string[]).map((word, i) => (
            <motion.div
              key={word}
              initial={hidden}
              animate={entered}
              transition={{ delay: i * 0.09, duration: 0.6, ease: 'easeOut' }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'inter',
                  fontWeight: 800,
                  fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.3rem' },
                  color: '#fff',
                  textShadow: '0 2px 16px rgba(0,0,0,0.35)',
                  letterSpacing: '0.01em',
                  pr: '0.15em',
                }}
              >
                {word}
              </Typography>
            </motion.div>
          ))}
        </Box>

        {/* Gradient callout line */}
        <motion.div initial={hidden} animate={entered} transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'inter',
              fontWeight: 750,
              fontSize: { xs: '1.35rem', sm: '1.6rem', md: '1.8rem' },
              mb: 3,
            }}
          >
            <Box component="span" className="mic-gradient-text">
              I build fast, modern websites
            </Box>{' '}
            that win you clients.
          </Typography>
        </motion.div>

        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />

        <motion.div initial={hidden} animate={entered} transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'inter',
              fontWeight: 400,
              fontSize: { xs: '1.05rem', sm: '1.15rem' },
              color: '#e0e0e0',
              lineHeight: 1.8,
              textShadow: '0 1px 4px rgba(0,0,0,0.25)',
            }}
          >
            I'm a senior software engineer in Atlanta with deep experience building responsive
            interfaces with React and TypeScript, wiring up APIs, and shipping software that holds
            up under real traffic. Right now I work at Visa focused on innovation in the security space.
            <br />
            <br />
            Day to day I craft clean, maintainable frontends and I love turning an idea into a
            polished, working site. If you run a business that needs a better web presence, I can
            handle the build from concept to launch.
          </Typography>
        </motion.div>

        {/* CTAs */}
        <Stack direction="row" spacing={2} sx={{ mt: 3, flexWrap: 'wrap' }}>
          <Button
            component="a"
            href="/my-work"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(90deg, #4dd6ff, #7c5bff 55%, #ff5fb0)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 700,
              borderRadius: '10px',
              height: 48,
            }}
          >
            See what I can build
          </Button>
          <Button
            component="a"
            href="/contact"
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255,255,255,0.35)',
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '10px',
              height: 48,
            }}
          >
            Let&apos;s talk
          </Button>
        </Stack>
      </Grid2>

      {/* Photo column */}
      <Grid2
        size={{ xs: 12, sm: 12, md: 5 }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: { xs: 2, sm: 4 }, py: 4 }}
      >
        <div style={{ position: 'relative' }}>
          {/* glow backdrop */}
          <Box
            component="span"
            sx={{
              position: 'absolute',
              inset: -18,
              borderRadius: '16px',
              background:
                'radial-gradient(circle at 50% 50%, rgba(124,91,255,0.35), rgba(255,95,176,0.18), transparent)',
              animation: 'mic-glow 5s ease-in-out infinite',
              zIndex: 0,
            }}
          />
          <Tooltip title="From the Nevada side of Lake Tahoe!">
            <Box
              component="img"
              src={MattImage}
              alt="Matt"
              sx={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: 380,
                height: 'auto',
                borderRadius: '14px',
                objectFit: 'cover',
                display: 'block',
                border: '2px solid rgba(255,255,255,0.28)',
                boxShadow: '0 10px 36px rgba(0,0,0,0.45), 0 0 60px rgba(124,91,255,0.25)',
                transform: 'rotate(-1.5deg)',
              }}
            />
          </Tooltip>
        </div>
      </Grid2>

      {/* Tech marquee strip */}
      <Grid2 size={{ xs: 12 }} sx={{ mt: 5, px: { xs: 2, sm: 4 } }}>
        <Box className="mic-marquee" sx={{ display: 'block', width: '100%' }}>
          <Box className="mic-marquee-track" sx={{ display: 'inline-block' }}>
            {(() => {
              const twice = [...stack, ...stack, ...stack, ...stack];
              return twice.map((tech, i) => (
                <Chip
                  key={`${tech}-${i}`}
                  label={tech}
                  variant="outlined"
                  sx={{
                    ml: '24px',
                    my: '12px',
                    color: 'rgba(255,255,255,0.78)',
                    borderColor: 'rgba(255,255,255,0.18)',
                    bgcolor: 'rgba(255,255,255,0.04)',
                    fontSize: '1rem',
                    '& .MuiChip-label': { fontWeight: 600 },
                  }}
                />
              ));
            })()}
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Home;