import { useEffect, useState } from "react";

/**
 * Returns true after the first render cycle and scroll restoration have settled.
 * Use this to gate whileInView animations so they don't fire prematurely during
 * React Router's ScrollRestoration programmatic scroll-to-top.
 */
export const useAnimationReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(id);
  }, []);

  return ready;
};
