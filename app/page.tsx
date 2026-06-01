import Image from "next/image";

export default function Home() {
  return (
    <main className="settle flex min-h-screen flex-col px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16">
      <header>
        <a
          href="/"
          aria-label="The Care Den — home"
          className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-den-green-deep"
        >
          {/* TODO: replace public/logo.png — it has a baked-in white
              background that shows as a rectangle on the cream surface.
              Swap for a transparent SVG (or transparent PNG) from Shravan. */}
          <Image
            src="/logo.png"
            alt="The Care Den"
            width={1904}
            height={544}
            priority
            className="h-auto w-[120px] sm:w-[150px]"
          />
        </a>
      </header>

      {/* Single column on phone (groups stack: eyebrow → headline → subhead →
          button → link); two columns from md up, same source order. */}
      <section className="grid w-full max-w-2xl flex-1 content-center md:max-w-5xl md:grid-cols-2 md:items-center md:gap-x-12 lg:max-w-6xl lg:gap-x-16">
        <div>
          <p className="eyebrow">A peer community for caregivers</p>

          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.1] text-body-ink">
            Where caregivers <em className="accent">find each other.</em>
          </h1>
        </div>

        <div className="mt-8 md:mt-0">
          <p className="max-w-[34rem] text-[1.1875rem] leading-[1.6] text-body-ink">
            A room for those carrying the emotional weight of caring for aging
            parents, partners or loved ones. A peer-led community that gets it
            without the explanation.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a
              href="https://heartbeat.com/the-care-den"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-den-green px-7 py-3.5 text-[1.0625rem] font-medium text-warm-white transition-colors duration-[250ms] ease-out hover:bg-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
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
      </section>
    </main>
  );
}
