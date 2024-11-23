import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: SvgIconComponent;
  image: string;
  delay: number;
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  image,
  delay,
}: ServiceCardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: `0 12px 24px ${theme.palette.primary.main}30`,
            "& .icon-container": {
              transform: "scale(1.1)",
              bgcolor: theme.palette.secondary.main,
              "& svg": {
                color: theme.palette.primary.main,
              },
            },
            "& .service-image": {
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: 200,
            overflow: "hidden",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <Box
            className="service-image"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.3s ease-in-out",
              borderRadius: "12px 12px 0 0",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 1,
              },
            }}
          />
        </Box>
        <Box
          className="icon-container"
          sx={{
            position: "absolute",
            top: 175,
            left: "50%",
            transform: "translateX(-50%)",
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: theme.shadows[4],
            transition: "all 0.3s ease-in-out",
            zIndex: 2,
          }}
        >
          <Icon
            sx={{
              fontSize: 32,
              color: theme.palette.secondary.main,
              transition: "color 0.3s ease-in-out",
            }}
          />
        </Box>

        <CardContent
          sx={{
            pt: 5,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: theme.palette.secondary.light,
              fontWeight: "bold",
              mb: 2,
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 40,
                height: 2,
                bgcolor: theme.palette.secondary.main,
                borderRadius: 1,
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
