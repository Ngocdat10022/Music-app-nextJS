import React from "react";
interface Props {
  children: React.ReactNode;
  height: string;
  isScroll: boolean;
}
const PoperWrapper = ({ children, height, isScroll }: Props) => {
  return (
    <div
      className={` relative z-0 top-0 flex flex-col bg-bgPoper ${
        isScroll ? "overflow-y-scroll poper-scroll" : ""
      } w-[440px] max-w-[440px] p-5 rounded-3xl h-[550px] right-0  poper-wrapper`}
    >
      {children}
    </div>
  );
};

export default PoperWrapper;
