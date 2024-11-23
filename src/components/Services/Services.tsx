import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HandymanIcon from '@mui/icons-material/Handyman';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
// Update imports to use @/ alias
import mobileWelding from '@/assets/Eagle_Welding_work_Mobile_Vehicle.jpg';
import workWelding from '@/assets/Work_Welding.jpg';
import danWelding from '@/assets/Dan_Welding.jpg';
import eagleWorking from '@/assets/Eagle_Welding_working.jpg';

const services = [
  {
    title: 'Mobile Welding',
    description: 'Professional welding services brought directly to your location. We handle repairs and installations with state-of-the-art equipment.',
    icon: BuildIcon,
    image: mobileWelding
  },
  {
    title: 'Custom Fabrication',
    description: 'Transform your ideas into reality with our custom metal fabrication services. From concept to creation, we bring your vision to life.',
    icon: ConstructionIcon,
    image: workWelding
  },
  {
    title: 'Automotive Welding',
    description: 'Expert welding solutions for all types of vehicles. From classic car restoration to modern repairs, we ensure precision and reliability.',
    icon: DirectionsCarIcon,
    image: danWelding
  },
  {
    title: 'Repair & Restoration',
    description: 'Specialized in repairing and restoring decorative metalwork, railings, sculptures, and architectural elements. Professional restoration of metal art pieces.',
    icon: HandymanIcon,
    image: eagleWorking
  },
];

export const Services = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            color="primary"
            textAlign="center"
            sx={{
              position: 'relative',
              zIndex: 1,
              fontWeight: 'bold',
              mb: 1,
              '& span': {
                color: theme.palette.secondary.main,
                textShadow: `0 0 20px ${theme.palette.secondary.main}40`,
              },
            }}
          >
            Our <span>Services</span>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            sx={{
              position: 'relative',
              zIndex: 1,
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
            }}
          >
            Professional welding solutions tailored to your needs
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};