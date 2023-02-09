import React, { memo } from "react";

const ReleaseDate = ({ children }: { children: string }) => {
  return (
    <div className="text-[12px] text-text2">
      <span>{children}</span>
    </div>
  );
};

export default memo(ReleaseDate);
