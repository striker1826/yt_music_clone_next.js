"use client";

import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    // home으로 이동하는 로직
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className=" flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton icon={<IoCloseOutline size={24} />} onClickIcon={onClickClose} />
      ) : (
        <div className=" lg:hidden">
          <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />
        </div>
      )}

      <div className=" cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
