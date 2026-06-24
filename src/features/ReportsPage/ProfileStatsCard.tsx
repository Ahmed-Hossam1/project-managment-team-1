import React from "react";
import { cn } from "@/lib/utils";

interface ProfileStatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgColorClass: string;
  iconColorClass: string;
}

export default function ProfileStatsCard({
  title,
  value,
  icon,
  iconBgColorClass,
  iconColorClass,
}: ProfileStatsCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center justify-between w-full sm:w-[220px] md:w-[260px] h-[100px]">
      <div className="flex flex-col justify-between h-full py-1">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {title}
        </span>
        <span className="text-3xl font-bold text-slate-900 tracking-tight">
          {value}
        </span>
      </div>
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105",
          iconBgColorClass,
          iconColorClass
        )}
      >
        {icon}
      </div>
    </div>
  );
}
