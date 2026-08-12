import { useEffect, useState } from "react";

/** Use media queries in React */
export function useMediaQuery({ query }) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    media.onchange = (e) => {
      setMatches(e.matches);
    };
    return () => {
      media.onchange === null;
    };
  }, [matches, query]);

  return matches;
}

export const useIsPhone = () => useMediaQuery("(max-width: 719px)");
export const useIsTablet = () => useMediaQuery("(min-width: 720px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
