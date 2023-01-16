import React from "react";

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-5 gap-5 mt-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 ">
      {children}
    </div>
  );
};

export default List;
