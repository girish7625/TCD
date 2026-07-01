"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Clarity.init("xfpkh7v60y");
    }
  }, []);

  return null;
}
