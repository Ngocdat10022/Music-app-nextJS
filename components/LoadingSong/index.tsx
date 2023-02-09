import React from "react";
import Loading from "../Loading";

const LoadingSong = () => {
  return (
    <div className="loading flex bg-colorPlayMusic w-full h-full items-center justify-center opacity-80 absolute top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%] max-sm:w-full">
      <Loading />
    </div>
  );
};

export default LoadingSong;
