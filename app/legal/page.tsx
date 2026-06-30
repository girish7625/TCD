import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import LegalHashOpener from "./hash-opener";

export const metadata: Metadata = {
  title: "Legal · The Care Den",
  description:
    "Privacy Policy, Terms & Conditions, and Website Disclaimer for The Care Den.",
};

const PRIVACY_BODY = (
  <>
    <p>
      Please read this Privacy Policy carefully and in its entirety before using
      https://thecareden.com/ (the &ldquo;Site&rdquo;).
    </p>
    <p className="mt-4">
      This Privacy Policy explains how The Care Den collects, uses, and protects
      your information when you visit or interact with the Site.
    </p>
    <p className="mt-4">
      By using the Site and/or accessing content, resources, community features,
      newsletters, webinars, events, or other services provided by The Care Den
      (collectively the &ldquo;Site and Services&rdquo;), you voluntarily agree to
      be bound by this Privacy Policy.
    </p>
    <p className="mt-4">
      If you do not agree with the terms of this Privacy Policy, please do not use
      the Site.
    </p>
    <p className="mt-4">
      If you have any questions regarding this Privacy Policy, please contact us
      at: Momm@momofmymom.com
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      1. Definitions
    </h3>
    <p className="mt-4">
      Company, We, Our, or Us refers to The Care Den and the website
      https://thecareden.com/
    </p>
    <p className="mt-4">
      Content: Any written, visual, audio, or video material available on the
      Site, including articles, guides, blog posts, webinars, graphics,
      downloadable materials, community discussions, and emails.
    </p>
    <p className="mt-4">
      Personal Information: Information that can identify or contact you, such as
      your name, email address, mailing address, phone number, IP address, or
      other identifying data.
    </p>
    <p className="mt-4">
      Site and Services refers to thecareden.com, its pages, content, community
      areas, events, newsletters, and any resources offered through the website.
    </p>
    <p className="mt-4">You / User: Any individual accessing or using the Site.</p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      2. Company Statement
    </h3>
    <p className="mt-4">
      The Site and its Content are owned and operated by The Care Den. We are
      committed to protecting your Personal Information and handling it
      responsibly.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      3. Personal Information We Collect
    </h3>
    <p className="mt-4">
      Information You Provide. We may collect personal information when you:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>subscribe to our newsletter</li>
      <li>fill out a contact form</li>
      <li>register for an event or webinar</li>
      <li>join a community or mailing list</li>
      <li>submit comments or messages</li>
      <li>download resources</li>
      <li>contact us directly</li>
    </ul>
    <p className="mt-4">This information may include:</p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>name</li>
      <li>email address</li>
      <li>mailing address</li>
      <li>phone number</li>
      <li>other information you voluntarily provide</li>
    </ul>
    <p className="mt-4">
      Automatically Collected Information. When you visit the Site, we may
      automatically collect certain information, including:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>IP address</li>
      <li>browser type</li>
      <li>device type</li>
      <li>pages visited</li>
      <li>time spent on pages</li>
      <li>referring websites</li>
    </ul>
    <p className="mt-4">
      This data helps us understand how visitors use the Site and allows us to
      improve user experience. We may use analytics tools such as Google
      Analytics or similar services to collect this information.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      4. How We Use Your Information
    </h3>
    <p className="mt-4">We may use the information we collect in order to:</p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>provide educational resources and caregiver support content</li>
      <li>improve the Site and user experience</li>
      <li>respond to questions or requests</li>
      <li>send newsletters and updates</li>
      <li>notify you about events or resources</li>
      <li>communicate important community information</li>
      <li>analyze website traffic and engagement</li>
    </ul>
    <p className="mt-4">
      You may unsubscribe from emails at any time by clicking the unsubscribe
      link in the email.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      5. Sharing Your Personal Information
    </h3>
    <p className="mt-4">
      The Care Den does not sell or trade your personal information. We may share
      information only in the following circumstances:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>with service providers who help operate our website or email services</li>
      <li>when required by law or legal process</li>
      <li>to protect the safety and rights of The Care Den or our users</li>
    </ul>
    <p className="mt-4">Some third-party providers may include:</p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>website hosting providers</li>
      <li>email service providers</li>
      <li>analytics platforms</li>
      <li>event platforms</li>
    </ul>
    <p className="mt-4">
      These third parties are required to maintain confidentiality of your
      information.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      6. How We Protect Your Information
    </h3>
    <p className="mt-4">
      We implement reasonable security measures to protect your personal
      information. These may include:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>secure website hosting</li>
      <li>SSL encryption</li>
      <li>restricted access to sensitive information</li>
      <li>secure third-party service providers</li>
    </ul>
    <p className="mt-4">
      However, no method of transmission over the internet is completely secure,
      and we cannot guarantee absolute security.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      7. Cookies and Tracking Technologies
    </h3>
    <p className="mt-4">
      The Care Den may use cookies and similar technologies to improve your
      browsing experience. Cookies help us:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>understand visitor behavior</li>
      <li>remember preferences</li>
      <li>improve website functionality</li>
      <li>analyze traffic</li>
    </ul>
    <p className="mt-4">
      You can disable cookies through your browser settings, though some features
      of the Site may not function properly.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      8. Third-Party Links
    </h3>
    <p className="mt-4">
      Our Site may contain links to third-party websites for educational
      resources or caregiver support services. We are not responsible for the
      privacy practices or content of those websites.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      9. Children&rsquo;s Information
    </h3>
    <p className="mt-4">
      The Care Den does not knowingly collect personal information from children
      under 13 years old. If you believe a child has submitted personal
      information through our Site, please contact us and we will promptly remove
      the information.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      10. Your Privacy Rights
    </h3>
    <p className="mt-4">
      Depending on your location, you may have rights regarding your personal
      information, including:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>accessing your information</li>
      <li>requesting corrections</li>
      <li>requesting deletion of your information</li>
      <li>opting out of communications</li>
    </ul>
    <p className="mt-4">
      To request changes to your information, contact: Momm@momofmymom.com
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      11. Changes to This Privacy Policy
    </h3>
    <p className="mt-4">
      We may update this Privacy Policy from time to time. When updates are made,
      the Effective Date at the top of this page will be revised.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      12. Contact Information
    </h3>
    <p className="mt-4">
      If you have any questions about this Privacy Policy, please contact:
    </p>
    <p className="mt-4">
      The Care Den. Website: https://thecareden.com/. Email: Momm@momofmymom.com
    </p>
  </>
);

