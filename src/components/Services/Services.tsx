import { Box, Stack, Typography } from "@mui/material";
import { ServiceCard } from "@/components";
import MobileWelding from "@/assets/MobileWelding.jpg";
import CustomFab from "@/assets/CustomFab.jpg";
import RepairRestore from "@/assets/RepairRestore.jpg";
import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";
import HandymanIcon from "@mui/icons-material/Handyman";

const MobileTitle = "Mobile Welding";
const MobileDescription =
  "Professional welding services brought directly to your location. We handle repairs and installations with state-of-the-art equipment.";
const MobileIcon = (
  <BuildIcon
    sx={{
      color: "#DAA520",
      fontSize: 32,
    }}
  />
);

const CustomFabTitle = "Custom Fabrication";
const CustomFabDescription =
  "Transform your ideas into reality with our custom metal fabrication services. From concept to creation, we bring your vision to life.";
const CustomFabIcon = (
  <ConstructionIcon
    sx={{
      color: "#DAA520",
      fontSize: 32,
    }}
  />
);

const RepairTitle = "Repair & Restoration";
const RepairDescription =
  "Specialized in repairing equipment, machinery, and professional metal art pieces.";
const RepairIcon = (
  <HandymanIcon
    sx={{
      color: "#DAA520",
      fontSize: 32,
    }}
  />
);

export const Services = () => {
  return (
    <Box>
      <Stack
        display="flex"
        justifyContent="center"
        marginTop={6}
        marginX="auto"
      >
        <Typography
          variant="h4"
          textTransform="uppercase"
          align="center"
          fontWeight="bold"
        >
          Our <text style={{ color: "#DAA520" }}>Services</text>
        </Typography>
        <Typography variant="body1" align="center" color="">
          Professional welding solutions tailored to your need
        </Typography>
      </Stack>
      <Stack
        maxWidth={1200}
        direction={{xs: "column", md: "row" }}
        sx={{
          alignItems: 'center',
          justifyContent: "space-between",
          marginTop: 4,
          marginX: "auto",
          gap: 4,
        }}
      >
        <ServiceCard
          title={MobileTitle}
          description={MobileDescription}
          img={MobileWelding}
          icon={MobileIcon}
        />
        <ServiceCard
          title={CustomFabTitle}
          description={CustomFabDescription}
          img={CustomFab}
          icon={CustomFabIcon}
        />
        <ServiceCard
          title={RepairTitle}
          description={RepairDescription}
          img={RepairRestore}
          icon={RepairIcon}
        />
      </Stack>
    </Box>
  );
};
