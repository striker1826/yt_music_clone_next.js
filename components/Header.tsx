"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import UserIcon from "@/components/UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import Logo from "@/components/Logo";
import Navigator from "@/components/Navigator";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

const HeaderDrawer = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className=" py-3">
          <div className=" px-3">
            <Logo isInDrawer onClickClose={() => setIsOpen((prev) => false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const { headerImageSrc } = useUIState();

  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const headRefCurrent = headRef?.current;
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      setIsScrolled(scrollValue !== 0);
    };

    headRefCurrent?.addEventListener("scroll", handleScroll);

    return () => headRefCurrent?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headRef} className=" relative overflow-y-auto w-full h-full">
      <section className=" absolute top-0 w-full">
        <div className=" relative h-[400px] w-full">
          <Image
            className=" object-cover"
            fill
            src={headerImageSrc || "https://images.unsplash.com/photo-1707833558984-3293e794031c"}
            alt="backgroundImage"
          />
          <div className=" absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className=" absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full"></div>
        </div>
      </section>
      {/* searchSection */}
      <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
        <PagePadding>
          <div className=" h-[64px] flex justify-between items-center">
            <article className=" h-[42px] min-w-[480px] items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] hidden lg:flex border-neutral-500 border">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className=" h-full w-full bg-transparent"
                type="text"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className=" lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className=" flex gap-6 items-center ">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className=" relative">{children}</section>
    </header>
  );
};

export default Header;