const TERMS_BODY = (
  <>
    <p>
      Please read these Terms &amp; Conditions carefully before using
      https://thecareden.com/
    </p>
    <p className="mt-4">
      By accessing or using this Site, you agree to these Terms &amp; Conditions.
      If you do not agree with these terms, please discontinue use of the Site.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      1. Ownership
    </h3>
    <p className="mt-4">
      This Site and all content are owned and operated by The Care Den. The
      content on the Site is protected by United States copyright and
      intellectual property laws.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      2. Use of the Site
    </h3>
    <p className="mt-4">
      You agree to use the Site only for lawful purposes. You agree not to:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>harass or abuse other users</li>
      <li>post offensive or unlawful content</li>
      <li>attempt to gain unauthorized access to the Site</li>
      <li>distribute spam or unsolicited content</li>
      <li>copy or reproduce content without permission</li>
    </ul>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      3. Eligibility
    </h3>
    <p className="mt-4">
      You must be at least 18 years old to use this Site. By using the Site, you
      represent that you meet this requirement.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      4. Educational Purpose Disclaimer
    </h3>
    <p className="mt-4">
      The Care Den provides caregiver support, resources, and community
      information. The information provided on this Site is for educational and
      informational purposes only. Nothing on this Site should be considered:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>medical advice</li>
      <li>legal advice</li>
      <li>financial advice</li>
      <li>professional healthcare guidance</li>
    </ul>
    <p className="mt-4">
      Always consult qualified professionals regarding your specific situation.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      5. No Guarantees
    </h3>
    <p className="mt-4">
      The Care Den makes no guarantees regarding outcomes or results from
      information shared on the Site. Each individual situation is unique.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      6. Intellectual Property
    </h3>
    <p className="mt-4">All content on the Site including:</p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>text</li>
      <li>graphics</li>
      <li>downloads</li>
      <li>videos</li>
      <li>branding</li>
      <li>logos</li>
    </ul>
    <p className="mt-4">
      is the property of The Care Den and may not be reproduced without written
      permission. You may share links to the Site for personal purposes, provided
      proper credit is given.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      7. Third-Party Links
    </h3>
    <p className="mt-4">
      The Site may contain links to third-party websites. The Care Den is not
      responsible for the content, policies, or practices of these websites.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      8. Limitation of Liability
    </h3>
    <p className="mt-4">
      By using the Site, you agree that The Care Den is not liable for any
      damages or losses resulting from your use of the Site or reliance on
      information provided. The Site and its content are provided
      &ldquo;as is.&rdquo;
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      9. Governing Law
    </h3>
    <p className="mt-4">
      These Terms &amp; Conditions are governed by the laws of the State of
      California. Any disputes arising from the use of this Site shall be handled
      in accordance with California law.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      10. Changes to Terms
    </h3>
    <p className="mt-4">
      The Care Den may update these Terms &amp; Conditions at any time. The
      updated date will appear at the top of this page. Continued use of the Site
      indicates acceptance of any updates.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      11. Contact Information
    </h3>
    <p className="mt-4">
      If you have questions regarding these Terms &amp; Conditions, please
      contact:
    </p>
    <p className="mt-4">
      The Care Den. Website: https://thecareden.com/. Email: Momm@momofmymom.com
    </p>
  </>
);

