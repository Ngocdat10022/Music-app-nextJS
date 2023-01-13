import React from "react";

const ListMusic = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid w-full grid-cols-5 gap-5 mt-5">{children}</div>;
};

export default ListMusic;
