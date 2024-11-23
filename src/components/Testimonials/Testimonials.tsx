import { Avatar, Box, Card, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Construction Manager',
    content: 'Eagle Welding provided exceptional service for our construction project. Their mobile welding capabilities saved us valuable time and their work quality is outstanding.',
    image: '/images/testimonials/john.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Restaurant Owner',
    content: 'Dan created beautiful custom railings for our outdoor seating area. The craftsmanship is outstanding and the whole process was smooth and professional.',
    image: '/images/testimonials/sarah.jpg',
  },
  {
    name: 'Mike Wilson',
    role: 'Auto Shop Owner',
    content: 'We regularly rely on Eagle Welding for specialized automotive repairs. Their work is always top-notch and they consistently deliver on time.',
    image: '/images/testimonials/mike.jpg',
  },
];

export const Testimonials = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, transparent 100%)`,
          opacity: 0.5,
        },
      }}
    >
      <Container>
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
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 1,
              '& span': {
                color: theme.palette.secondary.main,
                textShadow: `0 0 20px ${theme.palette.secondary.main}40`,
              },
            }}
          >
            What Our <span>Clients Say</span>
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            textAlign="center" 
            sx={{ 
              mb: 8,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Read what our satisfied customers have to say about our welding services
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 8, md: 4 }} ref={ref}>
          {testimonials.map((testimonial, index) => (
            <Grid 
              item 
              xs={12} 
              md={4} 
              key={testimonial.name} 
              sx={{ 
                display: 'flex',
                mb: { xs: 6, md: 0 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Card 
                  elevation={2}
                  sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                    position: 'relative',
                    overflow: 'visible',
                    width: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    mt: { xs: 6, md: 0 },
                    mb: { xs: 4, md: 0 },
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -40,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'background.paper',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: theme.shadows[3],
                      p: 1,
                      zIndex: 1,
                    }}
                  >
                    <Avatar 
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        border: `3px solid ${theme.palette.secondary.main}`,
                      }}
                    />
                  </Box>

                  <Box sx={{ pt: 6, flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <FormatQuoteIcon 
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: -10,
                        fontSize: 40,
                        color: theme.palette.secondary.main,
                        opacity: 0.2,
                      }}
                    />
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.8,
                        flex: 1
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>

                    <Box sx={{ textAlign: 'center', mt: 'auto' }}>
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ 
                          color: theme.palette.secondary.main,
                          fontWeight: 'medium',
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};