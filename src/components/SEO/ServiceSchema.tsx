import { LocalBusiness, WithContext } from 'schema-dts';

interface ServiceSchemaProps {
  name: string;
  description: string;
  image: string;
  areaServed: string;
}

export const ServiceSchema = ({ name, description, image, areaServed }: ServiceSchemaProps) => {
  const schema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eagle Welding',
    description,
    image,
    telephone: '(570) 212-9595',
    email: 'dan@eaglewelds.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Monroe County',
      addressRegion: 'PA',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.0997',
      longitude: '-75.3333'
    },
    areaServed,
    priceRange: '$$',
    openingHours: [
      'Mo-Fr 07:00-18:00',
      'Sa by appointment',
      'Su closed'
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};