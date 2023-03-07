import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/perspective.css";
import Close from "../../assets/Icons/Close";
interface IPropsButtonMusicFavorite {
  onClick: () => void;
  functionBtn?: string;
}
const ButtonMusicFavorite = ({
  onClick,
  functionBtn,
}: IPropsButtonMusicFavorite) => {
  return (
    <Tippy
      content={
        functionBtn === "add"
          ? "Thêm vào PlayList"
          : functionBtn === "remove"
          ? "Xoá khỏi PlayList"
          : ""
      }
      animation="perspective"
      placement="top"
      interactive={false}
      delay={100}
    >
      <div
        className="cursor-pointer absolute z-10 right-2  flex items-center text-xl justify-center rounded-full hover:bg-text2 w-[50px] h-[50px] btn"
        onClick={onClick}
      >
        {functionBtn === "add" ? (
          "+"
        ) : functionBtn === "remove" ? (
          <Close className="w-5 h-5" />
        ) : (
          ""
        )}
      </div>
    </Tippy>
  );
};

export default ButtonMusicFavorite;
