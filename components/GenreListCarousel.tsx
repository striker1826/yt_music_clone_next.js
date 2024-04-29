import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import GenreCard from "@/components/GenreCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  genreList: string[];
}

const GenreColumn = ({ genreList = [] }: { genreList: string[] }) => {
  return (
    <div className=" flex flex-col gap-4">
      {genreList.map((genre, idx) => {
        return <GenreCard key={genre} genre={genre} />;
      })}
    </div>
  );
};

const GenreListCarousel: React.FC<SongListCarouselProps> = ({ title, subTitle, Thumbnail, genreList }) => {
  const chunkedGenreList = chunkArray(genreList, 4) as string[][];

  return (
    <div className=" w-full">
      <Carousel>
        <div className=" flex justify-between items-end my-2">
          <article className="flex gap-3">
            {Thumbnail}
            <div className="flex flex-col justfy-center">
              <div>{subTitle && <div className="text-neutral-500">{subTitle}</div>}</div>
              <div className=" text-[34px] font-bold leading-[34px]">{title}</div>
            </div>
          </article>
          <div className=" relative left-[-45px]">
            <div className=" absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className=" left-2" />
            </div>
          </div>
        </div>
        <div className=" mt-5"></div>
        <CarouselContent>
          {chunkedGenreList?.map((genreList, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                <GenreColumn genreList={genreList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
