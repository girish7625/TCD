import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

export const metadata: Metadata = {
  title: "Partner with The Care Den · For the caregivers your patients go home to",
  description:
    "The Care Den is a peer community for family caregivers. We complement the clinical care you already provide. For healthcare, hospice, and community partners.",
};

const linkClass =
  "underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

const ctaClass =
  "inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-den-green px-5 py-2.5 text-[0.875rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

const emphasisInk =
  "font-display text-[clamp(1.375rem,2.5vw,1.75rem)] italic leading-[1.35] text-body-ink";
const emphasisGreen =
  "font-display text-[clamp(1.375rem,2.5vw,1.75rem)] italic leading-[1.35] text-den-green-deep";

const WORK_WITH = [
  "Brands serving people with cognitive or physical disabilities",
  "Healthcare systems and hospitals",
  "Social workers and case managers",
  "Therapists and behavioral health professionals",
  "Occupational, physical, and speech therapists",
  "Hospice and palliative care teams",
  "Memory care and assisted living communities",
  "Adult day programs",
  "Nonprofits and aging-focused organizations",
  "Caregiver advocacy groups",
  "Employers supporting working caregivers",
  "Community partners, sponsors, and funders",
];

export default function Partners() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 grid w-full max-w-6xl content-start gap-x-12 px-6 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_340px] md:items-center md:justify-between md:px-16">
        <div>
          <h1 className="max-w-[18ch] font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
            A room for the caregivers your patients go home to.
          </h1>
          <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
            The Care Den is a peer community for family caregivers navigating the
            long haul of caring for aging parents, spouses, partners, or loved
            ones. We hold the human being behind the caregiving role. Five to six
            sessions a week. A real community. Steady support between the
            appointments.
          </p>
          <p className={`mt-8 ${emphasisGreen}`}>
            We believe caregivers deserve care too.
          </p>
        </div>
        <Image
          src="/illustrations/plant.png"
          alt="A watercolor illustration of a potted aloe plant."
          width={340}
          height={340}
          className="hidden h-auto w-full max-w-[340px] md:block"
        />
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            A note to healthcare and community professionals
          </h2>
          <div className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              You see caregivers at the appointment, the discharge, the case
              review, the family meeting. You give them excellent clinical care,
              therapy, planning, and advocacy.
            </p>
          </div>
          <p className={`mt-8 ${emphasisInk}`}>Then they go home.</p>
          <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              What they carry between visits is mostly invisible. The
              hypervigilance. The anticipatory grief. The slow loss of identity.
              The decision fatigue. The relational strain that no one is treating
              because it isn&rsquo;t anyone&rsquo;s job to treat. These
              aren&rsquo;t symptoms. They&rsquo;re the daily weather of
              caregiving.
            </p>
            <p>
              The Care Den exists to help caregivers navigate this often stormy
              season. Not as a clinical service but rather as a supportive and
              resourceful community. We are not therapy, case management, or
              crisis intervention. We are the room caregivers come to between
              everything else. We complement the vital work you are already
              doing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Why this matters
        </h2>
        <div className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            The research is consistent. Chronic caregiving stress is associated
            with higher rates of anxiety and depression, social isolation,
            burnout, reduced coping capacity, and physical health decline.
            Caregivers are often expected to keep functioning without any
            consistent emotional support of their own.
          </p>
        </div>
        <p className={`mt-8 ${emphasisInk}`}>
          Strengthening the caregiver strengthens the care.
        </p>
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:grid md:grid-cols-[300px_minmax(0,40rem)] md:items-center md:justify-between md:gap-x-12 md:px-16">
          <Image
            src="/illustrations/hands.png"
            alt="A watercolor illustration of two clasped hands."
            width={300}
            height={300}
            className="hidden h-auto w-full max-w-[300px] md:block"
          />
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
              What partnership can do
            </h2>
            <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
              <p>
                Partnerships let caregivers receive steady peer support in the long
                stretches between appointments, transitions, and crises.
              </p>
              <p>
                Together, we can reach caregivers who need support but don&rsquo;t
                know where to look. We can reduce the isolation that drives
                burnout. We can make community-based support a real part of the
                care plan, not a footnote. We can help caregivers feel seen,
                understood, and held while they do the work no one trained them for
                and most often, no one compensates.
              </p>
              <p>
                Partnership also helps The Care Den grow as a small, women-led
                social impact business without compromising the safety or integrity
                of the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Who we work with
        </h2>
        <p className="mt-6 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          If you serve caregivers in any capacity, there&rsquo;s likely a way we
          can work together.
        </p>
        <div className="mt-8 grid max-w-[52rem] gap-x-12 gap-y-3 text-[1.1875rem] leading-[1.6] text-body-ink sm:grid-cols-2">
          {WORK_WITH.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            Let&rsquo;s talk
          </h2>
          <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              If your organization supports caregivers and you want to explore a
              partnership, referral relationship, sponsorship, or collaboration
              of any kind, we&rsquo;d love to hear from you.
            </p>
            <p>
              Write to us at{" "}
              <a href="mailto:hello@thecareden.com" className={linkClass}>
                hello@thecareden.com
              </a>
              . Lynn or Jacquelyn will respond personally.
            </p>
          </div>
          <p className={`mt-8 max-w-[34ch] ${emphasisGreen}`}>
            Caregivers shouldn&rsquo;t have to carry this alone. Together, we can
            make sure they don&rsquo;t.
          </p>
          <div className="mt-8">
            <a href="mailto:hello@thecareden.com" className={ctaClass}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
