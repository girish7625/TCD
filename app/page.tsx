import SiteHeader from "./site-header";

const QUOTE_TEXT =
  "It's a beautiful thing to be seen here, even without all the details. Y'all understand many of the big feelings in my words and the exhaustion and all of it.";
const QUOTES = [
  { text: QUOTE_TEXT, who: "A Care Den member" },
  { text: QUOTE_TEXT, who: "A Care Den member" },
  { text: QUOTE_TEXT, who: "A Care Den member" },
];

function IllustrationSlot({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`hidden aspect-square w-full rounded-2xl border border-body-ink/10 bg-body-ink/[0.025] md:block ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 grid w-full max-w-6xl flex-1 content-start gap-x-12 px-6 sm:px-10 md:mt-16 md:grid-cols-[minmax(0,40rem)_340px] md:items-start md:justify-between md:px-16">
        <div>
          <p className="eyebrow">A peer community for caregivers</p>

          <h1 className="mt-8 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
            Where caregivers <em className="accent">find</em> each other.
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

        <IllustrationSlot className="max-w-[340px] md:mt-16" />
      </section>

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-16">
          <div className="md:grid md:grid-cols-[minmax(0,40rem)_340px] md:items-start md:justify-between md:gap-x-12">
            <div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
                What we are
              </h2>

              <div className="mt-8 flex max-w-[50ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
                <p>
                  The Care Den is a peer community for mostly* women caregivers.
                  It&rsquo;s not a course or curriculum. It&rsquo;s a space to
                  refill your cup.
                </p>
                <p>
                  Members meet (virtually) five to six times a week to talk,
                  sit, laugh, vent, and breathe. Support circles and workshops
                  are led by peer facilitators who have been caregivers
                  themselves or have worked in care spaces and generously
                  offered to share their wisdom. The community lives quietly
                  between sessions, in our private online platform, in threads,
                  and in small acts of care members do for each other.
                </p>
              </div>
            </div>

            <IllustrationSlot className="max-w-[340px] md:mt-20" />
          </div>

          <p className="mx-auto mt-12 max-w-[42ch] text-center font-display text-[clamp(1.375rem,2.5vw,1.625rem)] italic leading-[1.4] text-body-ink md:mt-16">
            You don&rsquo;t have to explain yourself here. We already get it.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 grid w-full max-w-6xl grid-cols-1 gap-16 px-6 sm:px-10 md:mt-28 md:grid-cols-3 md:gap-12 md:px-16">
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

      <section className="mt-24 w-full bg-porch-cream-deep py-14 md:mt-28 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:grid md:grid-cols-[340px_minmax(0,34rem)] md:items-start md:justify-between md:gap-x-12 md:px-16">
          <IllustrationSlot className="max-w-[340px] md:mt-20" />

          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
              The rhythm of the room
            </h2>

            <div className="mt-8 flex max-w-[50ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
              <p>
                A week inside The Care Den is built around real conversation.
                Mondays start with a support circle. Midweek offers a co-working
                session, a walking group or gentle exercises that balance the
                nervous system. Sundays slow down. Some weeks bring a workshop
                with an expert in the field of care. Some weeks just hold space.
              </p>
              <p>
                You can come to one session a week or all of them. You can come
                and stay quiet. We hold room for all of it.
              </p>
            </div>

            <a
              href="/sessions"
              className="mt-8 inline-block text-[1.0625rem] text-body-ink underline decoration-den-green-deep decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              See the full week
              <span className="ml-1 no-underline" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:grid md:grid-cols-[minmax(0,40rem)_340px] md:items-start md:justify-between md:gap-x-12 md:px-16">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
            Who built this
          </h2>

          <div className="mt-8 flex max-w-[50ch] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
            <p>
              The Care Den was built by Jacquelyn Revere and Lynn McGuire-Raj.
            </p>
            <p>
              Jacquelyn Revere spent 6 years caring for her mother with
              dementia. 19 of those months, she cared for both her mother and
              grandmother simultaneously. She&rsquo;s built an audience of
              nearly one million supporters across social media platforms under
              the handle @momofmymom to tell the truth about caregiving. She has
              written an op-ed for the LA Times&hellip;
            </p>
            <p>
              Lynn McGuire-Raj, MSW, LCSW-A was cared for by her parents when
              she had cancer in her thirties. Twenty years later, she returned
              home to care for them as they navigated heart disease and
              dementia. A former fundraiser and festival producer turned
              counselor&hellip;
            </p>
          </div>

          <a
            href="/about"
            className="mt-8 inline-block text-[1.0625rem] text-body-ink underline decoration-den-green-deep decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
          >
            Read our full story
            <span className="ml-1 no-underline" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>

        <IllustrationSlot className="max-w-[340px] md:mt-20" />
      </section>

      <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-body-ink/10 px-6 pt-10 sm:px-10 md:mt-28 md:px-16">
        <div className="grid grid-cols-1 gap-8 text-[1.0625rem] text-body-ink md:grid-cols-3 md:items-center md:gap-6">
          <p>The Care Den</p>

          <p className="md:text-center">
            <a
              href="/guidelines"
              className="underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Guidelines
            </a>
            <span className="mx-2 text-body-ink/40" aria-hidden="true">
              &middot;
            </span>
            <a
              href="/contact"
              className="underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Contact
            </a>
          </p>

          <p className="md:text-right">
            <a
              href="/privacy"
              className="underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Privacy
            </a>
            <span className="mx-2 text-body-ink/40" aria-hidden="true">
              &middot;
            </span>
            <a
              href="/terms"
              className="underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
            >
              Terms
            </a>
            <span className="mx-2 text-body-ink/40" aria-hidden="true">
              &middot;
            </span>
            <span>&copy; 2026 The Care Den</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
