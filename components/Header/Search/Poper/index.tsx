import React from "react";
interface Props {
  children: React.ReactNode;
}
const PoperWrapper = ({ children }: Props) => {
  return (
    <div
      className={` relative z-0 top-0 flex flex-col  bg-bgPoper ${"overflow-y-scroll poper-scroll"} w-[440px] max-w-[440px] max-h-[70vh]  p-5 rounded-3xl right-0  poper-wrapper`}
    >
      {children}
    </div>
  );
};

export default PoperWrapper;
