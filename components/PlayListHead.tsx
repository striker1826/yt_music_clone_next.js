"use client";

import { Playlist } from "@/types";
import React from "react";
import IconButton from "./IconButton";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./WhiteButton";
import DarkButton from "./DarkButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface PlayListHeadProps {
  playlist: Playlist;
}

const PlayListHead: React.FC<PlayListHeadProps> = ({ playlist }) => {
  const { addSongList } = usePlayerState();
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementFromArray(songList);

  const onClickPlayList = () => {
    addSongList(songList);
  };

  return (
    <section>
      <div className=" flex gap-[50px] lg:flex-row">
        <div className=" relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image alt="songImg" fill src={randomSong?.imageSrc} />
        </div>
        <article className=" flex flex-col justify-center">
          <div className=" font-bold text-[28px]">{playlistName}</div>
          <div className=" text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className=" hidden lg:flex mt-4  gap-4">
            <WhiteButton onClick={onClickPlayList} icon={<FiPlay />} label="재생" className={"w-[85px] text-[14px]"} />
            <DarkButton icon={<FiFolderPlus />} label="보관함에 저장" className="w-[135px] text-[14px]" />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className=" mt-4 flex gap-4 lg:hidden">
        <WhiteButton onClick={onClickPlayList} icon={<FiPlay />} label="재생" className={"w-[85px] text-[14px]"} />
        <DarkButton icon={<FiFolderPlus />} label="보관함에 저장" className="w-[135px] text-[14px]" />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
};

export default PlayListHead;
