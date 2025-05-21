import { Divider, Grid2, Tooltip, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import MattImage from '@/assets/IMG_7758.jpg';

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { delay, duration: 0.6, ease: 'easeOut' },
	}),
};

const Home = () => {
	return (
		<Grid2 container sx={{ py: { xs: 4, sm: 4 } }}>
			<Grid2 size={{ xs: 12, sm: 12, md: 7 }} sx={{ px: { xs: 2, sm: 4 } }}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeInUp}
				>
					<Typography
						variant="h1"
						sx={{
							fontFamily: 'inter',
							fontWeight: 700,
							fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
							color: '#fff',
							textShadow: '1px 2px 8px rgba(0,0,0,0.25)',
							letterSpacing: '0.02em',
							mb: 2,
						}}
					>
						Hi, I'm Matt Inkeles 👋
					</Typography>

					<Divider
						variant="middle"
						sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }}
					/>

					<Typography
						variant="body1"
						sx={{
							fontFamily: 'inter',
							fontWeight: 400,
							fontSize: { xs: '1.1rem', sm: '1.2rem' },
							color: '#e0e0e0',
							lineHeight: 1.75,
							textShadow: '0 1px 4px rgba(0,0,0,0.15)',
						}}
					>
						I'm a software engineer based in Atlanta, Georgia, with over five years of experience solving
						real-world problems in the tech industry. I currently work at NCR Voyix, building next-generation
						point-of-sale systems for the retail space.
						<br />
						<br />
						My day-to-day involves crafting responsive user interfaces with React and TypeScript, integrating
						with APIs, and ensuring smooth, scalable application performance. I'm passionate about writing
						clean, maintainable code and thrive in teams where I can collaborate with other curious, driven
						engineers.
						<br />
						<br />
						I'm always looking for ways to grow—both technically and personally—and to build software that makes
						a meaningful impact.
					</Typography>
				</motion.div>
			</Grid2>

			<Grid2
				size={{ xs: 12, sm: 12, md: 5 }}
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: { xs: 2, sm: 4 }, py: 4 }}
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}
					variants={fadeInUp}
					custom={0.2}
				>
					<Tooltip title="From the Nevada side of Lake Tahoe!">
						<Box
							component="img"
							src={MattImage}
							alt="Matt"
							sx={{
								width: '100%',
								maxWidth: 400,
								height: 'auto',
								borderRadius: '8px',
								objectFit: 'cover',
								display: 'block',
								border: '2px solid #e0e0e0',
								boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
							}}
						/>
					</Tooltip>
				</motion.div>
			</Grid2>
		</Grid2>
	);
};

export default Home;