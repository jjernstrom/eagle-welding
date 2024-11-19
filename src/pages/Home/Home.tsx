import { Container, Stack, Typography } from "@mui/material";
import EagleLogo from "../../assets/EagleLogo.png";
import DanWelding from "../../assets/DanWelding.jpg";

export const Home = () => {
  return (
    <>
      <head>
        <title>Eagle Welding</title>
      </head>
      <body>
        <Container>
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
                <Typography variant="h4">
                  Where Metal Meets Craftsmanship
                </Typography>
                <Typography variant="h6">
                  <em>Your Local Mobile Welding Service, Monroe PA</em>
                </Typography>
                <Typography variant="h6">
                  <strong>
                    Call: 570-212-9595 | Email: dan@eaglewelds.com
                  </strong>
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              margin="auto"
            >
              <Stack marginRight={12}>
                <Typography variant="h4" maxWidth={500} marginBottom={2}>
                  Mobile Welding Repairs and Custom Fabrication
                </Typography>
                <Typography maxWidth={600} marginBottom={2}>
                  Eagle Welding and Fabrication LLC is a local, family-owned
                  business dedicated to quality welding and fabrication. With
                  over ten years of experience, Dan has honed his skills in
                  welding and metalwork, bringing a lifetime of local knowledge
                  from Monroe County. His commitment to precision and a strong
                  background in automotive and custom metalwork make him the
                  ideal choice for any project. Specializing in mobile welding,
                  we bring our services directly to you, wherever your project
                  is located.
                </Typography>
                <Typography maxWidth={600} marginBottom={2}>
                  Whether you're creating an art piece, need a custom bear box,
                  or require assistance with automotive repairs, we have the
                  skills and expertise to bring your vision to life.
                </Typography>
                <Typography maxWidth={600} marginBottom={2}>
                  <strong>
                    Contact us today for an estaimate on your project!
                  </strong>
                </Typography>
                <Typography maxWidth={600}>
                  <strong>
                    Call: 570-212-9595 | Email: dan@eaglewelds.com
                  </strong>
                </Typography>
              </Stack>
              <img
                src={DanWelding}
                alt="Dan grinding a part for a project"
                height={400}
                width={300}
              />
            </Stack>
          </Stack>
        </Container>
      </body>
    </>
  );
};
