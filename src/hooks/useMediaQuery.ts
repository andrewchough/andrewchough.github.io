import { useEffect, useState } from "react";

/**
 * A minimal `useMediaQuery` hook.
 * - Returns `false` on the server to avoid SSR crashes.
 * - Updates on media query changes in the browser.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mql = window.matchMedia(query);

    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value.
    setMatches(mql.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // Older Safari
    mql.addListener(onChange as unknown as (this: MediaQueryList, ev: MediaQueryListEvent) => void);
    return () => {
      mql.removeListener(
        onChange as unknown as (this: MediaQueryList, ev: MediaQueryListEvent) => void,
      );
    };
  }, [query]);

  return matches;
}

