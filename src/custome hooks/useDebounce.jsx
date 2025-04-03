import React, { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
