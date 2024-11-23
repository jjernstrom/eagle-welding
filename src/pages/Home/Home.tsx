import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { CTABanner } from "../../components/CTABanner/CTABanner";
import { GalleryGrid } from "../../components/Gallery/GalleryGrid";
import { Hero } from "../../components/Hero/Hero";
import { HomeSchema } from "../../components/SEO/HomeSchema";
import { Services } from "../../components/Services/Services";
import { Testimonials } from "../../components/Testimonials/Testimonials";

export const Home = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Helmet>
        <title>
          Eagle Welding - Professional Mobile Welding Services in Monroe, PA
        </title>
        <meta
          name="description"
          content="Expert mobile welding and custom fabrication services in Monroe, PA. Professional welding solutions brought directly to you. Call 570-212-9595 for estimates."
        />
        <meta
          name="keywords"
          content="welding, mobile welding, custom fabrication, Monroe PA, metal work, automotive welding"
        />
        <link rel="canonical" href="https://eaglewelds.com" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Eagle Welding - Professional Mobile Welding Services"
        />
        <meta
          property="og:description"
          content="Expert mobile welding and custom fabrication services in Monroe, PA. Professional solutions brought to you."
        />
        <meta
          property="og:image"
          content="https://eaglewelds.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://eaglewelds.com" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Eagle Welding - Professional Mobile Welding Services"
        />
        <meta
          name="twitter:description"
          content="Expert mobile welding and custom fabrication services in Monroe, PA."
        />
        <meta
          name="twitter:image"
          content="https://eaglewelds.com/images/og-image.jpg"
        />
      </Helmet>

      <HomeSchema />
      <Hero />
      <Services />
      <GalleryGrid />
      <CTABanner />
      <Testimonials />
    </Box>
  );
};
