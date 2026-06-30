import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";

export const metadata: Metadata = {
  title: "Contact · The Care Den",
  description:
    "Reach The Care Den. We read every message and respond within a few days.",
};

const linkClass =
  "underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

export default function Contact() {
  return (
    <main className="settle flex min-h-screen flex-col py-12 sm:py-14 md:py-16">
      <SiteHeader />

      <section className="mx-auto mt-12 w-full max-w-6xl px-6 sm:px-10 md:mt-16 md:px-16">
        <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-normal leading-[1.05] text-body-ink">
          Say hello.
        </h1>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-6 sm:px-10 md:mt-24 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          How to reach us
        </h2>
        <div className="mt-8 flex max-w-[48rem] flex-col gap-6 text-[1.1875rem] leading-[1.6] text-body-ink">
          <p>
            For questions about membership, write to us at{" "}
            <a href="mailto:hello@thecareden.com" className={linkClass}>
              hello@thecareden.com
            </a>
            .
          </p>
          <p>
            For press, partnerships, or anything else, the same address works.
            We read every message ourselves.
          </p>
          <p>
            We usually reply within three business days. If it&rsquo;s been
            longer, send a nudge.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6 sm:px-10 md:mt-28 md:px-16">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-den-green-deep">
          Not ready to write?
        </h2>
        <p className="mt-8 max-w-[48rem] text-[1.1875rem] leading-[1.6] text-body-ink">
          That&rsquo;s fine too. Read the{" "}
          <a href="/about" className={linkClass}>
            About
          </a>{" "}
          page or the{" "}
          <a href="/guidelines" className={linkClass}>
            Guidelines
          </a>
          . Most of what people want to know is in there.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
