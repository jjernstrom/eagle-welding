import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { CTABanner } from "../../components/CTABanner/CTABanner";
import { GalleryGrid } from "../../components/Gallery/GalleryGrid";

export const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Project Gallery - Eagle Welding</title>
        <meta
          name="description"
          content="View our portfolio of completed welding projects, including custom fabrication, repairs, and metal art installations."
        />
      </Helmet>
      <Box sx={{ flex: 1 }}>
        <GalleryGrid />
        <CTABanner />
      </Box>
    </>
  );
};
