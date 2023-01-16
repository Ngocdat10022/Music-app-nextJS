import React from "react";

const TitleDetail = ({ children }: { children: string }) => {
  return (
    <div className="inline-block text-xl font-bold ">
      <h1>{children}</h1>
    </div>
  );
};

export default TitleDetail;
