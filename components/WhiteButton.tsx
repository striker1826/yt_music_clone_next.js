"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface WhiteButtonProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ icon, label, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        " hover:bg-neutral-200 cursor-pointer bg-white text-black rounded-2xl flex items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
