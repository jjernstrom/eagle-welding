import { Stack } from "@mui/material";
import { Footer, Hero, NavBar, Services } from "@/components";

export const Home = () => {
  return (
    <Stack>
      <NavBar />
      <Hero />
      <Services />
      <Footer />
    </Stack>
  );
};
