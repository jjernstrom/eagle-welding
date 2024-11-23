import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CTABanner = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        py: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, transparent 100%)`,
          opacity: 0.7,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          right: -100,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${theme.palette.secondary.main}40 0%, transparent 70%)`,
          transform: "translateY(-50%)",
          animation: "pulse 4s infinite",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ flex: 1, maxWidth: 600 }}>
              <Typography
                variant="h3"
                color="white"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  "& span": {
                    color: theme.palette.secondary.light,
                  },
                }}
              >
                Ready to Start Your <span>Welding Project</span>?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  mb: 4,
                  maxWidth: 500,
                }}
              >
                Get a free estimate today and bring your vision to life with our
                expert welding services. Professional solutions tailored to your
                needs.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/contact")}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    boxShadow: `0 4px 14px ${theme.palette.secondary.main}50`,
                    background: `linear-gradient(45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                    "&:hover": {
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 90%)`,
                    },
                  }}
                >
                  Get Free Estimate
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate("/gallery")}
                  sx={{
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    color: "white",
                    borderColor: "white",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: theme.palette.secondary.light,
                      borderWidth: 2,
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  View Our Work
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
