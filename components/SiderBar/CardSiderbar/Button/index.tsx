import React from "react";

const ButtonCard = ({
  children,
  bg,
  border,
}: {
  children: string;
  bg: string;
  border: string;
}) => {
  return (
    <button
      className={`mt-2 font-bold text-[12px]  w-[145px] rounded-3xl py-1 ${border} ${bg}`}
    >
      {children}
    </button>
  );
};

export default ButtonCard;
