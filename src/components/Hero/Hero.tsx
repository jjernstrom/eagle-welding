import { Box, Stack, Typography } from "@mui/material";
import HeroBackground from "@/assets/DanWelding2.jpg";
import EagleLogo from "@/assets/EagleLogo.png";

const title = "Where Metal Meets Craftsmanship";
const subTitle = "Expert Welding Services in Monroe County, PA";
const bodyText =
  "Professional Mobile Welding and Fabrication in Monroe County, PA. Quality craftsmanship brought directly to you.";

export const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 400,
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Stack
        sx={{
          direction: "row",
          maxWidth: 1200,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Stack
          sx={{
            maxWidth: 600,
            margin: 2,
          }}
        >
          <Typography
            variant="h4"
            color="#DAA520"
            textTransform="uppercase"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography
            marginTop={1}
            variant="h5"
            textTransform="uppercase"
            fontWeight="bold"
            color="#FFFFFF"
          >
            {subTitle}
          </Typography>
          <Typography marginTop={4} variant="body1" color="#FFFFFF">
            {bodyText}
          </Typography>
        </Stack>
        <Box
          sx={{
            margin: 2,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <img src={EagleLogo} height="150px" />
        </Box>
      </Stack>
    </Box>
  );
};
