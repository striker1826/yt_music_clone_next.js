import { genreateRandomHex } from "@/lib/utils";
import React from "react";

const GenreCard = ({ genre }: { genre: string }) => {
  const hex = genreateRandomHex();

  return (
    <div className=" flex h-[48px] w-full cursor-pointer bg-neutral-800 rounded-r-lg">
      <div className=" h-full w-2 rounded-l-lg" style={{ backgroundColor: hex }}></div>
      <div className=" flex justify-center items-center px-4">{genre}</div>
    </div>
  );
};

export default GenreCard;
