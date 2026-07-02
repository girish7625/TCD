import type { ReactElement } from "react";

const BASE = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

function JsonLd({ data }: { data: Record<string, unknown> }): ReactElement {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrgWebsiteSchema(): ReactElement {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Care Den",
    url: BASE,
    logo: `${BASE}/logo.png`,
    description:
      "A peer-led membership community for caregivers of aging parents, partners, and loved ones facing dementia, serious illness, or disability.",
    founder: [
      { "@type": "Person", name: "Jacquelyn Revere" },
      { "@type": "Person", name: "Lynn McGuire-Raj" },
    ],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Care Den",
    url: BASE,
  };
  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}

export function FoundersSchema(): ReactElement {
  const people = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Jacquelyn Revere",
      jobTitle: "Co-founder",
      worksFor: { "@type": "Organization", name: "The Care Den", url: BASE },
      sameAs: ["https://www.instagram.com/momofmymom/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Lynn McGuire-Raj",
      jobTitle: "Co-founder",
      worksFor: { "@type": "Organization", name: "The Care Den", url: BASE },
      sameAs: ["https://www.instagram.com/lynnraj/"],
    },
  ];
  return (
    <>
      {people.map((p, i) => (
        <JsonLd key={i} data={p} />
      ))}
    </>
  );
}

export function FaqSchema(): ReactElement {
  const faqs: [string, string][] = [
    ["What is The Care Den?", "The Care Den is a peer-led, online membership community for caregivers of persons living with dementia, serious illness or disability. Members meet in facilitated virtual sessions hosted almost every day, five to seven times a week and connect between sessions through our private community platform."],
    ["Who is The Care Den for?", "The Care Den is primarily for women caring for aging parents, partners, or loved ones, particularly through dementia, serious or chronic illness, disability, recovery, or long-term decline. Men are welcome but the community's voice is shaped by and for women."],
    ["How much does membership cost?", "Membership starts at $27 a month for full community access. You can pay-it-forward at the $40 level per month if you feel inclined and have the means to help subsidize others or sustainably compensate our facilitators. No contract. You can cancel anytime."],
    ["What if I can't afford $27 a month?", "Write to us. We have a small number of discounted memberships and we would rather have you in the room."],
    ["Is this therapy?", "No. The Care Den is a peer community, not a clinical service. Our facilitators are primarily trained peer supporters with lived caregiving experience. Occasionally, professionals who work in the care field provide education, resources and support. If you need clinical mental health counseling, please reach out to a licensed professional."],
    ["Do I have to attend every session?", "No. Some members come to one session a week. Some come to all of them. Some come and stay quiet. All of it is welcome."],
    ["Can I leave the camera off?", "Yes. Cameras are always optional in The Care Den."],
    ["How do I join?", "Visit the Join page and follow the link to our community platform. Signup takes a few minutes."],
    ["How do I cancel?", "From your account on the community platform. No questions, no friction."],
  ];
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return <JsonLd data={data} />;
}
