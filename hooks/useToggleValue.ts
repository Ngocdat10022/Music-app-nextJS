import { useState } from "react";

export default function useToggleValue() {
  const [value, setValue] = useState<boolean>(false);

  const handleToggleValue = (defaultValue?: boolean) => {
    defaultValue ? setValue(true) : setValue(!value);
  };

  return { value, handleToggleValue };
}
