import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/EagleWelding",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/eaglewelding",
    },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Mobile Welding", path: "/services#mobile-welding" },
        { name: "Repair & Restoration", path: "/services#repair" },
        { name: "Metal Installations", path: "/services#installations" },
        { name: "Automotive Repair", path: "/services#automotive" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Eagle Welding & Fabrication
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Precision Mobile Welding Services
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.secondary,
                      transition: "color 0.3s",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {social.icon}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
          {footerLinks.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * (index + 1),
                }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {section.title}
                </Typography>
                {section.links.map((link, linkIndex) => (
                  <Typography
                    key={linkIndex}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "text.secondary",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {link.name}
                    </Link>
                  </Typography>
                ))}
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
