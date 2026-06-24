import React from "react";
import { cn } from "@/lib/utils";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

export default function ProfileTabs({
  activeTab,
  setActiveTab,
  tabs,
}: ProfileTabsProps) {
  return (
    <div className="flex border-b border-slate-100 mt-4 relative">
      <div className="flex gap-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-3 text-sm font-semibold relative transition-colors duration-300 focus:outline-none",
                isActive ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
              {/* Active Tab indicator bar */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
