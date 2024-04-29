import Header from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-full h-full">
      <Header>{children}</Header>
    </div>
  );
};

export default layout;
