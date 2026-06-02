"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./icons";
import { SuccessArt } from "./illustrations";

export function SuccessScreen({ onReset }: { onReset: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const testflightUrl = process.env.NEXT_PUBLIC_TESTFLIGHT_URL;

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="animate-fade-up text-center motion-reduce:animate-none">
      <div className="flex justify-center">
        <SuccessArt />
      </div>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 text-2xl font-bold tracking-tight text-text outline-none"
      >
        Thank you — you&rsquo;re all set.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-secondary">
        Thanks for helping shape Furmacy. The next step is simple: keep an eye on
        your inbox for your{" "}
        <strong className="font-semibold text-text">TestFlight invite</strong>. We&rsquo;ll
        only email you about the Furmacy beta.
      </p>

      {testflightUrl && (
        <div className="mx-auto mt-6 max-w-md rounded-card border border-border bg-muted p-5 text-left">
          <p className="text-[15px] font-semibold text-text">Want to start now?</p>
          <p className="mt-1 text-sm leading-relaxed text-text-secondary">
            A public TestFlight build is already available — you&rsquo;re welcome to
            jump in while we process your intake.
          </p>
          <a
            href={testflightUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-control bg-accent-strong px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0b6864] focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            Open the public beta
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded text-sm font-semibold text-accent-strong underline-offset-4 hover:underline focus-visible:ring-4 focus-visible:ring-accent/25"
      >
        Submit another response
      </button>
    </div>
  );
}
