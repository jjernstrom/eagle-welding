import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface ServiceFeaturesProps {
  features: string[];
  title: string;
  delay?: number;
}

export const ServiceFeatures = ({
  features,
  title,
  delay = 0,
}: ServiceFeaturesProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h6"
          color="secondary"
          gutterBottom
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            "&::before": {
              content: '""',
              width: 4,
              height: 24,
              backgroundColor: theme.palette.secondary.main,
              marginRight: 2,
              borderRadius: 1,
            },
          }}
        >
          {title}
        </Typography>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={feature}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '"•"',
                      color: theme.palette.secondary.main,
                      fontSize: "1.5rem",
                      marginRight: 1,
                      lineHeight: 1,
                    },
                  }}
                >
                  {feature}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
