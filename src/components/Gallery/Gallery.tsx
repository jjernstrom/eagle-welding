import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Custom Railing',
    description: 'Decorative outdoor railing installation',
    image: '/src/assets/DanWelding.jpg', // Placeholder - replace with actual project images
  },
  {
    title: 'Equipment Repair',
    description: 'Heavy machinery welding repair',
    image: '/src/assets/DanWelding.jpg',
  },
  {
    title: 'Metal Art',
    description: 'Custom metal sculpture',
    image: '/src/assets/DanWelding.jpg',
  },
];

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" color="primary" textAlign="center" gutterBottom>
          Our Work
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" mb={4}>
          Browse through some of our recent projects
        </Typography>
        <Grid container spacing={4} ref={ref}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: 3,
                    '&:hover .overlay': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};