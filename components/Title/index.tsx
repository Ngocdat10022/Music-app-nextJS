import React, { memo } from "react";

const Title = ({ children }: { children: string }) => {
  return <h1 className="mt-10 text-xl font-bold text-white ">{children}</h1>;
};

export default memo(Title);
