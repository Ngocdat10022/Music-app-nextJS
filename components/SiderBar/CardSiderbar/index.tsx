import React from "react";
import ButtonCard from "./Button";

const CardSiderBar = ({
  children,
  childrenCard,
  bg,
  bgBtn,
  border,
}: {
  children: string;
  childrenCard: string;
  bg: "bg-primary" | "bg-gradient";
  bgBtn: "bg-transparent" | "bg-yellow";
  border: "border" | "border-none";
}) => {
  return (
    <div
      className={`max-lg:hidden lg:block flex flex-col items-center px-2 py-4 mx-5 mb-2 rounded-xl login-nav-container ${bg}`}
    >
      <div className="w-full text-[12px] font-bold text-center">{children}</div>
      <ButtonCard border={border} bg={bgBtn}>
        {childrenCard}
      </ButtonCard>
    </div>
  );
};

export default CardSiderBar;
