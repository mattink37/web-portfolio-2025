import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const entered = { opacity: 1, y: 0, scale: 1 };

// Pulsing "open to work" status pill. Shared by Home, Services, and Contact so
// every page opens with the same hero signal.
const AvailabilityPill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.9 }}
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
  );
};

export default AvailabilityPill;