import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Eagle Welding</title>
        <meta
          name="description"
          content="Learn about Eagle Welding's history, expertise, and commitment to quality welding services in Monroe, PA."
        />
      </Helmet>
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" color="primary" gutterBottom>
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                  Eagle Welding and Fabrication LLC is a family-owned business
                  rooted in Monroe County. With over a decade of experience,
                  we've built our reputation on quality craftsmanship and
                  reliable service.
                </Typography>
                <Typography variant="body1" paragraph>
                  Our founder, Dan, has dedicated his career to mastering the
                  art of welding. His expertise spans automotive repairs, custom
                  fabrication, and artistic metalwork, making Eagle Welding your
                  go-to solution for any welding needs.
                </Typography>
                <Typography variant="body1">
                  We take pride in our mobile service, bringing professional
                  welding capabilities directly to our clients throughout Monroe
                  County and surrounding areas.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="/src/assets/Dan_Welding.jpg"
                  alt="Eagle Welding workshop"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
