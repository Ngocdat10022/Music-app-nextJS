import { useState } from "react";

export const useLoading = (initalState: boolean) => {
  const [loading, setLoading] = useState<boolean>(initalState);
  return { loading, setLoading };
};
