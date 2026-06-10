const footerLink =
  "underline decoration-den-green-deep/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-den-green-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-den-green-deep";

export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-body-ink/10 px-6 pt-10 sm:px-10 md:mt-28 md:px-16">
      <div className="grid grid-cols-1 gap-8 text-[1.0625rem] text-body-ink md:grid-cols-3 md:items-center md:gap-6">
        <p>The Care Den</p>

        <p className="md:text-center">
          <a href="/guidelines" className={footerLink}>
            Guidelines
          </a>
          <span className="mx-2 text-body-ink/40" aria-hidden="true">
            &middot;
          </span>
          <a href="/contact" className={footerLink}>
            Contact
          </a>
        </p>

        <p className="md:text-right">
          <a href="/legal#privacy" className={footerLink}>
            Privacy
          </a>
          <span className="mx-2 text-body-ink/40" aria-hidden="true">
            &middot;
          </span>
          <a href="/legal#terms" className={footerLink}>
            Terms
          </a>
          <span className="mx-2 text-body-ink/40" aria-hidden="true">
            &middot;
          </span>
          <a href="/legal#disclaimer" className={footerLink}>
            Disclaimer
          </a>
          <span className="mx-2 text-body-ink/40" aria-hidden="true">
            &middot;
          </span>
          <span>&copy; 2026 The Care Den</span>
        </p>
      </div>
    </footer>
  );
}
