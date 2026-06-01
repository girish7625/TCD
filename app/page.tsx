import Image from "next/image";

export default function Home() {
  return (
    <main className="settle flex min-h-screen flex-col px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16">
      <header className="mx-auto w-full max-w-6xl">
        <a
          href="/"
          aria-label="The Care Den — home"
          className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-den-green-deep"
        >
          <Image
            src="/logo.svg"
            alt="The Care Den"
            width={3379}
            height={1000}
            priority
            className="h-auto w-[120px] sm:w-[150px]"
          />
        </a>
      </header>

      {/* Editorial hero: left-aligned. Single column on phone/tablet; from md up
          a two-column grid — text left, illustration slot right (hidden below md). */}
      <section className="mx-auto mt-12 grid w-full max-w-6xl flex-1 content-start gap-x-12 md:mt-16 md:grid-cols-[minmax(0,40rem)_400px] md:items-start">
        <div>
          <p className="eyebrow">A peer community for caregivers</p>

          <h1 className="mt-8 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
            Where caregivers <em className="accent">find each other.</em>
          </h1>

          <p className="mt-8 max-w-[50ch] text-[1.1875rem] leading-[1.6] text-body-ink">
            A room for those carrying the emotional weight of caring for aging
            parents, partners or loved ones. A peer-led community that gets it
            without the explanation.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
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
    </main>
  );
}
