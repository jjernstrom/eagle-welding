import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  icon: ReactNode;
}

export const ServiceCard = ({ title, description, img, icon }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 450,
        backgroundColor: "#1B3358",
        borderRadius: 3,
        position: "relative",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 60,
          height: 60,
          position: "absolute",
          top: "38%",
          right: "42%",
          backgroundColor: "#FFFFFF",
          borderRadius: "50%",
        }}
      >
        {icon}
      </Box>
      <CardMedia sx={{ height: 200 }} image={img} title="" />
      <CardContent sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h5" color="#FFE5B4" align="center">
          {title}
          <hr
            style={{
              marginLeft: 100,
              marginRight: 100,
              marginTop: 5,
              color: "#FFE5B4",
            }}
          />
        </Typography>
        <Typography
          variant="body1"
          color="#ffffff"
          align="center"
          marginTop={2}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
