import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Font preview — The Care Den",
};

// TEMPORARY — serif comparison page for Lynn & Jacq. Delete this whole file
// (app/fonts/) and the extra fonts in layout.tsx once a serif is chosen.
const QUOTE_TEXT =
  "It's a beautiful thing to be seen here, even without all the details. Y'all understand many of the big feelings in my words and the exhaustion and all of it.";

const OPTIONS = [
  { name: "Fraunces (current)", varName: "--font-fraunces", weight: 400 },
  { name: "Cormorant Garamond", varName: "--font-cormorant", weight: 500 },
  { name: "Lora", varName: "--font-lora", weight: 400 },
  { name: "Newsreader", varName: "--font-newsreader", weight: 400 },
];

export default function FontPreview() {
  return (
    <main className="settle min-h-screen px-6 py-12 sm:px-10 sm:py-14 md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <a
          href="/"
          className="text-[1.0625rem] text-body-ink underline decoration-den-green-deep decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep"
        >
          <span aria-hidden="true">&larr;</span> Back to the site
        </a>

        <h1 className="mt-10 font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.1] text-den-green-deep">
          Font preview
        </h1>
        <p className="mt-4 max-w-[55ch] text-[1.1875rem] leading-[1.6] text-body-ink/80">
          The same headline and member quote shown in four serif options. Only
          the display serif changes&mdash;the body text you&rsquo;re reading now
          stays exactly as it is on the live site.
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {OPTIONS.map((f) => (
            <div key={f.name} className="border-t border-body-ink/10 pt-8">
              <p className="text-[0.8125rem] font-bold tracking-[0.12em] text-body-ink/50">
                {f.name.toUpperCase()}
              </p>
              <p
                className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-body-ink"
                style={{ fontFamily: `var(${f.varName})`, fontWeight: f.weight }}
              >
                Where caregivers <em className="accent">find</em> each other.
              </p>
              <p
                className="mt-5 max-w-[55ch] text-[1.375rem] italic leading-[1.45] text-body-ink"
                style={{ fontFamily: `var(${f.varName})` }}
              >
                {QUOTE_TEXT}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
