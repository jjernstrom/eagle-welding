import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface ServiceImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export const ServiceImage = ({ src, alt, delay = 0 }: ServiceImageProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: { xs: '300px', md: '400px' },
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: theme.shadows[4],
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          }
        }}
      />
    </motion.div>
  );
};