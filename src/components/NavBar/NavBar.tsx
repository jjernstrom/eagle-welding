import { Box, Stack, Typography } from "@mui/material";
import EagleLogo from "@/assets/EagleLogo.png";

const title = "Eagle Welding and Fabrication LLC";
const contactInfo = "Call: 570-212-9595 | Email: dan@eaglewelds.com";

export const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0a1931",
        overflow: "hidden",
        height: '100%',
        width: "100%",
      }}
    >
      <Stack
        direction={{sx:'column', md: "row"}}

        sx={{
          maxWidth: "1200px",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Box margin={2}>
          <img src={EagleLogo} height="50px" />
        </Box>

        <Stack
          textAlign={{xs: 'center', md: 'left'}}
          sx={{
            marginX: 2,
            marginY: "auto",
          }}
        >
          <Typography variant="h6" color="#ffffff">
            {title}
          </Typography>
          <Typography variant="h6" color="#ffffff">
            {contactInfo}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
