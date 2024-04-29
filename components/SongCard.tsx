"use client";

import { TopSong } from "@/types";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FiMoreVertical, FiThumbsUp, FiThumbsDown, FiPlayCircle } from "react-icons/fi";
import IconButton from "./IconButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { addSongList } = usePlayerState();

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
      <div className=" flex items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3ca63f" />
          ) : (
            <AiOutlineCaretDown size={10} color="#ff0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className=" hidden group-hover:flex absolute items-center right-0 top-0  h-[48px] justify-end w-1/2 bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
