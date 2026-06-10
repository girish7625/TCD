"use client";

import { useEffect } from "react";

// Opens and scrolls to the <details> whose id matches the URL hash
// (e.g. /legal#terms). The page itself stays a Server Component;
// only this effect needs the client.
export default function LegalHashOpener() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    if (el instanceof HTMLDetailsElement) el.open = true;
    el.scrollIntoView();
  }, []);

  return null;
}
