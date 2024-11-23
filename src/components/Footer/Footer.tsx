import { Box, Container, Grid, Typography, TypographyProps, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";
import eagleLogo from "../../assets/EagleLogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface AnimatedTypographyProps extends TypographyProps {
  children: ReactNode;
}

const AnimatedTypography: React.FC<AnimatedTypographyProps> = ({ children, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
    >
      <Typography {...props}>{children}</Typography>
    </motion.div>
  );
};

export const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
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
        position: "relative",
        bgcolor: theme.palette.primary.main,
        color: "white",
        py: 8,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
        },
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
        >
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              position: "relative", 
              zIndex: 2,
              "& > *": {
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              },
            }}
          >
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <motion.img
                  src={eagleLogo}
                  alt="Eagle Welding Logo"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    height: 60,
                    width: "auto",
                    marginBottom: 16,
                    filter: "brightness(1.2) contrast(1.1)",
                  }}
                />
                
                <AnimatedTypography 
                  variant="body2" 
                  sx={{ 
                    mb: 2, 
                    color: theme.palette.secondary.light,
                    textAlign: { xs: "center", md: "left" },
                    opacity: 0.9,
                  }}
                >
                  Precision Mobile Welding Services in Monroe, PA. Bringing
                  expert craftsmanship directly to you.
                </AnimatedTypography>
                
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        color: theme.palette.secondary.light,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </Box>
              </Box>
            </Grid>
            
            {footerLinks.map((section, index) => (
              <Grid item xs={12} md={3} key={index}>
                <AnimatedTypography
                  variant="h6"
                  sx={{ 
                    fontWeight: "bold", 
                    mb: 2, 
                    color: theme.palette.secondary.main,
                    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
                    pb: 1,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {section.title}
                </AnimatedTypography>
                
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: linkIndex * 0.1 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "white",
                        opacity: 0.8,
                        textAlign: { xs: "center", md: "left" },
                        transition: "color 0.3s, opacity 0.3s",
                        "&:hover": {
                          color: theme.palette.secondary.light,
                          opacity: 1,
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
                  </motion.div>
                ))}
              </Grid>
            ))}
            
            <Grid item xs={12} md={3}>
              <AnimatedTypography
                variant="h6"
                gutterBottom
                sx={{ 
                  color: theme.palette.secondary.main,
                  borderBottom: `2px solid ${theme.palette.secondary.dark}`,
                  pb: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Contact Info
              </AnimatedTypography>
              
              {["Phone: (570) 212-9595", "Email: dan@eaglewelds.com", "Monroe County, PA"].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: "white", 
                      opacity: 0.8,
                      textAlign: { xs: "center", md: "left" },
                      transition: "opacity 0.3s",
                      "&:hover": { opacity: 1 },
                      mb: index < 2 ? 1 : 0,
                    }}
                  >
                    {text}
                  </Typography>
                </motion.div>
              ))}
            </Grid>
          </Grid>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box
            sx={{
              borderTop: `1px solid ${theme.palette.primary.light}`,
              mt: 4,
              pt: 4,
              textAlign: "center",
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: theme.palette.secondary.light,
                opacity: 0.7,
              }}
            >
              © {currentYear} Eagle Welding & Fabrication. All rights reserved.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
