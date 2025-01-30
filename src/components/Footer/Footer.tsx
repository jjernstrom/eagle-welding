import { Box, Stack, Typography } from "@mui/material";
import EagleLogo from "@/assets/EagleLogo.png";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0a1931",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        marginTop: 6,
      }}
    >
      <Stack display="flex" justifyContent="center" margin="auto">
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            maxWidth: "1200px",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
            width: "100%",
          }}
        >
          <Stack>
            <Box margin="auto" display="flex">
              <img src={EagleLogo} height="50px" />
            </Box>
            <Typography variant="body1" color="#ffffff" marginTop={2}>
              Professional mobile welding services in Monroe, PA. <br />
              Bringing expert craftsmanship directly to you.
            </Typography>
          </Stack>
          <Stack textAlign={{xs: 'center', md: 'left'}} marginTop={{ xs: 2, md: 0}}>
            <Typography variant="h6" color="#DAA520">
              Contact Info
            </Typography>
            <Typography variant="body1" color="#ffffff">
              Phone: (570) 212-9595 <br />
              Email: dan@eaglewelds.com <br />
              Monroe County, PA
            </Typography>
          </Stack>
          <Stack textAlign={{xs: 'center', md: 'left'}} marginTop={{ xs: 2, md: 0}}>
            <Typography variant="h6" color="#DAA520">
              Hours of Operation
            </Typography>
            <Typography variant="body1" color="#ffffff">
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday: By Appointment
              <br />
              Sunday: Closed
            </Typography>
          </Stack>
        </Stack>
        <hr
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 400,
            marginRight: 400,
            color: "#ffffff",
          }}
        />
        <Typography
          margin="auto"
          display="flex"
          color="#FFFFFF"
          variant="body1"
          sx={{
            gap: '.25em',
            "& a": {
              color: "#DAA520",
              textDecoration: "none",
              "&:hover": {
                color: "#FFFFFF",
                textDecoration: "underline",
              }
            },
          }}
        >
          Website designed and built by
          <a href="https://lvlup.marketing/">LVL UP</a> &
          <a href="https://github.com/jjernstrom">jjernstrom</a>
        </Typography>
      </Stack>
    </Box>
  );
};
