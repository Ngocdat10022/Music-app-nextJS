import React, { memo } from "react";

const NameArtist = ({ children }: { children: string }) => {
  return (
    <div className="text-[12px] w-full text-center text-text2">
      <span>{children}</span>
    </div>
  );
};

export default memo(NameArtist);
