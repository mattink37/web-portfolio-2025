import { Button, Box, Card, CardContent, Chip, Divider, Grid2, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import DevicesIcon from '@mui/icons-material/Devices';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion } from 'framer-motion';
import AvailabilityPill from '@/components/AvailabilityPill/AvailabilityPill';

const entered = { opacity: 1, y: 0 };
const hidden = { opacity: 0, y: 30 };

const capabilities: { icon: typeof CodeIcon; title: string; text: string }[] = [
  {
    icon: DevicesIcon,
    title: 'Responsive & mobile-first',
    text: 'Sites that look sharp on every screen, from a phone to a widescreen monitor.',
  },
  {
    icon: CodeIcon,
    title: 'Built with modern stacks',
    text: 'React, TypeScript, and clean component-based code that is fast to load and easy to maintain.',
  },
  {
    icon: StorageIcon,
    title: 'Integrations & APIs',
    text: 'Connect your site to payments, forms, analytics, and the tools your business already runs on.',
  },
  {
    icon: SpeedIcon,
    title: 'Fast, performant, secure',
    text: 'Optimized for speed and reliability so visitors stay engaged and convert.',
  },
];

const stack = ['React', 'TypeScript', 'Material UI', 'Responsive Design', 'APIs', 'Performance', 'Clean Code', 'Vite'];

const MyWork = () => {
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
            What I can build for you
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
              Modern, fast, conversion-focused websites
            </Box>{' '}
            for businesses that want to look as good online as they do in person.
          </Typography>
        </motion.div>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'inter',
            mt: 2,
            fontSize: { xs: '1.02rem', sm: '1.12rem' },
            color: '#e0e0e0',
            lineHeight: 1.75,
            maxWidth: 720,
          }}
        >
          I'm a senior software engineer at Visa, one of the world's largest technology companies,
          where I work on security innovation, and I build websites for businesses on the side.
          My day-to-day work lives behind a corporate account I can't show publicly, so instead of
          a gallery of private repos, here's what I bring to every project.
        </Typography>

        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mt: 2, mb: 3 }} />
      </Grid2>

      {/* Capability cards */}
      {capabilities.map((cap, index) => (
        <Grid2 key={cap.title} size={{ xs: 12, sm: 6, md: 6 }} sx={{ px: { xs: 2, sm: 4 }, mb: 3 }}>
          <motion.div
            initial={hidden}
            whileInView={entered}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.14)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                  <Box
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(77,214,255,0.22), rgba(124,91,255,0.22), rgba(255,95,176,0.18))',
                      border: '1px solid rgba(255,255,255,0.18)',
                    }}
                  >
                    {(() => { const Icon = cap.icon; return <Icon sx={{ color: '#9fe8ff', fontSize: 26 }} />; })()}
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{ fontFamily: 'inter', fontWeight: 700, fontSize: '1.15rem', color: '#fff' }}
                  >
                    {cap.title}
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: '#d0d0d0', lineHeight: 1.6, fontSize: '0.98rem' }}>
                  {cap.text}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid2>
      ))}

      {/* Tech marquee */}
      <Grid2 size={{ xs: 12 }} sx={{ mt: 4, px: { xs: 2, sm: 4 } }}>
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

      {/* CTA */}
      <Grid2 size={{ xs: 12 }} sx={{ mt: 4, px: { xs: 2, sm: 4 } }}>
        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'inter',
            fontWeight: 800,
            fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.9rem' },
            color: '#fff',
            mb: 1,
          }}
        >
          Want a site that works as hard as you do?
        </Typography>
        <Typography variant="body1" sx={{ color: '#e0e0e0', lineHeight: 1.7, mb: 3, maxWidth: 720 }}>
          I'm available for freelance and contract website work. Tell me about your project and I'll
          give you a straight answer on timeline, scope, and cost. Let's build something worth showing off.
        </Typography>
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
            height: 48,
          }}
        >
          Start a project
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default MyWork;