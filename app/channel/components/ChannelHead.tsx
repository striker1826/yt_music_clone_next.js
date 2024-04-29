"use client";

import DarkButton from "@/components/DarkButton";
import WhiteButton from "@/components/WhiteButton";
import { usePlayerState } from "@/hooks/usePlayerState";
import { Channel } from "@/types";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface ChannelHeadProps {
  channel: Channel;
}

const ChannelHead: React.FC<ChannelHeadProps> = ({ channel }) => {
  const { addSongList } = usePlayerState();

  const onClickShuffle = () => {
    addSongList(shuffle(channel.songList));
  };

  return (
    <section>
      <div className=" text-[28px] font-bold">{channel.name}</div>
      <div className=" hidden lg:flex items-center gap-4 text-[14px] mt-4">
        <DarkButton label="구독중 4.18만" className="w-[230px] flex justify-center" />
        <WhiteButton onClick={onClickShuffle} label="셔플" icon={<FiShuffle size={16} />} />
        <WhiteButton onClick={onClickShuffle} label="뮤직 스테이션" icon={<FiMusic size={16} />} />
      </div>
      <div className=" lg:hidden">
        <DarkButton label="구독중 4.18만" className="w-[230px] flex justify-center" />
      </div>
      <article className=" lg:hidden flex gap-4 mt-4">
        <WhiteButton onClick={onClickShuffle} label="셔플" icon={<FiShuffle size={16} />} />
        <WhiteButton onClick={onClickShuffle} label="뮤직 스테이션" icon={<FiMusic size={16} />} />
      </article>
    </section>
  );
};

export default ChannelHead;
