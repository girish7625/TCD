import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

export const metadata: Metadata = {
  title: "About The Care Den · A room caregivers shouldn't have to find alone",
  description:
    "Two caregivers built The Care Den because the room they needed didn't exist. This is who we are, why we built it, and what we stand for.",
};

const PRINCIPLES = [
  {
    lead: "We hold the room. We don’t run a program.",
    body: "The Care Den is not a curriculum, though we develop workshops. It’s a space members come into and use the way they need. We open the door, we establish guidelines and we trust the people in it.",
  },
  {
    lead: "We get it. So we don’t make people explain.",
    body: "Members come to us carrying experiences they’ve had to translate everywhere else. Inside the room, they don’t have to. Though they’ll likely feel validated by sharing their story. That relief is what we are.",
  },
  {
    lead: "We move at the pace of the people inside.",
    body: "Caregivers are exhausted. We don’t push, demand or pressure. The community moves at a human pace, and The Care Den grows alongside its members.",
  },
  {
    lead: "We are rooted in women. The room is open to anyone who needs it.",
    body: "The community is primarily women, built by women, shaped mostly by women. Men are welcome and we do have a few male members. But we get that our messaging, somewhat like caregiving itself, doesn’t attract them as much as it does women.",
  },
];

function principleCell(i: number) {
  return [
    "py-8",
    i > 0 ? "border-t border-body-ink/10" : "",
    i === 1 ? "md:border-t-0" : "",
    i >= 2 ? "md:border-t md:border-body-ink/10" : "",
    i % 2 === 1
      ? "md:border-l md:border-body-ink/10 md:pl-16"
      : "md:pr-16",
  ].join(" ");
}

export default function About() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 grid w-full max-w-6xl content-start gap-x-12 px-6 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_340px] md:items-center md:justify-between md:px-16">
        <div>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.08] text-body-ink">
            A place for caregivers to rest <em className="accent">&amp;</em>{" "}
            refill their cup, together.
          </h1>
        </div>
        <Image
          src="/illustrations/about-teapot.png"
          alt="A watercolor illustration of a teapot pouring hearts into a cup of tea."
          width={340}
          height={340}
          className="hidden h-auto w-full max-w-[340px] md:block"
        />
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Why we exist
        </h2>
        <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            More than 64 million Americans are caregivers. Most of them are
            women. Many of them are caring for someone they love with dementia,
            chronic illness or severe disability.
          </p>
          <p>
            They carry it mostly alone. They explain their challenges over and
            over to people who don&rsquo;t get it. They lose roles, identities,
            jobs, friends, and sleep. They wake up at 4am and scroll their
            phones to distract themselves from the hypervigilance.
          </p>
          <p>
            The Care Den is where they find they aren&rsquo;t alone. A community
            of caregivers, connecting with one another, meeting throughout the
            week and holding each other through the long haul.
          </p>
        </div>
      </section>

      <section className="mt-12 w-full bg-porch-cream-deep py-14 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            Who built this
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-14 md:grid-cols-2">
            <div className="md:max-w-[26rem]">
              <Image
                src="/illustrations/jacquelyn.jpg"
                alt="Jacquelyn Revere with her mother"
                width={320}
                height={400}
                className="aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover"
              />
              <p className="mt-7 text-[1.1875rem] leading-[1.6] text-body-ink">
                <strong className="font-semibold">Jacquelyn Revere</strong>{" "}
                spent 6 years caring for her mother with dementia. 19 of those
                months, she cared for both her mother and grandmother
                simultaneously. She&rsquo;s built an audience of nearly one
                million supporters across social media platforms under the
                handle @momofmymom to tell the truth about caregiving. She has
                written an op-ed for the LA Times, been featured by NPR, has
                partnered with AARP and is the author of two upcoming books on
                dementia caregiving and self-care for caregivers.
              </p>
            </div>
            <div className="md:ml-auto md:max-w-[26rem]">
              <Image
                src="/illustrations/lynn.jpg"
                alt="Lynn McGuire-Raj with her father"
                width={320}
                height={400}
                className="aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover"
              />
              <p className="mt-7 text-[1.1875rem] leading-[1.6] text-body-ink">
                <strong className="font-semibold">
                  Lynn McGuire-Raj, MSW, LCSW-A
                </strong>{" "}
                was cared for by her parents when she had cancer in her
                thirties. Twenty years later, she returned home to care for them
                as they navigated heart disease and dementia. A former
                fundraiser and festival producer turned counselor, Lynn brings
                her graduate work and community building skills to The Care Den.
                A budding clinician, she works with clients navigating
                transitions, grief and loss in North Carolina.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-14 max-w-[42ch] text-center text-[1.1875rem] leading-[1.6] text-body-ink">
            The two of them met, recognized something in each other, and built
            what they couldn&rsquo;t find.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          What we stand for
        </h2>
        <p className="mt-6 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          Four things, written down so we can hold ourselves to them:
        </p>
        <div className="mt-8 grid md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div key={p.lead} className={principleCell(i)}>
              <p className="text-[1.1875rem] font-semibold leading-[1.4] text-body-ink">
                {p.lead}
              </p>
              <p className="mt-2 text-[1.1875rem] leading-[1.6] text-body-ink">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 w-full bg-porch-cream-deep py-14 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            What we are not
          </h2>
          <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              We are a supportive group, but we are not solely a
              &ldquo;support group&rdquo;. We are not therapy, we do not diagnose
              or treat mental health conditions. We are not technically a
              &ldquo;wellness app&rdquo; though we support our members&rsquo;
              well-being. We are not an educational course but we do learn from
              one another.
            </p>
            <p>
              We are a room. With real people. Held together by those who have
              been in the same trenches you are in.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid w-full max-w-6xl content-start gap-x-12 px-6 pb-14 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_300px] md:items-center md:justify-between md:px-16 md:pb-16">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            What we&rsquo;re building toward
          </h2>
          <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              The community is the center of everything. Around it, we are slowly
              building tools that make The Care Den a richer experience: courses
              on building resilience, promoting practices of self-care and
              essays and reflections from facilitators and members.
            </p>
            <p>All of it to support happier, healthier and stronger caregivers.</p>
          </div>
          <p className="mt-8 font-display text-[clamp(1.375rem,2.5vw,1.75rem)] italic leading-[1.35] text-den-green-deep">
            Want to come in?
          </p>
          <div className="mt-8">
            <a
              href="https://heartbeat.com/the-care-den"
              className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-den-green px-5 py-2.5 text-[0.875rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Become a member
            </a>
          </div>
        </div>
        <Image
          src="/illustrations/heart.png"
          alt="A watercolor illustration of a heart held in a pair of arms."
          width={300}
          height={300}
          className="hidden h-auto w-full max-w-[300px] md:block"
        />
      </section>

      <SiteFooter flush />
    </main>
  );
}