const DISCLAIMER_BODY = (
  <>
    <p>
      Please read this Disclaimer carefully before using https://thecareden.com/
      (the &ldquo;Site&rdquo;). By accessing or using this Site, you accept and
      agree to be bound by this Disclaimer. If you do not agree with this
      Disclaimer, please discontinue use of the Site immediately.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Educational and Informational Purposes Only
    </h3>
    <p className="mt-4">
      The information provided by The Care Den on this website, in our community
      spaces, events, resources, and communications is intended for educational
      and informational purposes only.
    </p>
    <p className="mt-4">
      The Care Den is a supportive community designed to provide caregivers with
      shared experiences, educational resources, and peer support. The content
      shared on this Site may include articles, videos, discussions, resources,
      guest speakers, or community contributions.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Not Medical, Legal, or Professional Advice
    </h3>
    <p className="mt-4">
      The information shared through this Site and The Care Den community is not
      intended to replace professional advice.
    </p>
    <p className="mt-4">
      The Care Den and its contributors are not acting as medical providers,
      therapists, attorneys, financial advisors, or licensed professionals unless
      explicitly stated.
    </p>
    <p className="mt-4">
      Nothing on this Site should be interpreted as medical, legal, financial, or
      professional advice.
    </p>
    <p className="mt-4">
      You should always consult with a qualified healthcare professional, legal
      professional, or other appropriate provider regarding your specific
      situation before making decisions related to:
    </p>
    <ul className="mt-4 list-disc space-y-1 pl-6">
      <li>medical treatment</li>
      <li>caregiving decisions</li>
      <li>medications</li>
      <li>financial planning</li>
      <li>legal matters</li>
      <li>healthcare directives</li>
    </ul>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      No Doctor-Patient Relationship
    </h3>
    <p className="mt-4">
      Your use of this Site, participation in community discussions, or
      attendance at events does not create a doctor-patient, therapist-client, or
      professional relationship between you and The Care Den or any contributors.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Personal Responsibility
    </h3>
    <p className="mt-4">
      By using this Site, you acknowledge that you are personally responsible for
      your decisions and actions related to caregiving, healthcare, and any other
      matters discussed on this Site.
    </p>
    <p className="mt-4">
      You agree that The Care Den cannot be held responsible for any outcomes
      resulting from the use or interpretation of information shared through the
      Site or community.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Community Contributions
    </h3>
    <p className="mt-4">
      Some content on this Site or within the Care Den community may be
      contributed by members, guest experts, or third-party partners.
    </p>
    <p className="mt-4">
      The views expressed by contributors do not necessarily reflect the views of
      The Care Den. We do not guarantee the accuracy or completeness of
      user-generated content.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      External Links
    </h3>
    <p className="mt-4">
      This Site may contain links to third-party websites for additional
      information or resources. The Care Den does not control or guarantee the
      accuracy, safety, or practices of these external websites.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      No Guarantees
    </h3>
    <p className="mt-4">
      While we strive to provide helpful and accurate information, The Care Den
      makes no guarantees regarding results, outcomes, or effectiveness of any
      information, tools, or resources shared on the Site.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Limitation of Liability
    </h3>
    <p className="mt-4">
      By using this Site, you agree that The Care Den and its founders, employees,
      contractors, partners, and contributors shall not be liable for any damages
      or losses resulting from your use of the Site or reliance on information
      provided through the Site.
    </p>

    <h3 className="mt-8 font-display text-[1.375rem] font-normal leading-[1.3] text-den-green-deep">
      Contact
    </h3>
    <p className="mt-4">
      If you have questions about this Disclaimer, please contact:
    </p>
    <p className="mt-4">
      The Care Den. Email: Momm@momofmymom.com. Website: https://thecareden.com/
    </p>
  </>
);

const SECTIONS = [
  { id: "privacy", title: "Privacy Policy", open: false, body: PRIVACY_BODY },
  { id: "terms", title: "Terms & Conditions", open: false, body: TERMS_BODY },
  { id: "disclaimer", title: "Website Disclaimer", open: false, body: DISCLAIMER_BODY },
];

export default function Legal() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h1 className="sr-only">Legal</h1>
        <p className="max-w-[48rem] text-[1.0625rem] leading-[1.6] text-body-ink/70">
          Effective March 13, 2026
        </p>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-6 sm:px-10 md:mt-20 md:px-16">
        <div className="max-w-[48rem]">
          {SECTIONS.map((s) => (
            <details
              key={s.id}
              id={s.id}
              open={s.open}
              className="group scroll-mt-24 border-t border-body-ink/10 first:border-t-0"
            >
              <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 rounded-lg py-6 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep">
                {s.title}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-den-green transition-transform duration-200 group-open:rotate-90"
                >
                  <path d="M7 5l6 5-6 5" />
                </svg>
              </summary>
              <div className="max-w-[48rem] pb-7 text-[1.1875rem] leading-[1.6] text-body-ink">
                {s.body ?? <p>Content coming in the next step.</p>}
              </div>
            </details>
          ))}
        </div>
      </section>

      <LegalHashOpener />

      <SiteFooter />
    </main>
  );
}
