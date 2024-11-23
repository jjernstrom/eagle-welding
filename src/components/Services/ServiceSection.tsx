import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ServiceSectionProps {
  service: {
    title: string;
    description: string;
    icon: SvgIconComponent;
    processes?: string[];
    materials?: string[];
    specialties?: string[];
    image: string;
    benefits: string[];
  };
  index: number;
  reverse?: boolean;
}

export const ServiceSection = ({
  service,
  index,
  reverse,
}: ServiceSectionProps) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = service.icon;

  return (
    <Paper
      ref={ref}
      elevation={2}
      sx={{
        p: { xs: 3, md: 5 },
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
        },
      }}
    >
      <Grid
        container
        spacing={4}
        direction={reverse ? "row-reverse" : "row"}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  bgcolor: theme.palette.primary.main,
                  borderRadius: "50%",
                  p: 1.5,
                  mr: 2,
                  boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
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
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "bold",
                }}
              >
                {service.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              paragraph
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              {service.description}
            </Typography>

            {service.processes && (
              <Box sx={{ mb: 3 }}>
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
                      bgcolor: theme.palette.secondary.main,
                      mr: 2,
                      borderRadius: 1,
                    },
                  }}
                >
                  Welding Processes
                </Typography>
                <Grid container spacing={1}>
                  {service.processes.map((process) => (
                    <Grid item xs={12} sm={6} key={process}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          display: "flex",
                          alignItems: "center",
                          "&::before": {
                            content: '"•"',
                            color: theme.palette.secondary.main,
                            fontSize: "1.5rem",
                            mr: 1,
                            lineHeight: 1,
                          },
                        }}
                      >
                        {process}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {service.specialties && (
              <Box sx={{ mb: 3 }}>
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
                      bgcolor: theme.palette.secondary.main,
                      mr: 2,
                      borderRadius: 1,
                    },
                  }}
                >
                  Specialties
                </Typography>
                <Grid container spacing={1}>
                  {service.specialties.map((specialty) => (
                    <Grid item xs={12} sm={6} key={specialty}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          display: "flex",
                          alignItems: "center",
                          "&::before": {
                            content: '"•"',
                            color: theme.palette.secondary.main,
                            fontSize: "1.5rem",
                            mr: 1,
                            lineHeight: 1,
                          },
                        }}
                      >
                        {specialty}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            <Box>
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
                    bgcolor: theme.palette.secondary.main,
                    mr: 2,
                    borderRadius: 1,
                  },
                }}
              >
                Benefits
              </Typography>
              <Grid container spacing={1}>
                {service.benefits.map((benefit) => (
                  <Grid item xs={12} sm={6} key={benefit}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        display: "flex",
                        alignItems: "center",
                        "&::before": {
                          content: '"•"',
                          color: theme.palette.secondary.main,
                          fontSize: "1.5rem",
                          mr: 1,
                          lineHeight: 1,
                        },
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            <Box
              component="img"
              src={service.image}
              alt={`${service.title} service`}
              sx={{
                width: "100%",
                height: { xs: "300px", md: "400px" },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: theme.shadows[4],
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Paper>
  );
};
