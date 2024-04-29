"use client";

import React, { useCallback, useEffect, useState } from "react";
import { PlayerSlider } from "@/components/ui/playerSlider";
import { useAudio } from "react-use";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline } from "react-icons/io5";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import { usePlayerState } from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";

const PlayerContent = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || "",
    autoPlay: true,
  });

  const onClickprevBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }

    if (prevPlayerQueue.length === 0) return;
    playBack();
  };

  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  const onClickPlayBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };

  const onClickPauseBtn = () => {
    controls.pause();
  };

  useEffect(() => {
    const currentRef = ref?.current;
    currentRef?.addEventListener("ended", onClickNextBtn);
    return () => {
      currentRef?.removeEventListener("ended", onClickNextBtn);
    };
  }, [ref, onClickNextBtn]);

  return (
    <div className=" h-full w-full relative">
      <div className=" absolute top-[-16px] w-full">
        <PlayerSlider
          className=" w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
          max={state.duration}
        />
      </div>
      {audio}
      <section className=" flex justify-between items-center w-full h-full px-2 lg:px-6">
        <div className=" h-full flex items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp size={24} className=" cursor-pointer" onClick={onClickprevBtn} />
          {state.playing ? (
            <AiOutlinePause size={40} className=" cursor-pointer" onClick={onClickPauseBtn} />
          ) : (
            <RiPlayFill size={40} className=" cursor-pointer" onClick={onClickPlayBtn} />
          )}
          <IoPlaySkipForwardSharp size={24} className=" cursor-pointer" onClick={onClickNextBtn} />
        </div>
        <article>
          <div className=" flex gap-4 items-center">
            <div className=" relative w-[40px] h-[40px] ">
              <Image fill className=" object-cover" src={activeSong?.imageSrc || ""} alt="img"></Image>
            </div>
            <div className=" flex flex-col">
              <div className=" text-neutral-500 text-[14px]">{activeSong?.name}</div>
              <div>{activeSong?.channel} + 조회수 7.8만회 + 좋아요 1.7천개</div>
            </div>
          </div>
        </article>
        <div className=" flex gap-2">
          <div className=" gap-2 hidden lg:flex">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContent;
