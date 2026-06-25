import { useEffect, useState } from "react";

/**
 * Delays updating the returned value until `delay` ms have passed
 * since the last change to `value`.
 *
 * @param {*}      value - The value to debounce.
 * @param {number} delay - Milliseconds to wait (default 400).
 * @returns The debounced value.
 */
function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
