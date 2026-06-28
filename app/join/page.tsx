import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

export const metadata: Metadata = {
  title: "Join The Care Den · A room for the long haul of caring",
  description:
    "As low as $20 a month gets you into a peer community of mostly women caregivers. Five to six live sessions a week. Real people. Real support. Your pace.",
};

const ctaClass =
  "inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-den-green px-5 py-2.5 text-[0.875rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

const WEEK = [
  {
    day: "Monday",
    title: "Support circle",
    body: "The anchor of the week. A facilitated conversation where members bring what’s heavy and the room holds it.",
  },
  {
    day: "Tuesday",
    title: "Self-Care Practice",
    body: "Time set aside, to tend to you. Together. Bring your journal, your craft project or your nail polish.",
  },
  {
    day: "Wednesday",
    title: "Nervous System Reset",
    body: "Gentle guided exercises to anchor your nervous system into safety and support.",
  },
  {
    day: "Thursday",
    title: "Walk & Talk",
    body: "Get outta the house, get some fresh air and get your steps in. With us.",
  },
  {
    day: "Friday",
    title: "Friday Night Social",
    body: "A light, low stakes community hang. Whining allowed but joy, laughter, and distraction, preferred.",
  },
  {
    day: "Saturday",
    title: "Ask an Expert",
    body: "Some weeks a workshop. Some weeks are office hours with a geriatric social worker.",
  },
  {
    day: "Sunday",
    title: "Grief & Loss",
    body: "An hour to honor ambiguous losses, anticipatory grief and the grief that comes after death.",
  },
];

const INCLUDED = [
  "All live, virtual sessions, every week.",
  "The full member community, with private threads, voice channels and direct messaging.",
  "Our library of past workshops, available to watch when you can.",
  "Member-only resources.",
  "Access to facilitator office hours.",
];

// Facilitators — working bios in Lynn's words until she finalizes; Nikki's is
// pending (a blank oneLine renders the muted "Bio coming soon."). Each entry is
// { name, oneLine, photo? }; initials() derives the avatar fallback from the
// name, and a photo added later drops into the same circle with no layout shift.
const FACILITATORS: {
  name: string;
  bio: string;
  photo?: string;
  instagram?: string;
}[] = [
  {
    name: "Andrea Hughes",
    bio: "As full-time caregiver to her mom with early-onset Alzheimer's disease, Andrea is passionate about helping caregivers find support, create joy, and stay connected to who they are outside of caregiving.",
    photo: "/illustrations/andrea.jpg",
    instagram: "https://www.instagram.com/itsandreakrystal/",
  },
  {
    name: "Lynn McGuire Raj",
    bio: "While caring for her dad with dementia, Lynn went back to grad school to better understand what both she and her father were experiencing. Now she wants to help caregivers build resilience and self-compassion throughout their season of care.",
    photo: "/illustrations/lynn.jpg",
    instagram: "https://www.instagram.com/lynnraj/",
  },
  {
    name: "Nikki Nurse",
    bio: "After caring for her mom with cognitive disabilities, Nikki is here to remind you to prioritize YOU. She's known for helping regulate your nervous system, and stylize your wardrobe and home, because your burnout era is cancelled!",
    photo: "/illustrations/nikki.jpg",
  },
  {
    name: "Jacquelyn Revere",
    bio: "After seven years caring for both her grandmother and mom through Alzheimer's disease, Jacquelyn transformed her caregiving journey into a mission to ensure no caregiver has to do it alone. She's passionate about creating a community where caregivers feel seen, supported, and deeply understood.",
    photo: "/illustrations/jacquelyn.jpg",
    instagram: "https://www.instagram.com/momofmymom/",
  },
];

