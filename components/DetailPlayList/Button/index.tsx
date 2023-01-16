import React from "react";
import PauseIcon from "../../../assets/Icons/PauseIcon";

const Button = ({ children }: { children: string }) => {
  return (
    <button className="flex items-center justify-center gap-2 bg-primary rounded-3xl w-[200px] h-[36px]">
      <PauseIcon />
      {children}
    </button>
  );
};

export default Button;
