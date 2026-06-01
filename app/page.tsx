import SiteHeader from "./site-header";

// TODO: Two of these three are placeholders, awaiting actual testimonials
// from Lynn and Jacq. The real quote is repeated for now so the layout is
// testable.
const QUOTE_TEXT =
  "It's a beautiful thing to be seen here, even without all the details. Y'all understand many of the big feelings in my words and the exhaustion and all of it.";
const QUOTES = [
  { text: QUOTE_TEXT, who: "A Care Den member" },
  { text: QUOTE_TEXT, who: "A Care Den member" },
  { text: QUOTE_TEXT, who: "A Care Den member" },
];

export default function Home() {
  return (
    <main className="settle flex min-h-screen flex-col px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16">
      <SiteHeader />

      {/* Editorial hero: left-aligned. Single column on phone/tablet; from md up
          a two-column grid — text left, illustration slot right (hidden below md). */}
      <section className="mx-auto mt-12 grid w-full max-w-6xl flex-1 content-start gap-x-12 md:mt-16 md:grid-cols-[minmax(0,40rem)_400px] md:items-start">
        <div>
          <p className="eyebrow">A peer community for caregivers</p>

          <h1 className="mt-8 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
            Where caregivers <em className="accent">find each other.</em>
          </h1>

          <p className="mt-10 max-w-[50ch] pr-12 text-[1.1875rem] leading-[1.6] text-body-ink md:pr-0">
            A room for those carrying the emotional weight of caring for aging
            parents, partners or loved ones. A peer-led community that gets it
            without the explanation.
          </p>

          <div className="mt-8 flex items-center gap-5 sm:gap-7">
            <a
              href="https://heartbeat.com/the-care-den"
              className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-den-green px-5 py-2.5 text-[0.875rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Become a member
            </a>

            <a
              href="/about"
              className="text-[1.0625rem] text-body-ink underline decoration-den-green-deep decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Read our story
            </a>
          </div>
        </div>

        {/* Illustration slot — temporary quiet placeholder until the
            Maria-Fabrizio-style illustration is commissioned. Hidden below md. */}
        <div
          aria-hidden="true"
          className="hidden aspect-square w-full max-w-[400px] rounded-2xl border border-body-ink/10 bg-body-ink/[0.025] md:block"
        />
      </section>

      {/* "What we are" — left-aligned editorial text column, same centered
          max-w-6xl container as the hero. Generous space above to clear the
          hero (often below the fold). */}
      <section className="mx-auto mt-32 w-full max-w-6xl md:mt-40">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-body-ink">
          What we are
        </h2>

        <div className="mt-8 flex max-w-[50ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            The Care Den is a peer community for mostly* women caregivers.
            It&rsquo;s not a course or curriculum. It&rsquo;s a space to refill
            your cup.
          </p>
          <p>
            Members meet (virtually) five to six times a week to talk, sit,
            laugh, vent, and breathe. Support circles and workshops are led by
            peer facilitators who have been caregivers themselves or have worked
            in care spaces and generously offered to share their wisdom. The
            community lives quietly between sessions, in our private online
            platform, in threads, and in small acts of care members do for each
            other.
          </p>
        </div>

        {/* Closing thought — set apart from the body as a Fraunces italic
            pull-quote, echoing the hero's italic accent. */}
        <p className="mt-12 max-w-[50ch] font-display text-[clamp(1.375rem,2.5vw,1.625rem)] italic leading-[1.4] text-body-ink md:mt-14">
          You don&rsquo;t have to explain yourself here. We already get it.
        </p>
      </section>

      {/* Member quotes — three stacked Fraunces-italic testimonials, left-aligned
          in the same centered max-w-6xl container. See QUOTES TODO above. */}
      <section className="mx-auto mt-32 grid w-full max-w-6xl grid-cols-1 gap-16 md:mt-40 md:grid-cols-3 md:gap-12">
        {QUOTES.map((quote, i) => (
          <figure key={i}>
            <blockquote className="font-display text-[clamp(1.25rem,2vw,1.5rem)] italic leading-[1.4] text-body-ink">
              {quote.text}
            </blockquote>
            <figcaption className="mt-5 text-[1.0625rem] text-body-ink">
              &mdash; {quote.who}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
