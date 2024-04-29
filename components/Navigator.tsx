"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlayListNav";

const Navigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      { icon: <GoHome size={24} />, label: "홈", isActive: pathname === "/", href: "/" },
      { icon: <FiCompass size={24} />, label: "둘러보기", isActive: pathname === "/explore", href: "/explore" },
      { icon: <FiMusic size={24} />, label: "보관함", isActive: pathname === "/library", href: "/library" },
    ];
  }, [pathname]);

  return (
    <div>
      <section className=" flex flex-col gap-2 p-4 ">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex items-center gap-4 text-[16px] rounded-lg hover:bg-neutral-700 p-2",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className=" px-6">
        <div className=" w-full -h-[1px] bg-neutral-700"></div>
      </section>
      <section className=" px-6">
        <div className="flex hover:bg-neutral-700 cursor-pointer items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center gap-2">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className=" flex flex-col">
          {dummyPlaylistArray.map((playList) => {
            return <PlayListNav key={playList.owner} playList={playList} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
