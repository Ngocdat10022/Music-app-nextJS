import React, { memo } from "react";

const TitleDetail = ({ children }: { children: string }) => {
  return (
    <div className="inline-block text-xl font-bold text-center ">
      <h1>{children}</h1>
    </div>
  );
};

export default memo(TitleDetail);
