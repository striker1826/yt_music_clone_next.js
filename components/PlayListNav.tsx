"use client";

import { usePlayerState } from "@/hooks/usePlayerState";
import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

interface PlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: { name: string; channelId: number; channel: string; src: string; imageSrc: string }[];
}

const PlayListNav = ({ playList }: { playList: PlayList }) => {
  const { addSongList } = usePlayerState();
  const { id, owner, playlistName, songList } = playList;

  const onClickPlay = () => {
    // TODO: play music
    addSongList(songList);
  };

  return (
    <li className=" mx-3 px-4 h-[56px] flex items-center justify-between itmes-center hover:bg-neutral-700 rounded-lg group">
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className=" text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div>
        <div onClick={onClickPlay} className=" hidden group-hover:block cursor-pointer">
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
};

export default PlayListNav;
