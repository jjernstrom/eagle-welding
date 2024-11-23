import { WithContext, Organization } from "schema-dts";

export const HomeSchema = () => {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eagle Welding",
    description:
      "Professional mobile welding and custom fabrication services in Monroe County, PA.",
    url: "https://eaglewelds.com",
    logo: "https://eaglewelds.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "(570) 212-9595",
      contactType: "customer service",
      areaServed: "Monroe County, Pennsylvania",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monroe County",
      addressRegion: "PA",
      addressCountry: "US",
    },
    sameAs: [
      "https://facebook.com/eaglewelding",
      "https://instagram.com/eaglewelding",
    ],
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};
