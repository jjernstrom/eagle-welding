import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "../../components/Contact/ContactForm";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Eagle Welding</title>
        <meta
          name="description"
          content="Contact Eagle Welding for professional welding services in Monroe, PA. Get a quote for your project today."
        />
      </Helmet>
      <Box sx={{ flex: 1 }}>
        <ContactForm />
      </Box>
    </>
  );
};
