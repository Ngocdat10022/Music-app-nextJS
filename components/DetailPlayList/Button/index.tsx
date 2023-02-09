import React, { memo } from "react";
import PauseIcon from "../../../assets/Icons/PauseIcon";

const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 bg-primary rounded-3xl w-[200px] h-[36px]"
    >
      <PauseIcon />
      {children}
    </button>
  );
};

export default memo(Button);
