import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

export const metadata: Metadata = {
  title: "Community Guidelines · The Care Den",
  description:
    "How we hold The Care Den together. Our community guidelines, our agreements with each other, and what we expect from everyone in the room.",
};

const linkClass =
  "underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

const FAQ = [
  {
    q: "What is The Care Den?",
    a: "The Care Den is a peer-led membership community for caregivers of persons living with dementia, terminal or chronic illness or severe disability. Members meet in facilitated virtual sessions hosted five to seven times a week and connect between sessions through our private community platform.",
  },
  {
    q: "Who is The Care Den for?",
    a: "The Care Den is primarily for women caring for aging parents, partners, or loved ones, particularly through dementia, chronic illness, recovery, or long-term decline. Men are welcome but the community’s voice is shaped by and for women.",
  },
  {
    q: "How much does membership cost?",
    a: "Membership starts at $20 a month for full community access. You can pay-it-forward at the $35 or $50 levels per month if you feel inclined and have the means to help subsidize others or sustainably compensate our facilitators. No contract. You can cancel anytime.",
  },
  {
    q: "What if I can’t afford $20 a month?",
    a: "Write to us. We have a small number of complimentary memberships and we would rather have you in the room.",
  },
  {
    q: "Is this therapy?",
    a: "No. The Care Den is a peer community, not a clinical service. Our facilitators are trained peer supporters with lived caregiving experience. If you need clinical mental health support, please reach out to a licensed professional.",
  },
  {
    q: "Do I have to attend every session?",
    a: "No. Some members come to one session a week. Some come to all of them. Some come and stay quiet. All of it is welcome.",
  },
  {
    q: "Can I leave the camera off?",
    a: "Yes. Cameras are always optional in The Care Den.",
  },
  {
    q: "How do I join?",
    a: "Visit the Join page and follow the link to our community platform. Signup takes a few minutes.",
  },
  {
    q: "How do I cancel?",
    a: "From your account on the community platform. No questions, no friction.",
  },
];

const EXPECTATIONS = [
  "We show up the way we can.",
  "We listen more than we advise.",
  "We keep what’s shared in the room.",
  "We ask before offering help.",
  "We make space for silence.",
  "We remember that everyone here is carrying something heavy.",
  "We believe each other.",
];

export default function Guidelines() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.08] text-body-ink">
          How we hold the room.
        </h1>
        <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          The Care Den is a community held together by trust. These are the
          agreements we make with each other, so the room stays safe for
          everyone who comes in.
        </p>
      </section>

      <section className="mt-12 w-full bg-porch-cream-deep py-14 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            The basics
          </h2>
          <div className="mt-8 flex max-w-[48rem] flex-col gap-7 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              <strong className="font-semibold">Confidentiality.</strong> What&rsquo;s
              shared in The Care Den stays in The Care Den. We do not screenshot,
              share, or repeat what other members say outside the community.
            </p>
            <p>
              <strong className="font-semibold">Respect.</strong> We come from
              many backgrounds, ages, races, religions, and family situations.
              We treat each other with care and curiosity, not judgment.
            </p>
            <p>
              <strong className="font-semibold">No advice unless asked.</strong>{" "}
              We listen first. We share our own experience when it helps. We
              don&rsquo;t fix, lecture, or prescribe. &ldquo;You should...&rdquo;
              is rarely useful in here.
            </p>
            <p>
              <strong className="font-semibold">Choice always.</strong> You can
              speak or stay quiet. You can come to sessions or skip them. You can
              leave the camera off, the chat closed, the door propped. Show up
              the way you can.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          About the sessions
        </h2>
        <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            Sessions are facilitated, not therapy. Our facilitators are trained
            peer supporters with their own caregiving experience. They are not
            clinicians acting in a clinical capacity within The Care Den.
          </p>
          <p>
            If you are in a mental health crisis, please reach out to a licensed
            professional or call 988. We will support you in finding help, but
            The Care Den is not a substitute for clinical care.
          </p>
          <p>
            Members may share publicly in sessions, or send messages to
            facilitators privately. Both are welcome.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-[48rem]">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="border-t border-body-ink/10 py-7 first:border-t-0 first:pt-0"
            >
              <p className="text-[1.1875rem] font-semibold leading-[1.4] text-body-ink">
                {item.q}
              </p>
              <p className="mt-2 text-[1.1875rem] leading-[1.6] text-body-ink">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 w-full bg-porch-cream-deep py-14 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            What we expect from each other
          </h2>
          <div className="mt-8 flex flex-col gap-3 text-[1.1875rem] leading-[1.6] text-body-ink">
            {EXPECTATIONS.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          If something goes wrong
        </h2>
        <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          If a member says or does something that breaks these guidelines, reach
          out to a facilitator or write to us at{" "}
          <a href="mailto:hello@thecareden.com" className={linkClass}>
            hello@thecareden.com
          </a>
          . We take this seriously. We will read your message, follow up, and
          act with care.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