// derive initials from the name so the avatar placeholder needs no upkeep
function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Join() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 grid w-full max-w-6xl content-start gap-x-12 px-6 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_340px] md:items-center md:justify-between md:px-16">
        <div>
          <p className="eyebrow">Membership</p>
          <h1 className="mt-8 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
            Pull up a chair.
          </h1>
          <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
            The Care Den is a membership community for those caring for aging
            parents, partners, and loved ones. As low as $20 a month. Tiered
            pricing offers pay-what-you-can to pay-it-forward options. No
            contract. Leave anytime.
          </p>
          <div className="mt-9">
            <a href="https://heartbeat.com/the-care-den" className={ctaClass}>
              Join now
            </a>
          </div>
        </div>
        <Image
          src="/illustrations/chair.png"
          alt="A watercolor illustration of a cozy armchair with a blanket and a plant."
          width={340}
          height={340}
          className="hidden h-auto w-full max-w-[340px] md:block"
        />
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            A sample week inside the den
          </h2>
          <div className="mt-8">
            {WEEK.map((d) => (
              <div
                key={d.day}
                className="border-t border-body-ink/10 py-6 first:border-t-0 first:pt-0 md:grid md:grid-cols-[9rem_1fr] md:gap-8"
              >
                <p className="text-[1.1875rem] font-semibold leading-[1.4] text-den-green-deep">
                  {d.day}
                </p>
                <div className="mt-1 md:mt-0">
                  <p className="text-[1.1875rem] font-semibold leading-[1.4] text-body-ink">
                    {d.title}
                  </p>
                  <p className="mt-1 text-[1.1875rem] leading-[1.6] text-body-ink">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-[55ch] text-[1.0625rem] italic leading-[1.6] text-body-ink/80">
            Plus, monthly educational workshops with expert guests on a range of
            topics from navigating hospital stays and end-of-life care, to
            managing finances, self-care practices and more.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Who holds the room
        </h2>
        <p className="mt-6 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          Every session is held by a peer facilitator, someone who has either
          done the caregiving or worked in the care space. Meet a few on the
          crew…
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:max-w-4xl">
          {FACILITATORS.map((f) => {
            const handle = f.instagram
              ? "@" + (f.instagram.split("/").filter(Boolean).pop() ?? "")
              : null;
            const inner = (
              <>
                <div className="aspect-square w-full max-w-[210px] overflow-hidden rounded-xl bg-den-green/10 transition group-hover:opacity-95">
                  {f.photo ? (
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-semibold text-den-green-deep">
                      <span aria-hidden="true">{initials(f.name)}</span>
                    </div>
                  )}
                </div>
                <p className="mt-4 font-display text-[1.25rem] leading-[1.3] text-den-green-deep transition group-hover:text-den-green">
                  {f.name}
                </p>
                <p className="mt-2 text-[1rem] leading-[1.55] text-body-ink">
                  {f.bio}
                </p>
                {handle ? (
                  <div className="mt-3 flex items-center gap-2 text-body-ink">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="text-[0.95rem] text-body-ink/70">{handle}</span>
                  </div>
                ) : null}
              </>
            );
            return f.instagram ? (
              <a
                key={f.name}
                href={f.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {inner}
              </a>
            ) : (
              <div key={f.name} className="flex flex-col">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            What&rsquo;s included
          </h2>
          <div className="mt-8 max-w-[48rem]">
            {INCLUDED.map((item) => (
              <p
                key={item}
                className="border-t border-body-ink/10 py-5 text-[1.1875rem] leading-[1.6] text-body-ink first:border-t-0 first:pt-0"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          What it costs
        </h2>
        <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          Memberships start at $20 a month, with $35 and $50 tiers for those who
          can give more and want to ensure facilitators receive fair
          compensation. We keep this simple on purpose. If $20 a month is hard
          right now, write to us. We have a small number of complimentary
          memberships and we&rsquo;d rather have you in the room.
        </p>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Ready?
        </h2>
        <div className="mt-8">
          <a href="https://heartbeat.com/the-care-den" className={ctaClass}>
            Become a member
          </a>
        </div>
        <p className="mt-5 max-w-[48rem] text-[1.0625rem] leading-[1.6] text-body-ink/80">
          You&rsquo;ll be redirected to our community platform to complete
          signup.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
