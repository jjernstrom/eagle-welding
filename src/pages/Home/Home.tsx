import { Stack, Typography } from "@mui/material";
import EagleLogo from "@/assets/EagleLogo.png";
import { Hero } from "@/components";

export const Home = () => {
  return (
    <Stack gap={2} justifyContent="center" display="flex">
      <Stack
        alignItems="center"
        direction="row"
        gap={4}
        margin="auto"
        marginTop={4}
        marginBottom={4}
        flexWrap="wrap"
      >
        <img
          src={EagleLogo}
          alt="Eagle Welding Logo"
          height={100}
          width={300}
        />
        <Stack>
          <Typography variant="h4">Where Metal Meets Craftsmanship</Typography>
          <Typography variant="h6">
            <em>Your Local Mobile Welding Service, Monroe PA</em>
          </Typography>
          <Typography variant="h6">
            <strong>Call: 570-212-9595 | Email: dan@eaglewelds.com</strong>
          </Typography>
        </Stack>
      </Stack>

      <Hero />
    </Stack>
  );
};
