import { MoreVertical, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import TaskCard from "./task-card";
import { columns, type ColumnId, type Priority, type Task } from "./data/data";
import { useTasks } from "./hooks/useTasks";
import type { ApiTask, TaskPriority, TaskStatus } from "./types/tasks";

const headerStyles: Record<ColumnId, { bg: string; dot: string }> = {
  todo: { bg: "bg-white", dot: "bg-slate-400" },
  "in-progress": { bg: "bg-blue-50", dot: "bg-blue-500" },
  "in-review": { bg: "bg-rose-50", dot: "bg-rose-400" },
  completed: { bg: "bg-green-50", dot: "bg-green-500" },
};

// API status → board column id
const statusToColumn: Record<TaskStatus, ColumnId> = {
  pending: "todo",
  in_progress: "in-progress",
  in_review: "in-review",
  completed: "completed",
};

// API priority → UI priority badge (no "critical" in the UI → treat as High)
const priorityMap: Record<TaskPriority, Priority> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  critical: "High",
};

// Convert one API task into the shape TaskCard expects.
function mapApiTask(task: ApiTask): Task {
  return {
    id: String(task.id),
    title: task.title,
    description: task.description ?? "",
    priority: priorityMap[task.priority],
    comments: 0, // API has no comment count yet
    date: task.due_date
      ? new Date(task.due_date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      : "—",
    avatars: task.assignees.map(
      (a) => `https://i.pravatar.cc/64?u=${encodeURIComponent(a.email)}`,
    ),
    progress: task.status === "in_progress" ? task.progress : undefined,
  };
}

export default function KanbanBoard() {
  const { data, isPending, isError, error } = useTasks();

  if (isPending) {
    return <p className="p-4 text-sm text-muted-foreground">Loading tasks…</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-sm text-red-600">
        Failed to load tasks: {error.message}
      </p>
    );
  }

  // Group fetched tasks into their columns.
  const tasksByColumn: Record<ColumnId, Task[]> = {
    todo: [],
    "in-progress": [],
    "in-review": [],
    completed: [],
  };
  for (const apiTask of data.data) {
    tasksByColumn[statusToColumn[apiTask.status]].push(mapApiTask(apiTask));
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {columns.map((column) => {
        const style = headerStyles[column.id];
        const tasks = tasksByColumn[column.id];
        return (
          <div
            key={column.id}
            className="flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/70"
          >
            <div
              className={cn(
                "flex items-center justify-between px-4 py-3",
                style.bg,
              )}
            >
              <div className="flex items-center gap-2">
                <span className={cn("size-2 rounded-full", style.dot)} />
                <span className="text-sm font-medium text-text-h">
                  {column.title}
                </span>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <MoreVertical className="size-4" />
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <button className="flex items-center justify-center gap-1.5 rounded-full border border-dashed border-brand/60 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand/5">
                Add Task
                <Plus className="size-4" />
              </button>

              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
