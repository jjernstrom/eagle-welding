import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { GalleryImage } from './GalleryImage';
import { GalleryModal } from './GalleryModal';
import railing from '@/assets/railing.jpg';
import heavy from '@/assets/heavy.jpg';
import automotive from '@/assets/automotive_repair.jpg';
import gateRepair from '@/assets/gate-repair.jpg';
import installationRepair from '@/assets/installation-repair.jpg';
import workWelding from '@/assets/Work_Welding.jpg';

const projects = [
  {
    title: 'Railing Repair',
    description: 'Professional repair of decorative outdoor railings',
    category: 'Repair & Restoration',
    image: railing,
  },
  {
    title: 'Equipment Repair',
    description: 'On-site heavy equipment welding services',
    category: 'Mobile Welding',
    image: heavy,
  },
  {
    title: 'Metal Installation Repair',
    description: 'Expert restoration of metal installations and sculptures',
    category: 'Restoration',
    image: installationRepair,
  },
  {
    title: 'Automotive Welding',
    description: 'Precision automotive frame and component repair',
    category: 'Automotive',
    image: automotive,
  },
  {
    title: 'Gate Repair',
    description: 'Professional repair of security gates and fencing',
    category: 'Mobile Repair',
    image: gateRepair,
  },
  {
    title: 'Metal Component Repair',
    description: 'Expert repair of industrial metal components',
    category: 'Mobile Welding',
    image: workWelding,
  },
];

export const GalleryGrid = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            Our <span>Project Gallery</span>
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            textAlign="center" 
            sx={{ mb: 6 }}
          >
            Browse through our recent repair and restoration projects
          </Typography>
        </motion.div>

        <Grid container spacing={4} ref={ref}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <GalleryImage
                  project={project}
                  index={index}
                  inView={inView}
                  onImageClick={() => setSelectedImage(project.image)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <GalleryModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </Container>
    </Box>
  );
};