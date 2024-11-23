import { Box, Typography, useTheme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ServiceHeaderProps {
  title: string;
  description: string;
  Icon: SvgIconComponent;
  delay?: number;
}

export const ServiceHeader = ({ title, description, Icon, delay = 0 }: ServiceHeaderProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            bgcolor: theme.palette.primary.main,
            borderRadius: '50%',
            p: 1,
            mr: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon 
            sx={{ 
              fontSize: 40,
              color: theme.palette.secondary.main,
            }}
          />
        </Box>
        <Typography 
          variant="h3" 
          sx={{ 
            color: theme.palette.primary.main,
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: 60,
              height: 3,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 1,
            }
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography 
        variant="body1" 
        paragraph 
        sx={{ 
          color: theme.palette.text.secondary,
          fontSize: '1.1rem',
          lineHeight: 1.7,
          maxWidth: 800
        }}
      >
        {description}
      </Typography>
    </motion.div>
  );
};