import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import eagleLogo from "@/assets/EagleLogo.png";

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              src={eagleLogo}
              alt="Eagle Welding Logo"
              sx={{
                height: { xs: 40, sm: 50 },
                width: "auto",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/")}
            />
          </motion.div>

          {/* Mobile Menu */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => navigate("/contact")}
              sx={{
                px: 2,
                py: 1,
                fontSize: "0.875rem",
                background: `linear-gradient(45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                color: theme.palette.primary.main,
                fontWeight: "bold",
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 90%)`,
                },
              }}
            >
              Contact
            </Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                },
              }}
            >
              {["/", "/services", "/about", "/gallery"].map((path) => (
                <MenuItem
                  key={path}
                  onClick={() => handleNavigate(path)}
                  sx={{
                    backgroundColor: isActive(path)
                      ? `${theme.palette.primary.light} !important`
                      : "transparent",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.light,
                    },
                  }}
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={1}
            ml="auto"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {["/", "/services", "/about", "/gallery"].map((path) => (
              <Button
                key={path}
                onClick={() => navigate(path)}
                sx={{
                  color: "white",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: isActive(path) ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: theme.palette.secondary.main,
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: theme.palette.secondary.light,
                  },
                }}
              >
                {path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/contact")}
              sx={{
                ml: 2,
                px: 3,
                background: `linear-gradient(45deg, ${theme.palette.secondary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                color: theme.palette.primary.main,
                fontWeight: "bold",
                "&:hover": {
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 90%)`,
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
