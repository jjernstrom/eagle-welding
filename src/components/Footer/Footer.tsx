import { Box, Container, Grid, Link, Stack, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import eagleLogo from '@/assets/EagleLogo.png';

export const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={eagleLogo}
                alt="Eagle Welding Logo"
                sx={{
                  height: 60,
                  width: 'auto',
                  mb: 2,
                  filter: 'brightness(1)',
                }}
              />
              <Typography variant="body2">
                Professional mobile welding services in Monroe, PA.
                Bringing expert craftsmanship directly to you.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.light }}>
                Contact Info
              </Typography>
              <Typography variant="body2" paragraph>
                Phone: (570) 212-9595
              </Typography>
              <Typography variant="body2" paragraph>
                Email: dan@eaglewelds.com
              </Typography>
              <Typography variant="body2">
                Monroe County, PA
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.light }}>
                Hours of Operation
              </Typography>
              <Typography variant="body2" paragraph>
                Monday - Friday: 7:00 AM - 6:00 PM
              </Typography>
              <Typography variant="body2" paragraph>
                Saturday: By Appointment
              </Typography>
              <Typography variant="body2">
                Sunday: Closed
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.1)', mt: 4, pt: 4 }}>
          <Typography variant="body2" align="center">
            © {currentYear} Eagle Welding. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};