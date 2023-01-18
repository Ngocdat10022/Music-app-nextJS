import React from "react";

const ListVideo = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-3 gap-5 mt-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 ">
      {children}
    </div>
  );
};

export default ListVideo;
