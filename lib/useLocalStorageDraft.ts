"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Envelope<T> {
  v: number;
  savedAt: string;
  value: T;
}

/**
 * Versioned localStorage draft persistence.
 *
 * Reads once *after mount* (so server and first client render match — no
 * hydration mismatch), debounces writes, and exposes `savedAt` for a subtle
 * "we saved your progress" affordance. Bumping `version` safely ignores any
 * older draft shape.
 */
export function useLocalStorageDraft<T>(key: string, version: number) {
  const [stored, setStored] = useState<T | null>(null);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw) as Envelope<T>;
        if (parsed && parsed.v === version) {
          setStored(parsed.value);
          setSavedAt(parsed.savedAt ?? null);
        }
      }
    } catch {
      /* corrupt or unavailable storage — start fresh */
    }
    setReady(true);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [key, version]);

  const save = useCallback(
    (next: T) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        try {
          const savedAtIso = new Date().toISOString();
          const envelope: Envelope<T> = { v: version, savedAt: savedAtIso, value: next };
          window.localStorage.setItem(key, JSON.stringify(envelope));
          setSavedAt(savedAtIso);
        } catch {
          /* private mode / quota — fail quietly, the form still works */
        }
      }, 350);
    },
    [key, version],
  );

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
    setSavedAt(null);
  }, [key]);

  return { stored, ready, savedAt, save, clear };
}
