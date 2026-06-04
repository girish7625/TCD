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
    body: "The Care Den is not a curriculum, though we develop workshops. It’s a space members come into and use the way they need. We open the door. We trust the people in it.",
  },
  {
    lead: "We get it. So we don’t make people explain.",
    body: "Members come to us carrying experiences they’ve had to translate everywhere else. Inside the room, they don’t have to. Though they’ll likely feel validated by sharing their story. That relief is what we are.",
  },
  {
    lead: "We move at the pace of the people inside.",
    body: "Caregivers are exhausted. We don’t push, demand, or pressure. The community moves at human pace, and The Care Den grows alongside its members.",
  },
  {
    lead: "We are rooted in women. The room is open to anyone who needs it.",
    body: "The community is primarily women, built by women, shaped by mostly women. Men are welcome. But we get that our messaging, somewhat like caregiving itself, doesn’t attract them as much as it does women.",
  },
];

export default function About() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 grid w-full max-w-6xl content-start gap-x-12 px-6 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_340px] md:items-center md:justify-between md:px-16">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.08] text-body-ink">
            A place for caregivers to rest <em className="accent">&amp;</em>{" "}
            refill their cup, together.
          </h1>
        </div>
        <div
          aria-hidden="true"
          className="hidden aspect-square w-full max-w-[340px] rounded-2xl border border-body-ink/10 bg-body-ink/[0.025] md:block"
        />
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Why we exist
        </h2>
        <div className="mt-8 flex max-w-[55ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            More than 53 million Americans are caregivers. Most of them are
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

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            Who built this
          </h2>
          <div className="mt-8 flex max-w-[58ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              Jacquelyn Revere spent 6 years caring for her mother with
              dementia. 19 of those months, she cared for both her mother and
              grandmother simultaneously. She&rsquo;s built an audience of
              nearly one million supporters across social media platforms under
              the handle @momofmymom to tell the truth about caregiving. She has
              written an op-ed for the LA Times, been featured by NPR, has
              partnered with AARP and is the author of two upcoming books on
              dementia caregiving and self-care for caregivers.
            </p>
            <p>
              Lynn McGuire-Raj, MSW, LCSW-A was cared for by her parents when
              she had cancer in her thirties. Twenty years later, she returned
              home to care for them as they navigated heart disease and
              dementia. A former fundraiser and festival producer turned
              counselor, Lynn brings her graduate work and community building
              skills to The Care Den. A budding clinician, she works with
              clients navigating transitions, grief and loss in North Carolina.
            </p>
            <p>
              The two of them met, recognized something in each other, and built
              what they couldn&rsquo;t find.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          What we stand for
        </h2>
        <p className="mt-6 max-w-[55ch] text-[1.1875rem] leading-[1.6] text-body-ink">
          Four things, written down so we can hold ourselves to them:
        </p>
        <div className="mt-10 flex flex-col gap-9">
          {PRINCIPLES.map((p) => (
            <div key={p.lead} className="max-w-[55ch]">
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

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            What we are not
          </h2>
          <div className="mt-8 flex max-w-[55ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              We are a supportive group, but we are not solely a
              &ldquo;support group&rdquo;. We are not therapy, we do not diagnose
              or treat mental health conditions. We are not a wellness app
              though we support our members&rsquo; well-being. We are not an
              educational course or a curriculum.
            </p>
            <p>
              We are a room. With real people. Held together by those who have
              been in the same trenches you are in.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          What we&rsquo;re building toward
        </h2>
        <div className="mt-8 flex max-w-[55ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            The community is the center of everything. Around it, we are slowly
            building tools that make the den a richer experience: courses on
            building resilience, promoting practices of self-care, and essays
            and reflections from members and facilitators.
          </p>
          <p>All of it to support happier, healthier and stronger caregivers.</p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Want to come in?
        </h2>
        <div className="mt-8">
          <a
            href="https://heartbeat.com/the-care-den"
            className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-den-green px-5 py-2.5 text-[0.875rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
          >
            Become a member
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
