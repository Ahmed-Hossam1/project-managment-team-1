import { useMemo, useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Board } from "@/features/TasksPage/components/Board/Board";
import { Toolbar } from "@/features/TasksPage/components/Toolbar/Toolbar";
import { ToolbarSkeleton } from "@/features/TasksPage/components/Toolbar/ToolbarSkeleton";
import { useTasks } from "@/features/TasksPage/hooks/useTasks";

export default function TasksPage() {
  const { data, isPending, isError, error } = useTasks();
  const [selectedProjectId, setSelectedProjectId] = useState<string>("all");
  const [selectedProjectName, setSelectedProjectName] = useState<string>("all");

  const allTasks = data?.data ?? [];

  const filteredTasks = useMemo(() => {
    return allTasks.filter((task) => {
      const matchesProjectId =
        selectedProjectId === "all" ||
        String(task.project_id) === selectedProjectId;

      const matchesTaskFilter =
        selectedProjectName === "all" ||
        String(task.project_id) === selectedProjectName;

      return matchesProjectId && matchesTaskFilter;
    });
  }, [allTasks, selectedProjectId, selectedProjectName]);

  return (
    <DashboardLayout>
      <main className="space-y-6 p-6">
        {isPending ? (
          <ToolbarSkeleton />
        ) : (
          <Toolbar
            tasks={allTasks}
            selectedProjectId={selectedProjectId}
            selectedProjectName={selectedProjectName}
            setSelectedProjectId={setSelectedProjectId}
            setSelectedProjectName={setSelectedProjectName}
          />
        )}

        <Board
          tasks={filteredTasks}
          isPending={isPending}
          isError={isError}
          error={error}
        />
      </main>
    </DashboardLayout>
  );
}


