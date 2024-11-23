import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  project: {
    title: string;
    description: string;
    category: string;
    image: string;
  };
  index: number;
  inView: boolean;
  onImageClick: () => void;
}

export const GalleryImage = ({ project, index, inView, onImageClick }: GalleryImageProps) => {
  const theme = useTheme();

  return (
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
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
          height: '100%',
          '&:hover .overlay': {
            opacity: 1,
          },
          '&:hover img': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={onImageClick}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            height: 300,
            objectFit: 'cover',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            p: 2,
            opacity: 0,
            transition: 'opacity 0.3s',
            borderRadius: '0 0 8px 8px',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.secondary.light,
              mb: 1,
              fontWeight: 'bold',
            }}
          >
            {project.category}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2">
            {project.description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};