import { useEffect, useState } from "react";

/**
 * Waits a short time before updating the value.
 * This stops too many API calls when the user types fast.
 *
 * @param {*}      value - The value to wait for.
 * @param {number} delay - Time to wait in milliseconds (default 400).
 * @returns The value after the wait.
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
