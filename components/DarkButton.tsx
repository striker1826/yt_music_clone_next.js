"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface DarkButtonProps {
  icon?: React.ReactNode;
  label: string;
  className: string;
}

const DarkButton: React.FC<DarkButtonProps> = ({ icon, label, className }) => {
  return (
    <div
      className={cn(
        " cursor-pointer border border-neutral-700 hover:bg-neutral-700 bg-black text-white rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DarkButton;
