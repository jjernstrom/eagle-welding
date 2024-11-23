import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HandymanIcon from '@mui/icons-material/Handyman';
import { Helmet } from 'react-helmet-async';
import { ServiceSection } from '../../components/Services/ServiceSection';
import { ServiceSchema } from '../../components/SEO/ServiceSchema';
import mobileWelding from '../../assets/Eagle_Welding_work_Mobile_Vehicle.jpg';
import workWelding from '../../assets/Work_Welding.jpg';
import danWelding from '../../assets/Dan_Welding.jpg';
import eagleWorking from '../../assets/Eagle_Welding_working.jpg';

const services = [
  {
    title: 'Mobile Welding',
    description: 'Professional mobile welding services brought directly to your location. Our fully equipped mobile unit allows us to perform high-quality welding services anywhere in Monroe County.',
    icon: BuildIcon,
    processes: ['SMAW (Stick)', 'GTAW (TIG)', 'GMAW (MIG)', 'FCAW (Flux-core)', 'Oxy/Acetylene'],
    materials: ['Carbon Steel', 'Stainless Steel', 'Aluminum', 'Cast Iron'],
    image: mobileWelding,
    benefits: [
      'On-site service saves time and money',
      'Emergency repairs available',
      'Professional equipment for any job',
      'Certified welding techniques',
    ]
  },
  {
    title: 'Custom Fabrication',
    description: 'Transform your ideas into reality with our custom metal fabrication services. From architectural elements to industrial components, we bring your vision to life.',
    icon: ConstructionIcon,
    specialties: [
      'Structural Components',
      'Custom Furniture',
      'Security Solutions',
      'Architectural Elements'
    ],
    image: workWelding,
    benefits: [
      'Custom designs to your specifications',
      'Quality materials and craftsmanship',
      'Detailed project consultation',
      'Professional installation'
    ]
  },
  {
    title: 'Automotive Welding',
    description: 'Expert welding solutions for all types of vehicles. Whether it\'s classic car restoration or modern repairs, we ensure precision and reliability in every project.',
    icon: DirectionsCarIcon,
    specialties: [
      'Frame Repair',
      'Exhaust Systems',
      'Custom Modifications',
      'Rust Repair'
    ],
    image: danWelding,
    benefits: [
      'Expert automotive knowledge',
      'Precise welding techniques',
      'Rust prevention methods',
      'Custom solutions available'
    ]
  },
  {
    title: 'Repair & Restoration',
    description: 'Specialized repair and restoration services for decorative metalwork, architectural elements, and metal art pieces. We bring damaged or weathered pieces back to their original beauty.',
    icon: HandymanIcon,
    specialties: [
      'Decorative Railing Repair',
      'Sculpture Restoration',
      'Metal Art Repair',
      'Historic Metalwork'
    ],
    image: eagleWorking,
    benefits: [
      'Expert restoration techniques',
      'Preservation of original design',
      'Structural integrity assessment',
      'Weather protection treatments'
    ]
  }
];

export const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Helmet>
        <title>Professional Welding Services - Eagle Welding</title>
        <meta 
          name="description" 
          content="Expert welding services including mobile welding, custom fabrication, automotive repairs, and metal restoration in Monroe County, PA." 
        />
        <meta 
          name="keywords" 
          content="welding services, mobile welding, custom fabrication, automotive welding, metal restoration, Monroe PA" 
        />
        <link rel="canonical" href="https://eaglewelds.com/services" />
      </Helmet>

      <ServiceSchema
        name="Eagle Welding Services"
        description="Professional welding services in Monroe County, PA, including mobile welding, custom fabrication, automotive repairs, and metal restoration."
        image="https://eaglewelds.com/images/services-hero.jpg"
        areaServed="Monroe County, Pennsylvania"
      />

      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography 
              variant="h2" 
              color="primary"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                '& span': {
                  color: theme.palette.secondary.main,
                  textShadow: `0 0 20px ${theme.palette.secondary.main}40`,
                },
              }}
            >
              Professional <span>Welding Services</span>
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              From mobile welding to custom fabrication, we provide expert welding solutions 
              tailored to your specific needs. Quality craftsmanship guaranteed.
            </Typography>
          </Box>

          {services.map((service, index) => (
            <ServiceSection
              key={service.title}
              service={service}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};