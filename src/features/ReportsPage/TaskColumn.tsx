import React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TaskItem {
  id: string;
  name: string;
  progress: number; // percentage
}

interface ColumnProps {
  title: string;
  count: number;
  tasks: TaskItem[];
  variant: "todo" | "done";
}

export default function TaskColumn({ title, count, tasks, variant }: ColumnProps) {
  const isTodo = variant === "todo";

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Column Header Bar */}
      <div
        className={cn(
          "flex justify-between items-center px-4 py-3 rounded-xl",
          isTodo
            ? "bg-slate-100/80 text-slate-800"
            : "bg-emerald-50/80 text-emerald-800",
        )}
      >
        <span className="font-bold text-base tracking-tight">{title}</span>
        <span className="text-sm font-bold bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-sm min-w-6 text-center">
          {count}
        </span>
      </div>

      {/* Task Card Body */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col gap-4 min-h-90">
        {/* Sub-header labels */}
        <div className="flex justify-between text-xs font-semibold text-slate-400 border-b border-slate-50 pb-2 px-1">
          <span>Name</span>
          <span>Tasks</span>
        </div>

        {/* Task Items List */}
        <div className="flex flex-col gap-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between group"
            >
              <div className="flex flex-col gap-2.5 w-full pr-4">
                <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                  {task.name}
                </span>
                {/* Progress line */}
                <div className="w-full bg-slate-100/70 h-0.75 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${task.progress}%` }}
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      isTodo ? "bg-blue-500" : "bg-emerald-500",
                    )}
                  />
                </div>
              </div>

              {/* Checkmark icon for completed tasks */}
              {!isTodo && (
                <div className="shrink-0 text-emerald-500 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
