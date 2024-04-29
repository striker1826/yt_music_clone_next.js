import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}

const IconButton = ({ icon, onClickIcon = () => {} }: Props) => {
  return (
    <div
      onClick={onClickIcon}
      className=" flex justify-center items-center w-[36px] h-[36px]  hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
    >
      {icon}
    </div>
  );
};

export default IconButton;
