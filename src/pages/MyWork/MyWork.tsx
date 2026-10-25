import { Button, Card, CardActions, CardContent, Chip, Divider, Grid2, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

interface Project {
  name: string;
  description: string;
  stack: string[];
  url: string;
}

// Selected projects from my public work. Most client work I do is under a
// corporate account I can't share publicly, so this page highlights open-source
// and personal projects that show how I build. Add new projects here as you go.
const projects: Project[] = [
  {
    name: 'discord-summarizer',
    description:
      'Discord bot that summarizes long chat threads into readable digests, with subtle humor injected via Claude and DeepSeek.',
    stack: ['Python', 'Discord API', 'LLM'],
    url: 'https://github.com/mattink37/discord-summarizer',
  },
  {
    name: 'agile-estimation',
    description: 'A web tool for planning and estimating agile work.',
    stack: ['TypeScript', 'React'],
    url: 'https://github.com/mattink37/agile-estimation',
  },
  {
    name: 'ip-web-app',
    description: 'A TypeScript web app for looking up and displaying IP address information.',
    stack: ['TypeScript', 'React', 'API'],
    url: 'https://github.com/mattink37/ip-web-app',
  },
  {
    name: 'web-portfolio-2025',
    description: 'This very site. A responsive single-page portfolio built with React and Material UI.',
    stack: ['TypeScript', 'React', 'MUI', 'Vite'],
    url: 'https://github.com/mattink37/web-portfolio-2025',
  },
];

const MyWork = () => {
  return (
    <Grid2 container spacing={3} sx={{ py: { xs: 3, sm: 4 } }}>
      <Grid2 size={{ xs: 12 }}>
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
          My Work
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'inter',
            mt: 2,
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            color: '#e0e0e0',
            lineHeight: 1.75,
            maxWidth: 720,
          }}
        >
          Most of my day-to-day work lives behind a corporate account I can't share
          publicly, so these are the projects I can show. They cover the same thing I
          do every week for clients: clean frontends, working integrations, and shipping
          finished software.
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12 }}>
        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 2 }} />
      </Grid2>

      {projects.map((project, index) => (
        <Grid2 key={project.name} size={{ xs: 12, sm: 6, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'inter',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: '#fff',
                    mb: 1,
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#d0d0d0', lineHeight: 1.6, fontSize: '0.98rem', mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Grid2 container spacing={1}>
                  {project.stack.map((tech) => (
                    <Grid2 key={tech}>
                      <Chip label={tech} size="small" variant="outlined" sx={{ color: '#cfcfcf' }} />
                    </Grid2>
                  ))}
                </Grid2>
              </CardContent>
              <CardActions>
                <Button
                  component="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  startIcon={<GitHubIcon />}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        </Grid2>
      ))}

      <Grid2 size={{ xs: 12 }} sx={{ mt: 3 }}>
        <Divider variant="middle" sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'inter',
            fontWeight: 700,
            fontSize: { xs: '1.4rem', sm: '1.6rem' },
            color: '#fff',
            mb: 1,
          }}
        >
          Want a site like this for your business?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#e0e0e0', lineHeight: 1.7, mb: 2, maxWidth: 720 }}
        >
          I build fast, clean, responsive websites and I'm taking on contract work. If
          you own a business, shop, or brand that needs a better site, I'd love to help.
          Reach out and let's talk about what you need.
        </Typography>
        <Button
          component="a"
          href="mailto:mattinkeles37@gmail.com"
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{ mr: 2 }}
        >
          Email me
        </Button>
        <Button
          component="a"
          href="https://github.com/mattink37"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          More on GitHub
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default MyWork;
