"use client";

import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import { FiMoreVertical, FiThumbsUp, FiThumbsDown, FiPlayCircle } from "react-icons/fi";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { usePlayerState } from "@/hooks/usePlayerState";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { addSongList } = usePlayerState();
  const { channel, channelId } = song;
  const { push } = useRouter();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  const onClickPlay = () => {
    addSongList([song]);
  };

  return (
    <article className=" flex items-center gap-4 h-[48px] w-full relative group">
      <div className=" w-[48px] h-[48px] relative">
        <Image fill src={song.imageSrc} alt="img" className=" object-cover" />
        <section
          onClick={onClickPlay}
          className=" hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer"
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className=" flex items-center gap-4"></div>
      <div className=" flex gap-4 justify-between basis-1/3">
        <div className=" w-[130px] truncate">{song.name}</div>
        <div onClick={onClickChannel} className=" text-neutral-500 hover:underline cursor-pointer">
          {channel}
        </div>
      </div>
      <section className=" hidden group-hover:flex absolute items-center right-0 top-0  h-[48px] justify-end w-[120px] bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
