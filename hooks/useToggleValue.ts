import { useState } from "react";

export default function useToggleValue(initalState: boolean) {
  const [value, setValue] = useState<boolean>(initalState);

  const handleToggleValue = (defaultValue?: boolean) => {
    defaultValue ? setValue(true) : setValue(!value);
  };

  return { value, handleToggleValue };
}
