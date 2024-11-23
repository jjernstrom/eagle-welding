import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eagleWorking from "../../assets/Eagle_Welding_working.jpg";
import eagleLogo from "../../assets/EagleLogo.png";

export const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "background.paper",
        pt: { xs: 3, md: 4 },
        pb: { xs: 4, md: 6 },
        minHeight: { xs: "50vh", md: "65vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${eagleWorking})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
          zIndex: 0,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, maxWidth: 600 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  color: theme.palette.secondary.main,
                  fontWeight: "bold",
                  mb: 1.5,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: 1.2,
                }}
              >
                Where Metal Meets Craftsmanship
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  color: "white",
                  fontWeight: "bold",
                  mb: 2,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: 1.4,
                }}
              >
                Expert Welding Services in Monroe County, PA
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: 1.6,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                  fontWeight: "normal",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Professional mobile welding and custom fabrication in Monroe
                County, PA. Quality craftsmanship brought directly to you.
              </Typography>
            </motion.div>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                "& > *": { flex: { xs: "1", sm: "0 auto" } },
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                width: "100%",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/contact")}
                  sx={{
                    px: 3,
                    py: 1.25,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    boxShadow: `0 4px 14px ${theme.palette.secondary.main}50`,
                    background: `linear-gradient(45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                    "&:hover": {
                      background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 90%)`,
                      transform: "translateY(-2px)",
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Get a Free Estimate
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate("/services")}
                  sx={{
                    px: 3,
                    py: 1.25,
                    fontSize: "1rem",
                    color: "white",
                    borderColor: "white",
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main,
                      borderWidth: 2,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      transform: "translateY(-2px)",
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Our Services
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
          {useTheme().breakpoints.up('lg') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                flex: 1, 
                maxWidth: 400, 
                width: "100%",
                display: "block"
              }}
            >
              <Box
                component="img"
                src={eagleLogo}
                alt="Eagle Welding Logo"
                sx={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 0 20px rgba(218, 165, 32, 0.3))",
                }}
              />
            </motion.div>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
