"use client";

import React, { ReactNode } from "react";
import Logo from "@/components/Logo";
import Navigator from "@/components/Navigator";
import { usePlayerState } from "@/hooks/usePlayerState";
import { cn } from "@/lib/utils";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isVisiblePlayer } = usePlayerState();

  return (
    <div className={cn(" flex h-full", isVisiblePlayer && " h-[calc(100vh-72px)]")}>
      <nav className=" hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className=" p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className=" w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
};

export default Sidebar;
