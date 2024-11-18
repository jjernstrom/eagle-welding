import { Stack, Typography } from "@mui/material"
import EagleLogo from '../../assets/EagleLogo.png'
import DanWelding from '../../assets/DanWelding.jpg'

export const Home = () => {
  return (
    <>
      <head>
        <title>Eagle Welding</title>
      </head>
      <body>
      <Stack gap={2} alignItems='center'>
        <Stack direction='row' gap={2}>
          <Typography variant="h4">Eagle Welding and Fabrication</Typography>
          <Typography>Call 570-212-9595</Typography>
        </Stack>
          <img src={EagleLogo} alt='Eagle Welding Logo' height={200} width={400}/>
          <Typography variant="h4">Where Metal Meets Craftsmanship</Typography>
          <Typography variant="h5">Your Local Mobile Welding Service</Typography>
          <img src={DanWelding} height={300} width={200} />
          <Typography variant="h5">Services:</Typography>
          <Typography variant="h5">Services:</Typography>
          <Typography>
          Eagle Welding and Fabrication LLC is a local, family-owned business dedicated to quality welding and fabrication. With over ten years of experience, Dan has honed his skills in welding and metalwork, bringing a lifetime of local knowledge from Monroe County. His commitment to precision and a strong background in automotive and custom metalwork make him the ideal choice for any project. Specializing in mobile welding, we bring our services directly to you, wherever your project is located.
          </Typography>
          <Typography>
          Whether you're creating an art piece, need a custom bear box, or require assistance with automotive repairs, we have the skills and expertise to bring your vision to life.
          </Typography>
          <Typography>Contact us today for an estimate on your project!</Typography>
          <Typography>Contact</Typography>
        
          <Typography>Contact us today for an estimate on your project!</Typography>

        </Stack>
      </body>
    </>
  );
}
