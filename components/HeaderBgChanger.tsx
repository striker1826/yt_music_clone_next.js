"use client";

import useUIState from "@/hooks/useUIState";
import React, { useEffect } from "react";

const HeaderBgChanger = ({ imageSrc }: { imageSrc: string }) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc]);

  return <></>;
};

export default HeaderBgChanger;
