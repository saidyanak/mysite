export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Said Yanak",
    url: "https://saidyanak.dev",
    image: "https://saidyanak.dev/grogu.png",
    jobTitle: "Backend Developer & Freelancer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "42 Kocaeli",
    },
    knowsAbout: [
      "Backend Development",
      "Spring Boot",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "REST API",
      "Full-Stack Development",
      "DevOps",
      "VPS Hosting",
    ],
    sameAs: [
      "https://github.com/saidyanak",
      "https://www.linkedin.com/in/saidyanak/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
