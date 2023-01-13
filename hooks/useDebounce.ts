import { useState, useEffect } from "react";
function UseDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [delay, value]);

  return debouncedValue;
}
export default UseDebounce;
