"use client";

import { getRandomElementFromArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";

import React from "react";
import IconButton from "./IconButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface PlayListCardProps {
  playlist: Playlist;
}

const PlayListCard: React.FC<PlayListCardProps> = ({ playlist }) => {
  const { addSongList } = usePlayerState();
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const songListLength = songList?.length;
  const imgSrc = getRandomElementFromArray(songList).imageSrc;

  const onClickCard = () => {
    push(`/playlist?list=${id}`);
  };

  const onClickPlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    addSongList(songList);
  };

  return (
    <article className=" h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className=" relative h-[136px]">
        <Image src={imgSrc} alt="thumbnail" fill className=" object-cover rounded-md" />
        <div className=" relative hidden group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className=" absolute top-2 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={(e) => onClickPlay(e)}
            className=" absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]"
          >
            <FiPlay size={20} color="red" />
          </div>
        </div>
      </section>

      <section className=" mt-2">
        <div>{playlistName}</div>
        <div className=" text-neutral-500">{`${owner} - 트랙 ${songListLength}`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
